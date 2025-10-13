import { TicketForm } from "@/components/ticket-form";
import { TicketCard } from "@/components/ticket-card";
import { ticketTiers } from "@/lib/data";

export default function TicketsPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Purchase Your Ticket</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Secure your spot at the most anticipated university event of the year.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    <h2 className="text-2xl font-bold font-headline mb-6">Your Details</h2>
                    <TicketForm />
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold font-headline mb-6">Available Tiers</h2>
                    <div className="space-y-6">
                        {ticketTiers.map((ticket) => (
                           <TicketCard 
                                key={ticket.id} 
                                ticket={ticket} 
                                isFeatured={ticket.id === 'all-access'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
