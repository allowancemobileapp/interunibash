
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { TicketTier } from "@/lib/types";
import { ReactNode, useState, useEffect, useMemo, useCallback } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface TicketPurchaseModalProps {
    ticket: TicketTier;
    children: ReactNode;
}

export function TicketPurchaseModal({ ticket, children }: TicketPurchaseModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const onSuccess = useCallback((reference: any) => {
    const ticketPrefix = ticket.name.substring(0, 2).toUpperCase();
    const uniqueId = reference.reference.slice(-6).toUpperCase();
    const ticketCode = `${ticketPrefix}-${uniqueId}`;

    toast({
        title: "Payment Successful!",
        description: `Your ticket code is ${ticketCode}. Please screenshot this for your records. Ref: ${reference.reference}`,
        duration: 900000,
    });
    console.log(reference);
    setOpen(false);
    setIsProcessing(false);
  }, [ticket.name, toast]);

  const onClose = useCallback(() => {
    console.log('closed');
    setIsProcessing(false);
  }, []);

  const config = useMemo(() => ({
      reference: (new Date()).getTime().toString(),
      email,
      amount: ticket.price * 100, // Amount in kobo
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
      metadata: {
        name,
        phone,
        ticketName: ticket.name,
        custom_fields: [
            {
              display_name: "Ticket Type",
              variable_name: "ticket_type",
              value: ticket.name
            },
            {
              display_name: "Name",
              variable_name: "name",
              value: name
            },
            {
              display_name: "Phone Number",
              variable_name: "phone",
              value: phone
            }
        ]
      }
  }), [email, name, phone, ticket.price, ticket.name]);

  const initializePayment = usePaystackPayment(config);

  const handlePayment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !name) {
        toast({
            title: "Missing Information",
            description: "Please fill out your name and email.",
            variant: "destructive"
        });
        return;
    }
    if (isProcessing) return;
    
    setIsProcessing(true);
    initializePayment({onSuccess, onClose});
  }

  const handleOpenChange = (isOpen: boolean) => {
      if (!isOpen) {
        // Reset state when dialog is closed
        setIsProcessing(false);
        setEmail('');
        setName('');
        setPhone('');
      }
      setOpen(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Purchase Ticket</DialogTitle>
          <DialogDescription>
            You're purchasing the <span className="font-bold text-primary">{ticket.name}</span> for ₦{ticket.price.toLocaleString()}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Burna Boy" required />
            </div>
             <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="burna@boy.com" required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" />
            </div>
          <Button onClick={handlePayment} disabled={isProcessing} className="w-full">
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : `Pay ₦${ticket.price.toLocaleString()}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
