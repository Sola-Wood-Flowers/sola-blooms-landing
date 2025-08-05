import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Classic Wreaths",
    description: "22\" wreaths handcrafted entirely from 3-inch natural wood dahlia flowers, bringing soft, neutral charm to any space.",
    image: "/lovable-uploads/632f147a-50d0-40bc-a563-dd288bd9d2c7.png",
    colors: ["Cream", "Natural", "Sage", "Terracotta"],
  },
  {
    title: "Timeless Decor Wreaths",
    description: "Versatile wreaths in neutral charm and natural varieties, perfect for year-round decoration and seasonal displays.",
    image: "/lovable-uploads/e45ade1e-736f-437d-9c05-286528192260.png",
    colors: ["Neutral", "Natural", "Mixed"],
  },
  {
    title: "Specialty Wreaths",
    description: "Unique designs including Pink Roses and Monochromatic styles for those seeking distinctive decorative pieces.",
    image: "/lovable-uploads/d8720b43-6819-4f61-b2db-b7e0d0da7cd3.png",
    colors: ["Pink", "Rose", "Cream", "Green"],
  },
  {
    title: "Elegant Garlands",
    description: "6ft long eucalyptus garlands with mixed core flowers in fall/winter colors, perfect for mantelpieces and doorways.",
    image: "/lovable-uploads/15778688-c241-4085-bc49-7f933b946b70.png",
    colors: ["Soft Pink", "Eucalyptus", "Natural"],
  },
  {
    title: "Vase Arrangements",
    description: "Stunning floral arrangements in sleek vases, featuring both asymmetric modern designs and natural greenery compositions.",
    image: "/lovable-uploads/98955ce6-2a04-45b1-aa33-bed120fcf09d.png",
    colors: ["Black", "White", "Natural", "Green"],
  },
  {
    title: "Deluxe Bouquets",
    description: "Large deluxe bouquets with 12 sola flowers, featuring wild roses and preserved greenery, carefully wrapped in craft paper.",
    image: "/lovable-uploads/258677a7-3af2-4814-8112-3cd7dfe0f6ce.png",
    colors: ["Dorothy", "Sunflower", "Mixed"],
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of handcrafted sola wood flowers, perfect for 
            retailers, event planners, and designers seeking premium natural décor.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-natural transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Color Palette */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-foreground mb-2">Available Colors:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.colors.map((color, colorIndex) => (
                      <span 
                        key={colorIndex}
                        className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="sage" className="w-full group">
                  View Collection
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Collections?
            </h3>
            <p className="text-muted-foreground mb-6">
              We create bespoke arrangements and custom color palettes for your specific wholesale needs.
            </p>
            <Button variant="hero" size="lg">
              Contact Our Design Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;