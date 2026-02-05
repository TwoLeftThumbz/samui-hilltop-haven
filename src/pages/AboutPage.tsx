import { Link } from "react-router-dom";
import { Coffee, Leaf, MapPin, Sun } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import entrance from "@/assets/entrance.jpg";
import interiorSwings from "@/assets/interior-swings.jpg";
import dish02 from "@/assets/gallery/dish-02.jpg";

const highlights = [
  {
    icon: Leaf,
    title: "Farm-first ingredients",
    description:
      "Seasonal herbs, greens, and tropical produce picked from our hillside beds.",
  },
  {
    icon: Coffee,
    title: "Coffee with intention",
    description:
      "Slow-brewed espresso and pour-overs made with locally roasted beans.",
  },
  {
    icon: MapPin,
    title: "Koh Samui views",
    description:
      "A calm hilltop setting that opens to ocean panoramas and sea breezes.",
  },
  {
    icon: Sun,
    title: "All-day rituals",
    description:
      "Sunrise breakfasts, relaxed afternoons, and golden-hour dinners.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={entrance}
            alt="Entrance to Sora Sierra cafe in Koh Samui"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />
          <div className="container mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32">
            <div className="max-w-3xl space-y-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                About Sora Sierra
              </p>
              <h1 className="text-balance font-serif text-4xl font-bold md:text-6xl">
                Sora Sierra cafe, an organic farm & coffee shop on Koh Samui
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
                A hillside retreat where Thai flavors, farm-grown ingredients,
                and thoughtful coffee rituals come together over sweeping
                coastal views.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-20">
          <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Rooted in the hills, crafted with care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Follow the winding hillside road past The Organic Farm & Coffee
                Shop, and you will arrive at Sora Sierra, a hilltop cafe tucked
                above the treetops. The surrounding landscape is a patchwork of
                organic farms and coffee shops, and that calm, open-air rhythm
                carries into every table here.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The hillside is framed by durian, banana, and other tropical
                fruit farms, with wide-open sightlines made for sunset view
                moments. It is a quiet, elevated stop for anyone exploring the
                northwest quadrant of Koh Samui, and it doubles as an intimate
                event space that feels effortless for intimate wedding venues
                and small celebrations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the terrace, the view opens to the Five Islands, the Koh
                Samui Naval Base, and the coastline stretching across Nathon
                Beach and Lipa Noi Beach. It is the kind of hilltop cafe that
                belongs on any list of sunset cafes, inviting a slow coffee, a
                shared meal, and the soft glow that arrives just before dusk.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={interiorSwings}
                  alt="Interior seating with signature swings at Sora Sierra"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-background/80 p-6 text-center shadow-soft"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <Icon className="h-6 w-6 text-tropical-palm" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-20">
          <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <img
                src={dish02}
                alt="Thai cuisine spread with curry, soup and fresh vegetables"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                A day at Sora Sierra
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Start with a bright breakfast bowl, settle into the swings with
                a crafted latte, and return for sunset plates inspired by Thai
                classics. Whether you arrive for a quiet morning or a shared
                feast, the pace is always unhurried.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/menu">Explore the menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
