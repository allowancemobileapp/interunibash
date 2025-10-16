import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticket, Gamepad2, Music } from "lucide-react";
import { schedule } from "@/lib/data";

const dayColors = [
    "bg-primary text-primary-foreground",
    "bg-accent text-accent-foreground",
];

const typeIcons = {
    'Sports': <Gamepad2 className="w-5 h-5 mr-3" />,
    'Entertainment': <Music className="w-5 h-5 mr-3" />
}

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

        <div className="space-y-12">
            {schedule.map((day, index) => (
                <div key={day.day}>
                    <Card className={`${dayColors[index % dayColors.length]} rounded-2xl flex flex-col md:flex-row justify-between items-center p-6 md:p-8 mb-6`}>
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
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {day.items.map((item, itemIndex) => (
                            <Card key={itemIndex} className="bg-card">
                                <CardHeader>
                                    <div className="flex items-center text-primary">
                                        {typeIcons[item.type]}
                                        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                    </div>
                                    <CardDescription>{item.time} @ {item.location}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
