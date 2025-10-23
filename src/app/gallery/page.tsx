
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { galleryImages } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedAlt, setSelectedAlt] = useState<string>('');

    const openImage = (imageUrl: string, alt: string) => {
        setSelectedImage(imageUrl);
        setSelectedAlt(alt);
    };

    const closeImage = () => {
        setSelectedImage(null);
        setSelectedAlt('');
    };

    return (
        <>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Event Gallery</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => {
                        const imageData = PlaceHolderImages.find(p => p.id === image.src);
                        if (!imageData) return null;

                        return (
                            <div
                                key={image.id}
                                className={cn(
                                    'group relative cursor-pointer',
                                    // Spanning logic for collage effect
                                    index === 0 && 'md:col-span-2 md:row-span-2',
                                    index === 1 && 'md:col-span-1',
                                    index === 2 && 'md:col-span-1',
                                    index === 3 && 'md:col-span-2',
                                    index === 4 && 'md:col-span-2',
                                    index === 5 && 'md:col-span-2 md:row-span-2',
                                )}
                                onClick={() => openImage(imageData.imageUrl, imageData.description)}
                            >
                                <Card className="overflow-hidden h-full w-full">
                                    <CardContent className="p-0 h-full">
                                        <Image
                                            src={imageData.imageUrl}
                                            alt={imageData.description}
                                            width={image.width}
                                            height={image.height}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={image.hint}
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && closeImage()}>
                <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
                    <DialogTitle className="sr-only">{selectedAlt}</DialogTitle>
                    <DialogDescription className="sr-only">A full-screen view of the gallery image: {selectedAlt}</DialogDescription>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt={selectedAlt}
                            width={1920}
                            height={1080}
                            className="object-contain w-full h-auto rounded-lg"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
