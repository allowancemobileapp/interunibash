import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export function MerchSection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline uppercase tracking-tighter text-accent">
            Official Event Merch
          </h2>
          <p className="mt-2 text-lg text-secondary-foreground/80">
            Exclusive apparel and gear. Coming soon.
          </p>
        </div>
        <Button size="lg" variant="outline" asChild>
          <Link href="/store">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Visit Store
          </Link>
        </Button>
      </div>
    </section>
  );
}
