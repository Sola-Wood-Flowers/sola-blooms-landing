import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import solaIcon from "@/assets/sola-icon.svg";

const Header = () => {
  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={solaIcon} alt="Sola Wood Flowers" className="w-8 h-8 text-foreground" />
            <div className="text-2xl font-juana font-normal text-primary">
              Sola Wood Flowers
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#wholesale" className="text-foreground hover:text-primary transition-colors">
              Wholesale
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail size={16} />
              <span>hello@solawoodflowers.com</span>
            </div>
            <Button variant="hero" size="sm">
              Get Wholesale Pricing
            </Button>
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