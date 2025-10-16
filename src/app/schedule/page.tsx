import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticket, Gamepad2, Music, Clock } from "lucide-react";
import { schedule } from "@/lib/data";

const dayColors = [
    "bg-primary text-primary-foreground",
    "bg-accent text-accent-foreground",
];

const typeIcons: { [key: string]: React.ReactNode } = {
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

        <div className="space-y-8">
            {schedule.map((day, index) => (
                <Card key={day.day} className={`${dayColors[index % dayColors.length]} rounded-2xl overflow-hidden`}>
                    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8">
                        <div className="flex-1">
                            <h2 className="text-4xl font-extrabold font-headline uppercase">{day.day.split(':')[0]}</h2>
                            <p className="text-xl font-semibold">{day.day.split(':')[1]}</p>
                        </div>
                        <div className="flex-1 text-center md:text-right mt-4 md:mt-0">
                            <Badge variant="secondary" className="text-lg md:text-xl">
                                {day.date}
                            </Badge>
                        </div>
                    </div>
                     <div className="bg-card/20 p-6 md:p-8">
                        <div className="grid gap-6">
                            {day.items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="flex items-center">
                                        {typeIcons[item.type] || <Gamepad2 className="w-5 h-5 mr-3" />}
                                        <h3 className="font-headline text-xl">{item.title}</h3>
                                    </div>
                                    <div className="flex items-center text-sm opacity-80 mt-1 pl-8">
                                      <Clock className="w-4 h-4 mr-2" />
                                      <span>{item.time}</span>
                                      {item.location && <span className="mx-2">|</span>}
                                      <span>{item.location}</span>
                                    </div>
                                    <p className="pl-8 text-sm opacity-80 mt-1">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  );
}
