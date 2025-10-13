import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, PartyPopper, Star } from "lucide-react";

const highlights = [
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Sports Day",
    date: "Dec 22",
    description: "Witness intense inter-university rivalries in football, basketball, and more. Feel the competitive spirit."
  },
  {
    icon: <PartyPopper className="w-10 h-10 text-primary" />,
    title: "Party Night",
    date: "Dec 23",
    description: "An unforgettable night with Nigeria's hottest DJs and artists. Dance till dawn under the Lagos sky."
  },
  {
    icon: <Star className="w-10 h-10 text-primary" />,
    title: "All-Access",
    date: "VIP",
    description: "The ultimate experience. Enjoy exclusive access, meet artists, and get the royal treatment throughout the event."
  }
]

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-12 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Two Days, One Unforgettable Vibe</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">From thrilling sports action to electrifying musical performances, we've got it all.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300">
              <CardHeader className="items-center">
                {highlight.icon}
                <CardTitle className="mt-4 font-headline">{highlight.title}</CardTitle>
                <CardDescription>{highlight.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
