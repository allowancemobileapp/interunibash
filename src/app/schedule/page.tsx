
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticket, Gamepad2, Music, Clock, MapPin, ChevronDown } from "lucide-react";
import { schedule } from "@/lib/data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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

        <Accordion type="single" collapsible className="w-full space-y-8">
            {schedule.map((day, index) => (
                <AccordionItem key={day.day} value={`item-${index}`} asChild>
                    <Card className={`${dayColors[index % dayColors.length]} rounded-2xl overflow-hidden`}>
                        <AccordionTrigger className="w-full p-6 md:p-8 hover:no-underline">
                             <div className="flex flex-col md:flex-row justify-between items-start text-left w-full">
                                <div className="flex-1">
                                    <h2 className="text-4xl font-extrabold font-headline uppercase">{day.day.split(':')[0]}</h2>
                                    <p className="text-xl font-semibold">{day.day.split(':')[1]}</p>
                                </div>
                                <div className="text-left md:text-right mt-4 md:mt-0">
                                    <Badge variant="secondary" className="text-lg md:text-xl mb-2">
                                        {day.date}
                                    </Badge>
                                    <div className="flex items-center justify-start md:justify-end text-lg font-semibold">
                                        <Clock className="w-5 h-5 mr-2" />
                                        <span>{day.time}</span>
                                    </div>
                                </div>
                            </div>
                            <ChevronDown className="h-8 w-8 shrink-0 transition-transform duration-200 ml-4" />
                        </AccordionTrigger>
                         <AccordionContent>
                            <div className="bg-card/20 p-6 md:p-8">
                                <div className="grid gap-6">
                                    {day.items.map((item, itemIndex) => (
                                        <div key={itemIndex}>
                                            <div className="flex items-center">
                                                {typeIcons[item.type] || <Gamepad2 className="w-5 h-5 mr-3" />}
                                                <h3 className="font-headline text-xl">{item.title}</h3>
                                            </div>
                                            <div className="pl-8 text-sm opacity-80 mt-1">
                                                <p>{item.description}</p>
                                                {item.location && (
                                                    <div className="flex items-center mt-1 text-xs opacity-80">
                                                        <MapPin className="w-3 h-3 mr-1.5" />
                                                        <span>{item.location}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  );
}
