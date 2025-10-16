import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SplitSection() {
  const youtubeVideoId = "1WhRgGBi9Go";

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[400px] md:min-h-[500px] aspect-w-16 aspect-h-9 md:aspect-none">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></iframe>
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
