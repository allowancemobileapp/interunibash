import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Ticket } from "lucide-react";

const ticketTiers = [
    {
        title: "Sports Pass",
        description: "Entry for Sports Day (Dec 22)",
        price: "₦3,000",
        color: "bg-primary text-primary-foreground",
    },
    {
        title: "Party Pass",
        description: "Entry for Party Night (Dec 23)",
        price: "₦5,000",
        color: "bg-secondary text-secondary-foreground",
    },
    {
        title: "All-Access Pass",
        description: "Both days + fast-track entry + free drink",
        price: "₦7,500",
        color: "bg-accent text-accent-foreground",
    },
];


export default function TicketsPage() {
    return (
        <div className="container py-12 md:py-16">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold tracking-widest">TICKETS</h1>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/contact">
                        <Plus className="h-6 w-6" />
                    </Link>
                </Button>
            </div>

            <Card className="bg-muted/40 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-4xl font-extrabold font-headline uppercase">TRAVEL PACKAGES</h2>
                    <p className="text-muted-foreground text-sm">Make your journey to HOMECOMING™ 2025 stress-free with our exclusive Travel Packages - coming soon.</p>
                </div>
                <Badge variant="secondary" className="text-sm">Coming Soon</Badge>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ticketTiers.map((ticket) => (
                    <Card key={ticket.title} className={`${ticket.color} rounded-2xl flex flex-col justify-between items-start p-6 min-h-[200px]`}>
                        <div>
                            <h3 className="text-4xl font-extrabold font-headline uppercase">{ticket.title}</h3>
                            <p className="mt-1">{ticket.description}</p>
                            <p className="text-2xl font-bold mt-2">{ticket.price}</p>
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
