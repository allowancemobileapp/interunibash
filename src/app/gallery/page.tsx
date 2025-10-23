import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { galleryImages } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Event Gallery</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Relive the best moments from past events.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4">
                {galleryImages.map((image, index) => {
                    const imageData = PlaceHolderImages.find(p => p.id === image.src);
                    if (!imageData) return null;

                    return (
                        <div
                          key={image.id}
                          className={cn(
                            'group relative',
                            // Spanning rules for a 6-image layout
                            index === 0 && 'col-span-2 row-span-2', // First image is larger
                            index === 3 && 'md:col-span-2',
                            index === 4 && 'md:col-span-2'
                          )}
                        >
                            <Card className="overflow-hidden h-full w-full">
                                <CardContent className="p-0 h-full">
                                    <div className="relative h-full w-full aspect-[4/3] sm:aspect-video">
                                        <Image
                                            src={imageData.imageUrl}
                                            alt={imageData.description}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            data-ai-hint={image.hint}
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
