import { Badge } from '@/components/ui/badge';
import { ShoppingBag } from 'lucide-react';

export default function StorePage() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24">
            <div className="text-center flex flex-col items-center justify-center min-h-[40vh]">
                <ShoppingBag className="w-16 h-16 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Official Merch Store</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Get the official gear for the Inter-Uni Bash. Exclusive items will be available here soon.
                </p>
                <Badge variant="secondary" className="text-lg mt-8">
                    Coming Soon
                </Badge>
            </div>
        </div>
    );
}
