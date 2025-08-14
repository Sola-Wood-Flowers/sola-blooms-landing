import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sola Wood Flowers</h3>
          <p className="text-primary-foreground/80 mb-6 leading-relaxed">
            Crafting beautiful, sustainable floral arrangements from natural sola wood. 
            Serving wholesale customers with premium handcrafted décor since 2010.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center space-x-3">
              <Phone size={16} />
              <span>(801) 797-1037</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} />
              <span>supply@solawoodflowerswholesales.com</span>
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