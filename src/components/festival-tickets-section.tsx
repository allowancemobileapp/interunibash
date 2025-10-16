import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FestivalTicketsSection() {
  return (
    <section className="bg-accent text-accent-foreground py-12 md:py-20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline uppercase tracking-tighter">
            Festival Tickets
          </h2>
          <p className="mt-2 text-lg text-accent-foreground/80">
            Secure your spot for the ultimate party night.
          </p>
        </div>
        <Button size="lg" variant="secondary" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link href="/tickets">Get Tickets</Link>
        </Button>
      </div>
    </section>
  );
}
