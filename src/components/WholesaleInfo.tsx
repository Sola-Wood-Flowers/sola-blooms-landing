import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Package, Truck, Users, DollarSign, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Wholesale Pricing",
    description: "Volume-based pricing tiers with significant savings for bulk orders. Special rates for repeat customers."
  },
  {
    icon: Package,
    title: "Minimum Order Flexibility",
    description: "Low minimum order quantities to help small businesses get started, with options to mix product categories."
  },
  {
    icon: Truck,
    title: "Fast & Reliable Shipping",
    description: "Quick turnaround times with secure packaging. Free shipping on orders over $500."
  },
  {
    icon: Users,
    title: "Dedicated Account Support",
    description: "Personal account manager for wholesale customers with priority customer service."
  },
  {
    icon: Clock,
    title: "Quick Restocking",
    description: "Efficient inventory management ensures popular items are always in stock and ready to ship."
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Each piece is hand-inspected for quality. 100% satisfaction guarantee on all wholesale orders."
  }
];

const pricingTiers = [
  {
    tier: "Starter",
    minimum: "$250",
    discount: "15% off retail",
    features: ["Mixed product categories", "Standard shipping", "Email support"]
  },
  {
    tier: "Professional",
    minimum: "$500",
    discount: "25% off retail",
    features: ["Free shipping", "Priority support", "Custom packaging options", "Account manager"]
  },
  {
    tier: "Enterprise",
    minimum: "$1000+",
    discount: "35% off retail",
    features: ["Premium support", "Custom collections", "Dropship options", "Marketing materials"]
  }
];

const WholesaleInfo = () => {
  return (
    <section id="wholesale" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wholesale Partnership Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful retailers, event planners, and designers who trust 
            Sola Wood Flowers for their premium natural décor needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-natural transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage rounded-full mb-6">
                  <benefit.icon className="text-sage-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Wholesale Pricing Tiers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-primary shadow-natural scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{tier.tier}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.discount}</div>
                  <div className="text-muted-foreground mb-6">Minimum Order: {tier.minimum}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-left">
                        <Check className="text-sage mr-3 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={index === 1 ? "hero" : "sage"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-background rounded-2xl p-12 shadow-soft">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Wholesale Journey?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get access to our complete wholesale catalog, pricing, and exclusive dealer resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="lg">
              Request Wholesale Catalog
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleInfo;