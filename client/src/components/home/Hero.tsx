import { Button, buttonVariants } from "@/components/ui/button";
import heroImg from "@assets/generated_images/amla_chutney_hero_image.png";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 md:from-black/60 md:to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col justify-center h-full px-4 md:px-6">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold tracking-wide uppercase mb-2">
            Authentic & Handcrafted
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            The Lost Art of <br/>
            <span className="text-secondary-foreground">Amla Chutney</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-lg font-sans leading-relaxed">
            Reviving traditional recipes with organic ingredients. A perfect blend of health and taste in every jar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-lg h-12 px-8 cursor-pointer")}>
                Order Now
            </Link>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20 hover:text-white font-sans text-lg h-12 px-8" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              View Flavours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
