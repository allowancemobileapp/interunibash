
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { TicketTier } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TicketPurchaseModal } from "./ticket-purchase-modal";

interface TicketCardProps {
  ticket: TicketTier;
  isFeatured?: boolean;
}

export function TicketCard({ ticket, isFeatured = false }: TicketCardProps) {
  return (
    <Card className={cn("flex flex-col", isFeatured && "border-primary border-2 relative shadow-lg")}>
       {isFeatured && (
        <div className="absolute -top-4 right-4 bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">{ticket.name}</CardTitle>
        <CardDescription>
          <span className="text-4xl font-bold text-primary">₦{ticket.price.toLocaleString()}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 text-sm text-muted-foreground">
          {ticket.perks.map((perk, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-primary/80 shrink-0" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <TicketPurchaseModal ticket={ticket}>
          <Button className="w-full" variant={isFeatured ? "default" : "outline"}>
            Buy Now
          </Button>
        </TicketPurchaseModal>
      </CardFooter>
    </Card>
  );
}
