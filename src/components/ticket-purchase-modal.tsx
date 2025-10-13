"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TicketForm } from "./ticket-form";
import type { TicketTier } from "@/lib/types";
import { ReactNode } from "react";

interface TicketPurchaseModalProps {
    ticket: TicketTier;
    children: ReactNode;
}

export function TicketPurchaseModal({ ticket, children }: TicketPurchaseModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Purchase Tickets</DialogTitle>
          <DialogDescription>
            You're purchasing the <span className="font-bold text-primary">{ticket.name}</span>. Fill out your details below.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
            <TicketForm defaultTicketId={ticket.id} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
