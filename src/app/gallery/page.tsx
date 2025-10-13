import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { galleryImages } from '@/lib/data';

export default function GalleryPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Event Gallery</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Relive the best moments from past events.
                </p>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {galleryImages.map((image) => {
                    const imageData = PlaceHolderImages.find(p => p.id === image.src);
                    if (!imageData) return null;

                    return (
                        <div key={image.id} className="overflow-hidden rounded-lg break-inside-avoid">
                           <Image
                                src={imageData.imageUrl}
                                alt={imageData.description}
                                width={image.width}
                                height={image.height}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                                data-ai-hint={image.hint}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
