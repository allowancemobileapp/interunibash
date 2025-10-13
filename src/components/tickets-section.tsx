import { ticketTiers } from "@/lib/data";
import { TicketCard } from "./ticket-card";

export function TicketsSection() {
  return (
    <section id="tickets" className="py-12 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get Your Tickets</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Choose your pass and get ready for an unforgettable experience. Secure your spot now!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {ticketTiers.map((ticket, index) => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              isFeatured={ticket.id === 'all-access'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
