import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ticket, Twitter, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Ticket className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Inter-Uni Bash</span>
          </div>
          <p className="text-muted-foreground text-sm">
            The ultimate university showdown.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
            <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/tickets" className="text-muted-foreground hover:text-primary transition-colors">Tickets</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Newsletter</h4>
          <p className="text-muted-foreground text-sm mb-4">Stay updated with the latest news and offers.</p>
          <form className="flex space-x-2">
            <Input type="email" placeholder="Email" className="max-w-xs" />
            <Button type="submit" variant="outline">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Inter-Uni Bash. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
