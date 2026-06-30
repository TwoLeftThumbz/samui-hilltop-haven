import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import cocktailsImg from "@/assets/cocktails.jpg";
import heroImg from "@/assets/gallery/ambiance-02.jpg";
import diningImg from "@/assets/interior-swings.jpg";
import weddingImg from "@/assets/gallery/ambiance-15.jpg";

const eventsMailto =
  "mailto:hello@sorasierra.com?subject=Private Event Inquiry&body=Hello Sora Sierra,%0D%0A%0D%0AI'd like to plan a private event.%0D%0A%0D%0AEvent details:%0D%0A- Type of event:%0D%0A- Preferred date:%0D%0A- Preferred time:%0D%0A- Estimated guests:%0D%0A- Food/drink preferences:%0D%0A- Notes:%0D%0A%0D%0AThank you!";

const eventTypes = [
  {
    tag: "01",
    title: "Private Dining",
    image: diningImg,
    blurb:
      "Intimate dinners for up to 24 guests on our terrace. A bespoke tasting menu, candlelight, and the ocean as your backdrop.",
    details: [
      "Up to 24 guests",
      "Bespoke tasting menu",
      "Sommelier pairing on request",
    ],
  },
  {
    tag: "02",
    title: "Weddings & Receptions",
    image: weddingImg,
    blurb:
      "Exchange vows under string lights with the sea below. Full venue buyouts include florals, coordination, and a curated drinks list.",
    details: ["Full venue buyout", "Ceremony & reception", "In-house planning team"],
  },
  {
    tag: "03",
    title: "Birthdays & Celebrations",
    image: cocktailsImg,
    blurb:
      "Cocktail parties beneath the neon. From milestone birthdays to anniversaries, we set the stage, you bring the people.",
    details: ["20 - 80 guests", "Custom cocktail menu", "DJ & lighting package"],
  },
];

const inclusions = [
  "Dedicated events host",
  "Curated tasting menus",
  "Signature cocktail list",
  "Floral & table styling",
  "Audio & lighting design",
  "Photographer referrals",
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      <main>
        <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Hilltop ocean view at Sora Sierra"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-white/80 mb-6 drop-shadow-lg">
              Private Events
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-white max-w-5xl drop-shadow-2xl">
              Gatherings <em className="font-light italic">above</em> the everyday
            </h1>
            <p className="mt-8 max-w-xl text-white/90 text-lg drop-shadow-lg">
              Host your most memorable moments at our hilltop sanctuary, where
              lush jungle meets endless horizons.
            </p>
            <Button
              size="lg"
              asChild
              className="mt-10 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-foreground border-2 border-white text-white transition-smooth"
            >
              <a href="#enquire">
                Plan your event
                <span aria-hidden>&rarr;</span>
              </a>
            </Button>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Our Spaces
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 leading-tight text-foreground">
              A venue carved from the hillside.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-7 text-muted-foreground text-lg leading-relaxed space-y-5">
            <p>
              Whether you&apos;re planning an intimate dinner, a cocktail
              celebration, or a full-venue wedding, our team designs every
              detail around you. Tropical gardens, candlelit terraces, and an
              iconic swing overlooking the sea.
            </p>
            <p>
              We work with a small number of private events each month so that
              every gathering receives our full attention.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto space-y-32">
          {eventTypes.map((event, index) => (
            <article
              key={event.title}
              className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-6 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="w-full h-[520px] md:h-[640px] object-cover rounded-2xl shadow-soft"
                />
              </div>
              <div className="md:col-span-6 md:px-8">
                <span className="font-serif italic text-primary text-2xl">
                  {event.tag}
                </span>
                <h3 className="font-serif text-5xl md:text-6xl mt-3 leading-tight text-foreground">
                  {event.title}
                </h3>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                  {event.blurb}
                </p>
                <ul className="mt-8 space-y-3">
                  {event.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-foreground/80 border-t border-border/70 pt-3"
                    >
                      <span className="text-primary">&mdash;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="border-y border-border/70 bg-secondary/45">
          <div className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              What&apos;s included
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 max-w-2xl leading-tight text-foreground">
              Every detail, handled with care.
            </h2>
            <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border/70">
              {inclusions.map((item) => (
                <div
                  key={item}
                  className="bg-background px-6 py-10 text-lg font-serif text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="enquire"
          className="px-6 md:px-12 py-32 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Begin the conversation
          </span>
          <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[1.05] text-foreground">
            Let&apos;s design <em className="italic font-light">your</em> evening.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg">
            Tell us your date, the number of guests, and the kind of experience
            you&apos;re dreaming of. Our events team will reply within 24 hours.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href={eventsMailto}>hello@sorasierra.com</a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="tel:+66616696761">Call our team</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Sora Sierra</span>
        <Link to="/" className="hover:text-primary transition-smooth mt-3 md:mt-0">
          Return home
        </Link>
      </footer>
    </div>
  );
};

export default EventsPage;
