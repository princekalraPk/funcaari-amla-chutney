import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary flex items-center gap-2 cursor-pointer">
              <ShoppingBag className="h-6 w-6" />
              Funcaari
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}>
                  {link.label}
              </Link>
            ))}
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "font-sans cursor-pointer")}>
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
                  "text-lg font-medium transition-colors hover:text-primary block py-2 cursor-pointer",
                  location === link.href ? "text-primary" : "text-foreground"
                )} onClick={() => setIsOpen(false)}>
                {link.label}
            </Link>
          ))}
          <Link href="/contact" className={cn(buttonVariants({ size: "default" }), "w-full mt-2 cursor-pointer")} onClick={() => setIsOpen(false)}>
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
