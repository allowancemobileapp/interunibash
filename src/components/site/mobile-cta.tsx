"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { ticketTiers } from "@/lib/data";

export function MobileCTA() {
  const cheapestTicket = ticketTiers.reduce((prev, curr) => (prev.price < curr.price ? prev : curr));

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 p-4 backdrop-blur-sm md:hidden">
      <div className="container flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Tickets from</p>
          <p className="text-lg font-bold text-primary">₦{cheapestTicket.price.toLocaleString()}</p>
        </div>
        <Button asChild size="lg">
          <Link href="/tickets">
            <Ticket className="mr-2 h-4 w-4" />
            Get Tickets
          </Link>
        </Button>
      </div>
    </div>
  );
}
