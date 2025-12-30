import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { reviews } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

export default function ReviewCarousel() {
  return (
    <div className="w-full py-10">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-2">
                <Card className="bg-primary/5 border-none shadow-none">
                  <CardContent className="flex flex-col gap-4 p-8">
                    <Quote className="h-8 w-8 text-secondary opacity-50" />
                    <p className="font-serif text-lg leading-relaxed text-foreground/80 italic">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-primary">— {review.name}</p>
                      <div className="flex text-amber-400 mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
