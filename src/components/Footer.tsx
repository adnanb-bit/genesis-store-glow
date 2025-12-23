import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import bulbulLogo from "@/assets/bulbul-logo.svg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={bulbulLogo} alt="BulBul" className="h-48 mb-4" />
            <p className="text-background/80 mb-4 max-w-md">
              Discover the joy of creating beautiful art with our curated DIY kits.
              Each kit comes with everything you need plus video tutorials to guide you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-background/80 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-background/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Instagram className="h-4 w-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  @bulbul.diy
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@bulbul.pk" className="hover:text-primary transition-colors">
                  hello@bulbul.pk
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} BulBul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
