import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
    const organizerImage = PlaceHolderImages.find(img => img.id === 'about-organizers');

    return (
        <div className="container py-12 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">About The Event</h1>
                <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                    More than just a party, "Game On, Party On" is a celebration of youth culture, talent, and community across Nigerian universities.
                </p>
            </div>

            <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold font-headline text-primary mb-4">Our Mission</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Born from a desire to create a unified platform for students, our event bridges the gap between sports and entertainment. We aim to foster friendly competition, showcase incredible musical talent, and create lasting memories for students from all over the country.
                            </p>
                            <p>
                                "Game On, Party On" is where school pride meets festival vibes. It's a two-day spectacle celebrating the energy, passion, and creativity of Nigerian youth.
                            </p>
                        </div>

                         <h2 className="text-2xl font-bold font-headline text-primary mt-8 mb-4">The Organizers</h2>
                         <p className="text-muted-foreground">
                            This event is brought to you by a collaboration between <span className="font-semibold text-foreground">ArenaVibes</span> and <span className="font-semibold text-foreground">Detty December</span>, two leading names in youth event management and entertainment.
                         </p>
                    </div>
                    <div className="relative min-h-[300px] md:min-h-0">
                        {organizerImage && (
                             <Image
                                src={organizerImage.imageUrl}
                                alt={organizerImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={organizerImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}
