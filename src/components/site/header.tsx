"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Menu, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "transition-colors hover:text-primary",
          pathname === link.href ? "text-primary" : "text-foreground/60",
          isMobile && "text-lg"
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Ticket className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Inter-Uni Bash
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {renderNavLinks()}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Mobile Menu</SheetTitle>
                  <SheetDescription>
                    A list of navigation links for the site.
                  </SheetDescription>
                </SheetHeader>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Ticket className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Inter-Uni Bash</span>
                </Link>
                <div className="flex flex-col space-y-4 mt-6">
                  {renderNavLinks(true)}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="flex items-center">
            <Button asChild>
              <Link href="/tickets">
                <Ticket className="mr-2 h-4 w-4" />
                Get Tickets
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
