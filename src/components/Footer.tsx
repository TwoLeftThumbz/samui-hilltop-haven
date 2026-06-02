import type { MouseEvent, SVGProps } from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-3.77A4.794 4.794 0 0 1 15.5 2h-3.09v12.65a2.58 2.58 0 0 1-2.58 2.58 2.58 2.58 0 0 1-2.58-2.58 2.58 2.58 0 0 1 2.58-2.58c.29 0 .567.05.83.14V8.06a5.671 5.671 0 0 0-.83-.06 5.59 5.59 0 1 0 5.59 5.59V8.89a7.93 7.93 0 0 0 4.17 1.21V6.686z" />
  </svg>
);

const Footer = () => {
  const handleInstagramClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isAndroid && !isIOS) {
      return;
    }

    event.preventDefault();
    const username = "skyabovesamui";
    const webUrl = `https://www.instagram.com/${username}/`;
    const appUrl = isAndroid
      ? `intent://instagram.com/_u/${username}/#Intent;package=com.instagram.android;scheme=https;end`
      : `instagram://user?username=${username}`;

    window.location.href = appUrl;
    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.href = webUrl;
      }
    }, 700);
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/sora-logo-transparent.png"
                alt="Sora Sierra logo"
                className="h-16 w-auto"
              />
              <span className="sr-only">Sora Sierra</span>
            </div>
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
              <Link
                to="/events"
                className="text-left text-background/80 hover:text-background transition-smooth"
              >
                Events
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
                href="https://www.facebook.com/skyabovesamui/" 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background/10 p-3 transition-smooth hover:bg-background/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/skyabovesamui/" 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background/10 p-3 transition-smooth hover:bg-background/20"
                aria-label="Instagram"
                onClick={handleInstagramClick}
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
              <a 
                href="https://www.tiktok.com/@skyabovesamui" 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background/10 p-3 transition-smooth hover:bg-background/20"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
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
