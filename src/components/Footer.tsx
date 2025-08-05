import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sola Wood Flowers</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Crafting beautiful, sustainable floral arrangements from natural sola wood. 
              Serving wholesale customers with premium handcrafted décor since 2010.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>wholesale@solawoodflowers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>123 Craft Lane, Artisan City, AC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#products" className="block hover:text-sage transition-colors">Product Catalog</a>
              <a href="#wholesale" className="block hover:text-sage transition-colors">Wholesale Info</a>
              <a href="#about" className="block hover:text-sage transition-colors">About Us</a>
              <a href="#contact" className="block hover:text-sage transition-colors">Contact</a>
              <a href="#" className="block hover:text-sage transition-colors">Shipping Policy</a>
              <a href="#" className="block hover:text-sage transition-colors">Return Policy</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Get the latest product updates and wholesale offers.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="sage" className="w-full">
                Subscribe
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-sage transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-sage transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-sage transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Sola Wood Flowers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sage transition-colors">Wholesale Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;