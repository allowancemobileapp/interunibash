import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SplitSection() {
  const splitImage = PlaceHolderImages.find(img => img.id === 'split-image-1');

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[400px] md:min-h-[500px]">
               {splitImage && (
                  <Image
                      src={splitImage.imageUrl}
                      alt={splitImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={splitImage.imageHint}
                  />
               )}
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 container mx-auto px-4 md:px-8 lg:px-16">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline uppercase leading-tight">
                  Join Us For 2 Days of Sports, Music & Culture
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                  Experience the ultimate university showdown with back-to-back days of fierce sports rivalries and electrifying party nights. "Game On, Party On" is where passion meets the party.
              </p>
              <div className='mt-6 flex gap-4'>
                   <Button size="lg" variant="secondary" asChild>
                      <Link href="/schedule">View Schedule</Link>
                  </Button>
              </div>
          </div>
      </div>
    </section>
  );
}
