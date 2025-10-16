import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const eventCategories = [
    {
        title: "LIVE SHOW",
        color: "bg-primary text-primary-foreground",
    },
    {
        title: "SUMMIT",
        color: "bg-secondary text-secondary-foreground",
    },
    {
        title: "HI-FI",
        color: "bg-accent text-accent-foreground",
    },
];


export default function TicketsPage() {
    return (
        <div className="container py-12 md:py-16">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold tracking-widest">TICKETS</h1>
                <Button variant="ghost" size="icon">
                    <Plus className="h-6 w-6" />
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
                {eventCategories.map((cat) => (
                    <Card key={cat.title} className={`${cat.color} rounded-2xl flex flex-col justify-between items-start p-6 min-h-[200px]`}>
                        <h3 className="text-4xl font-extrabold font-headline uppercase">{cat.title}</h3>
                        <Button variant="outline" size="sm" className="bg-transparent border-current text-current hover:bg-white/20 hover:text-current">
                            To Be Announced
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}
