import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/home/ProductCard";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Products Section */}
        <section id="products" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Collection</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">Discover Our Flavours</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Handpicked Amlas, traditional spices, and zero preservatives. Choose your favorite blend.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div className="space-y-4 p-6">
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🌱</div>
                <h3 className="font-serif text-xl font-bold">100% Organic</h3>
                <p className="text-white/80">Sourced directly from organic farms in Banaras.</p>
              </div>
              <div className="space-y-4 p-6">
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🥄</div>
                <h3 className="font-serif text-xl font-bold">Traditional Recipe</h3>
                <p className="text-white/80">Made using slow-cooking methods to preserve nutrients.</p>
              </div>
              <div className="space-y-4 p-6">
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">❤️</div>
                <h3 className="font-serif text-xl font-bold">Immunity Booster</h3>
                <p className="text-white/80">Rich in Vitamin C and antioxidants for daily health.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">What Customers Say</h2>
            </div>
            <ReviewCarousel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
