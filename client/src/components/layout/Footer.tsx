import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Funcaari</h3>
            <p className="text-primary-foreground/80 max-w-sm mb-6 font-sans">
              Handcrafted Amla Chutneys made with traditional recipes and love. 
              Bringing the authentic taste of health to your dining table.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-sans">
              <li><Link href="/" className="hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-sans">
              <li>funcaari@gmail.com</li>
              <li>+91 7404949951</li>
              <li>Meham, Rohtak (India)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60 font-sans">
          &copy; {new Date().getFullYear()} Funcaari Foods. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
