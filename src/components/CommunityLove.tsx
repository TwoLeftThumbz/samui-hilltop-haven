import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";

const CommunityLove = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4 md:text-4xl">
            Loved Your Experience?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Show us some love on Samui to the World and help others discover Sora Sierra!
          </p>
          
          <Button size="lg" asChild className="group h-auto whitespace-normal text-center leading-snug py-3">
            <a 
              href="https://samuitotheworld.com/business/sora-sierra" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Bump Us on Samui to the World
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Ranked #1 in Food & Beverage
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityLove;
