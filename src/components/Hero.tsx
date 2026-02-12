import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroView from "@/assets/hero-view.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 md:hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={heroView}
          >
            <source src="/mobile-hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="absolute inset-0 hidden bg-cover bg-center md:block"
          style={{ backgroundImage: `url(${heroView})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 font-serif text-5xl font-bold text-white drop-shadow-2xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Sora Sierra
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 drop-shadow-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Experience breathtaking hilltop views, authentic Thai cuisine, and tropical paradise
        </p>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8 text-white drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;
