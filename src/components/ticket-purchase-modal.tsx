
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
import { ReactNode, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";

interface TicketPurchaseModalProps {
    ticket: TicketTier;
    children: ReactNode;
}

export function TicketPurchaseModal({ ticket, children }: TicketPurchaseModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const config = {
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
  };

  const onSuccess = (reference: any) => {
    toast({
        title: "Payment Successful!",
        description: `Your ticket purchase was successful. Reference: ${reference.reference}`,
    });
    // Here you would typically save the transaction to your database
    console.log(reference);
  };

  const onClose = () => {
    console.log('closed');
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
        toast({
            title: "Missing Information",
            description: "Please fill out your name and email.",
            variant: "destructive"
        });
        return;
    }
    initializePayment({onSuccess, onClose});
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Purchase Ticket</DialogTitle>
          <DialogDescription>
            You're purchasing the <span className="font-bold text-primary">{ticket.name}</span> for ₦{ticket.price.toLocaleString()}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
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
          <Button type="submit" className="w-full">
            Pay ₦{ticket.price.toLocaleString()}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
