import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Sora Sierra</h3>
            <p className="text-background/80">
              Where breathtaking views meet authentic Thai flavors
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/about"
                className="text-left text-background/80 hover:text-background transition-smooth"
              >
                About Us
              </Link>
              <button 
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="text-left text-background/80 hover:text-background transition-smooth"
              >
                Menu
              </button>
              <Link 
                to="/gallery"
                className="text-left text-background/80 hover:text-background transition-smooth"
              >
                Gallery
              </Link>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-left text-background/80 hover:text-background transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="rounded-full bg-background/10 p-3 transition-smooth hover:bg-background/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/sorasierrasamui/" 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background/10 p-3 transition-smooth hover:bg-background/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@sorasierra.com" 
                className="rounded-full bg-background/10 p-3 transition-smooth hover:bg-background/20"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/60 space-y-2">
          <p>&copy; {new Date().getFullYear()} Sora Sierra. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a 
              href="https://samuiisland.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-background transition-smooth"
            >
              Samui Island Online
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
