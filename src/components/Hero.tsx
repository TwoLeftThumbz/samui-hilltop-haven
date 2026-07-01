import { Button } from "@/components/ui/button";
import heroView from "@/assets/hero-view.jpg";
import { useState } from "react";
import TurnstileContactGate from "./TurnstileContactGate";

const reserveActionLabel = "Reserve a Table with a View";

const Hero = () => {
  const [showVerification, setShowVerification] = useState(false);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
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
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-24 md:pt-96 lg:pt-[28rem] text-center">
        <h1 className="mb-6 font-serif text-4xl font-bold text-white drop-shadow-2xl sm:text-5xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Sora Sierra
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 drop-shadow-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Experience breathtaking hilltop views, authentic Thai cuisine, and tropical paradise
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            type="button"
            size="lg"
            className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-foreground border-2 border-white text-white"
            onClick={() => setShowVerification(true)}
          >
            {reserveActionLabel}
          </Button>
        </div>
      </div>
      <TurnstileContactGate
        action={
          showVerification
            ? { label: reserveActionLabel, id: "hero-reservation" }
            : null
        }
        onOpenChange={(open) => !open && setShowVerification(false)}
      />
    </section>
  );
};

export default Hero;
