import Image from "next/image";
import { artists } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export function LineupSection() {
  const getImageForArtist = (imageUrl: string) => {
    return PlaceHolderImages.find(img => img.id === imageUrl);
  };

  return (
    <section id="lineup" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Lineup</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Get ready for performances from the biggest names in the industry.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {artists.map((artist, index) => {
            const artistImage = getImageForArtist(artist.imageUrl);
            return (
              <div key={index} className="group relative">
                <Card className="overflow-hidden aspect-square border-2 border-border group-hover:border-primary transition-colors">
                  <CardContent className="p-0">
                    {artistImage && (
                      <Image
                        src={artistImage.imageUrl}
                        alt={`Portrait of ${artist.name}`}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={artistImage.imageHint}
                      />
                    )}
                  </CardContent>
                </Card>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-bold text-lg text-white text-center drop-shadow-md">{artist.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
