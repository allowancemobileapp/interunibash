import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { galleryImages } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Event Gallery</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Relive the best moments from past events.
                </p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {galleryImages.map((image) => {
                        const imageData = PlaceHolderImages.find(p => p.id === image.src);
                        if (!imageData) return null;

                        return (
                            <CarouselItem key={image.id} className="md:basis-1/1">
                                <div className="p-1">
                                    <Card className="overflow-hidden">
                                        <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                                            <Image
                                                src={imageData.imageUrl}
                                                alt={imageData.description}
                                                fill
                                                className="object-contain"
                                                data-ai-hint={image.hint}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    );
}
