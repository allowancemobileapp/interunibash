"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Ticket } from "lucide-react";
import { ticketTiers } from "@/lib/data";

export default function TicketsPage() {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold tracking-widest">TICKETS</h1>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/contact">
                        <Plus className="h-6 w-6" />
                    </Link>
                </Button>
            </div>

            <Card className="bg-muted/40 rounded-none md:rounded-2xl flex flex-col md:flex-row justify-between items-center mb-8">
                 <div className="container mx-auto px-4 md:px-8 lg:px-16 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h2 className="text-4xl font-extrabold font-headline uppercase">TRAVEL PACKAGES</h2>
                        <p className="text-muted-foreground text-sm">Make your journey to HOMECOMING™ 2025 stress-free with our exclusive Travel Packages - coming soon.</p>
                    </div>
                    <Badge variant="secondary" className="text-sm mt-4 md:mt-0 shrink-0">Coming Soon</Badge>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3">
                {ticketTiers.map((ticket) => (
                    <Card key={ticket.id} className={`${ticket.id === 'all-access' ? 'bg-accent text-accent-foreground' : ticket.id === 'party' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'} rounded-none flex flex-col justify-between items-start p-6 min-h-[200px]`}>
                        <div>
                            <h3 className="text-4xl font-extrabold font-headline uppercase">{ticket.name}</h3>
                            <p className="mt-1">{ticket.perks.join(', ')}</p>
                            <p className="text-2xl font-bold mt-2">₦{ticket.price.toLocaleString()}</p>
                        </div>
                        <Button asChild variant="outline" size="sm" className="bg-transparent border-current text-current hover:bg-white/20 hover:text-current mt-4">
                            <Link href="#">
                                <Ticket className="mr-2 h-4 w-4" />
                                Buy Now
                            </Link>
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}
