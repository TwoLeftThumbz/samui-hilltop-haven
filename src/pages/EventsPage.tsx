import { CalendarDays, Martini, Mountain, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroView from "@/assets/hero-view.jpg";

const offerItems = [
  {
    title: "Catering Options",
    description:
      "Thai and Western dishes served as sharing menus or buffet-style, tailored to your group.",
    icon: Sparkles,
  },
  {
    title: "Private Space & Views",
    description:
      "Panoramic sunset views with flexible seating for both intimate and social gatherings.",
    icon: Mountain,
  },
  {
    title: "Drinks",
    description:
      "Beer, wine, cocktails, and custom drink options available.",
    icon: Martini,
  },
];

const eventTypes = [
  "Birthdays & Celebrations",
  "Group Dinners",
  "Pre-Wedding Events",
  "Corporate Gatherings",
  "Sunset Parties",
  "Private Dining Experiences",
];

const details = [
  "Suitable for small and medium-sized groups",
  "Daytime and sunset bookings available",
  "Advance booking recommended",
  "Custom setups possible depending on group size",
];

const eventsMailto =
  "mailto:hello@sorasierra.com?subject=Private Event Inquiry&body=Hello Sora Sierra,%0D%0A%0D%0AI'd like to plan a private event.%0D%0A%0D%0AEvent details:%0D%0A- Type of event:%0D%0A- Preferred date:%0D%0A- Preferred time:%0D%0A- Estimated guests:%0D%0A- Food/drink preferences:%0D%0A- Notes:%0D%0A%0D%0AThank you!";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={heroView}
            alt="Sunset hilltop view at Sora Sierra"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />
          <div className="container mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32">
            <div className="max-w-3xl space-y-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Events at Sora Sierra
              </p>
              <h1 className="text-balance font-serif text-4xl font-bold md:text-6xl">
                Private Events &amp; Catered Gatherings at Sora Sierra
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
                Stunning views, curated menus, and unforgettable moments -
                perfect for any occasion.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={eventsMailto}>Contact Us</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-20">
          <div className="container mx-auto max-w-4xl space-y-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Host your next gathering above Nathon Bay
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re planning a birthday, group dinner,
              celebration, or private gathering, Sora Sierra offers a unique
              hilltop setting overlooking Nathon Bay.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We combine a relaxed tropical atmosphere with quality food and
              personalised service to create events that feel effortless and
              memorable.
            </p>
          </div>
        </section>

        <section className="bg-secondary/35 px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
              What We Offer
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {offerItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-background/90 p-6 shadow-soft"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/25">
                      <Icon className="h-6 w-6 text-tropical-palm" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-20">
          <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Event Types
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {eventTypes.map((type) => (
                  <li
                    key={type}
                    className="rounded-xl border border-border/70 bg-card px-4 py-3 text-card-foreground"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Food Designed for Sharing
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our menus are built around sharing and bringing people together.
                Choose from curated set menus or let us create something custom
                for your group.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From authentic Thai flavours to crowd-pleasing international
                dishes, we focus on fresh ingredients and bold taste.
                Vegetarian and dietary options are available on request.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/45 px-4 py-20">
          <div className="container mx-auto max-w-5xl space-y-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              The Experience
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Sora Sierra, it&apos;s not just about the food - it&apos;s about the
              experience.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As the sun sets over the ocean, the atmosphere shifts into
              something truly special. Whether you&apos;re enjoying a relaxed dinner
              or celebrating something big, we create a setting that feels
              personal, warm, and unforgettable.
            </p>
          </div>
        </section>

        <section className="bg-background px-4 py-20">
          <div className="container mx-auto max-w-5xl space-y-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
              Event Details
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4"
                >
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-card-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-4 py-20 text-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              Plan Your Event at Sora Sierra
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-background/85">
              Tell us a bit about your event and we&apos;ll help create the perfect
              setup for you. Please contact us to inquire about food and drink
              packages.
            </p>
            <Button
              asChild
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={eventsMailto}>Contact Us</a>
            </Button>
            <p className="mx-auto mt-8 max-w-3xl text-sm text-background/75">
              Sora Sierra is known for its atmosphere, food, and views. We&apos;re
              excited to now offer private events and would love to create
              something special with you.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
