import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/e4c7f307-f7e4-498e-b392-b3e1eed19d5a.png)` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
            <Star className="text-wood" size={16} />
            <span className="text-sm font-medium text-foreground">Premium Handcrafted Wood Flowers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-juana font-normal text-foreground mb-6 leading-tight">
            Timeless Beauty in
            <span className="block text-primary">Handcrafted Wood</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-avenir text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of sola wood flowers, wreaths, and arrangements. 
            Perfect for wholesale buyers seeking elegant, sustainable floral solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
              Explore Wholesale Catalog
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Request Price List
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Product Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Handcrafted Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Wholesale Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;