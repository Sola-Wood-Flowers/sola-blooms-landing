import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import solaIcon from "@/assets/sola-icon.svg";

const Header = () => {
  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/91a040e2-97d7-429f-86cf-3c6d19da984a.png" 
              alt="Sola Wood Flowers" 
              className="h-8 w-auto"
            />
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone size={16} />
              <span>(801) 797-1037</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail size={16} />
              <span>supply@solawoodflowerswholesales.com</span>
            </div>
            <a href="https://calendly.com/supply-solawoodflowerswholesales/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Get Wholesale Pricing
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;