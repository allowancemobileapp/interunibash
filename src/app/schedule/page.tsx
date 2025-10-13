import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { schedule } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function SchedulePage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Event Schedule</h1>
          <p className="text-muted-foreground mt-2">
            Plan your experience. Here's what's happening and when.
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <Tabs defaultValue={schedule[0].day} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
          {schedule.map(day => (
            <TabsTrigger key={day.day} value={day.day}>
              {day.day} <span className="hidden sm:inline text-muted-foreground ml-2">({day.date})</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {schedule.map(day => (
          <TabsContent key={day.day} value={day.day}>
            <div className="mt-8 flow-root">
              <div className="-my-8 divide-y divide-border">
                {day.items.map((item, index) => (
                  <div key={index} className="py-8">
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 items-start">
                      <div className="col-span-1">
                        <p className="font-bold text-primary">{item.time}</p>
                      </div>
                      <div className="col-span-3 md:col-span-5 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <Badge variant={item.type === 'Sports' ? 'secondary' : 'default'} className="w-fit">
                                {item.type}
                            </Badge>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2"/>
                            <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
