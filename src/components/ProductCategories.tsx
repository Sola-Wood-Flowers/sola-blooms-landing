import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Classic Wreaths",
    description: "22\" wreaths handcrafted entirely from 3-inch natural wood dahlia flowers, bringing soft, neutral charm to any space.",
    image: "/lovable-uploads/ee881b33-e91d-4a50-bbcd-b5ab78e85b2a.png",
    colors: ["Cream", "Natural", "Sage", "Terracotta"],
  },
  {
    title: "Timeless Decor Wreaths",
    description: "Versatile wreaths in neutral charm and natural varieties, perfect for year-round decoration and seasonal displays.",
    image: "/lovable-uploads/8bbc4055-fa3b-479e-981e-68ae98884a1f.png",
    colors: ["Neutral", "Natural", "Mixed"],
  },
  {
    title: "Specialty Wreaths",
    description: "Unique designs including Pink Roses and Monochromatic styles for those seeking distinctive decorative pieces.",
    image: "/lovable-uploads/7a7e0e96-110b-4b46-9ff0-a5e63bbaee3b.png",
    colors: ["Pink", "Rose", "Cream", "Green"],
  },
  {
    title: "Elegant Garlands",
    description: "6ft long eucalyptus garlands with mixed core flowers in fall/winter colors, perfect for mantelpieces and doorways.",
    image: "/lovable-uploads/b3d90f08-7b35-49cc-87b6-92a2ca6a8dfd.png",
    colors: ["Soft Pink", "Eucalyptus", "Natural"],
  },
  {
    title: "Vase Arrangements",
    description: "Stunning floral arrangements in sleek vases, featuring both asymmetric modern designs and natural greenery compositions.",
    image: "/lovable-uploads/89d34718-8ba5-4ac6-8d59-f177332d82bc.png",
    colors: ["Black", "White", "Natural", "Green"],
  },
  {
    title: "Deluxe Bouquets",
    description: "Large deluxe bouquets with 12 sola flowers, featuring wild roses and preserved greenery, carefully wrapped in craft paper.",
    image: "/lovable-uploads/bf65491f-dcf4-4cfd-b347-1f48e604850b.png",
    colors: ["Dorothy", "Sunflower", "Mixed"],
  },
  {
    title: "Aromatic Potpourri",
    description: "Decorative mix of dried flowers, herbs, and spices infused with pleasant scents, perfect for adding natural fragrance to any room.",
    image: "/lovable-uploads/8dcfbb3d-cc2f-4681-a319-87b57df5523e.png",
    colors: ["Aromatic Oasis", "Silver Spice", "Mix Eucalyptus"],
  },
  {
    title: "Preserved Greenery",
    description: "Premium preserved natural elements including bunny tails, lavender, and eucalyptus for long-lasting floral arrangements.",
    image: "/lovable-uploads/c19a1096-4ef5-40a0-8967-41c35692edbc.png",
    colors: ["Bunny Tails", "Lavender", "Satin Green"],
  },
  {
    title: "Small Bouquets",
    description: "Charming small bouquets with 3\" and 2\" sola flowers on wire stems, wrapped in polybag with satin ribbon as a simple touch.",
    image: "/lovable-uploads/577b03e2-27d3-433a-b0ad-22cd07448976.png",
    colors: ["Soft Peach", "Soft Green", "Mixed"],
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-juana font-normal text-foreground mb-6">
            Our Product Collections
          </h2>
          <p className="text-xl font-avenir text-muted-foreground max-w-3xl mx-auto">
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

                <Button variant="brand" className="w-full group">
                  Contact Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-juana font-normal text-foreground mb-4">
              Need Custom Collections?
            </h3>
            <p className="font-avenir text-muted-foreground mb-6">
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