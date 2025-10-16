import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { schedule } from "@/lib/data";

const dayColors = [
    "bg-primary text-primary-foreground",
    "bg-accent text-accent-foreground",
];

export default function SchedulePage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-widest uppercase">Schedule</h1>
            <Button variant="outline" asChild>
                <Link href="/tickets">
                    <Ticket className="mr-2 h-4 w-4" />
                    Get Tickets
                </Link>
            </Button>
        </div>

        <div className="flex flex-col gap-4">
            {schedule.map((day, index) => (
                <Card key={day.day} className={`${dayColors[index % dayColors.length]} rounded-2xl flex flex-col md:flex-row justify-between items-center p-6 md:p-8 min-h-[180px]`}>
                    <div className="flex-1">
                        <h2 className="text-4xl font-extrabold font-headline uppercase">{day.day.split(':')[0]}</h2>
                        <p className="text-xl font-semibold">{day.day.split(':')[1]}</p>
                    </div>
                    <div className="flex-1 text-center md:text-right mt-4 md:mt-0">
                         <Badge variant="secondary" className="text-lg md:text-xl">
                            {day.date}
                        </Badge>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  );
}
