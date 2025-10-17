import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/countdown';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-8 p-4">
        <div className="flex flex-col gap-2 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#E7D093] to-[#B58E2C] drop-shadow-lg">
                Game On. Party On.
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/90 drop-shadow-sm">
                Inter-Uni Edition
            </p>
        </div>
        <p className="text-md md:text-xl font-medium text-foreground/80">
            22–23 December 2025 • Lagos, Nigeria
        </p>

        <Countdown />

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/tickets">Get Tickets Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/schedule">View Schedule</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
