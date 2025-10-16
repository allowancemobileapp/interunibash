import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FestivalTicketsSection() {
  return (
    <section className="bg-card text-foreground py-12 md:py-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline uppercase tracking-tighter text-primary">
            Festival Tickets
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Secure your spot for the ultimate party night.
          </p>
        </div>
        <Button size="lg" variant="default" asChild>
          <Link href="/tickets">Get Tickets</Link>
        </Button>
      </div>
    </section>
  );
}
