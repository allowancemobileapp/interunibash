"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { ticketTiers } from "@/lib/data";
import { useEffect, useState } from "react";

export function MobileCTA() {
  const [cheapestTicketPrice, setCheapestTicketPrice] = useState<number | null>(null);

  useEffect(() => {
    if (ticketTiers && ticketTiers.length > 0) {
      const cheapest = ticketTiers.reduce((prev, curr) => (prev.price < curr.price ? prev : curr));
      setCheapestTicketPrice(cheapest.price);
    }
  }, []);

  if (cheapestTicketPrice === null) {
    return null; // Don't render until client-side hydration is complete
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 py-4 md:hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Tickets from</p>
          <p className="text-lg font-bold text-primary">₦{cheapestTicketPrice.toLocaleString()}</p>
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
