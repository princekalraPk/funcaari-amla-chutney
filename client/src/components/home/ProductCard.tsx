import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/data";
import EnquireModal from "@/components/modals/EnquireModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-card">
      <div className="aspect-square relative overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white border-none shadow-sm backdrop-blur-sm">
          {product.weight}
        </Badge>
      </div>
      <CardHeader className="p-5 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-xl font-bold text-foreground">{product.name}</h3>
          <span className="text-lg font-bold text-secondary">{product.price}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-400 mt-1">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"}`} 
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-2">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <EnquireModal product={product} />
      </CardFooter>
    </Card>
  );
}
