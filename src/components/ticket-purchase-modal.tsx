
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
import { ReactNode, useState, useMemo, useCallback } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// This new component will contain all the Paystack logic.
// It is only rendered when the user is ready to pay, preventing re-initialization issues.
const PaystackButton = ({ email, name, phone, ticket }: { email: string; name: string; phone: string; ticket: TicketTier }) => {
    const { toast } = useToast();
    const [isProcessing, setIsProcessing] = useState(false);

    const config = useMemo(() => ({
        reference: (new Date()).getTime().toString(),
        email,
        amount: ticket.price * 100, // Amount in kobo
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
        metadata: {
          name,
          phone,
          ticketName: ticket.name,
        }
    }), [email, name, phone, ticket.price, ticket.name]);

    const onSuccess = useCallback((reference: any) => {
        const ticketPrefix = ticket.name.substring(0, 2).toUpperCase();
        const uniqueId = reference.reference.slice(-6).toUpperCase();
        const ticketCode = `${ticketPrefix}-${uniqueId}`;

        toast({
            title: "Payment Successful!",
            description: `Your ticket code is ${ticketCode}. Please screenshot this for your records. Ref: ${reference.reference}`,
            duration: 900000,
        });
        setIsProcessing(false);
    }, [ticket.name, toast]);

    const onClose = useCallback(() => {
        setIsProcessing(false);
    }, []);

    const initializePayment = usePaystackPayment(config);

    const handlePayment = () => {
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

    return (
        <Button onClick={handlePayment} disabled={isProcessing} className="w-full">
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : `Pay ₦${ticket.price.toLocaleString()}`}
        </Button>
    )
}


interface TicketPurchaseModalProps {
    ticket: TicketTier;
    children: ReactNode;
}

export function TicketPurchaseModal({ ticket, children }: TicketPurchaseModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const handleOpenChange = (isOpen: boolean) => {
      if (!isOpen) {
        setEmail('');
        setName('');
        setPhone('');
      }
      setOpen(isOpen);
  }

  // The button is now inside the form and will trigger the Paystack logic.
  // The Paystack logic itself is encapsulated in the PaystackButton component.
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
            {/* The PaystackButton component is only rendered here, ensuring the hook is isolated */}
            <PaystackButton email={email} name={name} phone={phone} ticket={ticket} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
