import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/events-hero.jpg";
import diningImg from "@/assets/events-dining.jpg";
import weddingImg from "@/assets/events-wedding.jpg";
import celebrationImg from "@/assets/events-celebration.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Private Events at the Cafe — Host with a View" },
      {
        name: "description",
        content:
          "Host private dinners, weddings, birthdays and corporate gatherings at our hilltop cafe. Tailored menus, ocean views, and a tropical setting.",
      },
      { property: "og:title", content: "Private Events at the Cafe" },
      {
        property: "og:description",
        content:
          "Tailor-made private events with panoramic views, signature cocktails and authentic cuisine.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: EventsPage,
});

const eventTypes = [
  {
    tag: "01",
    title: "Private Dining",
    image: diningImg,
    blurb:
      "Intimate dinners for up to 24 guests on our terrace. A bespoke tasting menu, candlelight, and the ocean as your backdrop.",
    details: ["Up to 24 guests", "Bespoke tasting menu", "Sommelier pairing on request"],
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
    image: celebrationImg,
    blurb:
      "Cocktail parties beneath the neon. From milestone birthdays to anniversaries — we set the stage, you bring the people.",
    details: ["20 – 80 guests", "Custom cocktail menu", "DJ & lighting package"],
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

function EventsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-jungle-deep)] text-cream font-sans">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide text-cream">
          The Cafe
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          <Link to="/" className="text-cream/80 hover:text-cream transition">Home</Link>
          <span className="text-cream">Events</span>
        </nav>
        <a
          href="#enquire"
          className="border border-cream/40 px-5 py-2 text-xs uppercase tracking-[0.2em] rounded-full hover:bg-cream hover:text-[var(--color-jungle-deep)] transition"
        >
          Enquire
        </a>
      </header>

      {/* Hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Private event setup at hilltop cafe with ocean view"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-jungle-deep)]/40 via-transparent to-[var(--color-jungle-deep)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--color-neon)] mb-6">
            Private Events
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-cream max-w-5xl">
            Gatherings <em className="italic font-light">above</em> the everyday
          </h1>
          <p className="mt-8 max-w-xl text-cream/80 text-lg">
            Host your most memorable moments at our hilltop sanctuary — where lush
            jungle meets endless horizons.
          </p>
          <a
            href="#enquire"
            className="mt-10 inline-flex items-center gap-3 border border-cream/50 px-8 py-4 text-xs uppercase tracking-[0.3em] rounded-full hover:bg-cream hover:text-[var(--color-jungle-deep)] transition"
          >
            Plan your event
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-neon)]">
            Our Spaces
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
            A venue carved from the hillside.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-7 text-cream/75 text-lg leading-relaxed space-y-5">
          <p>
            Whether you're planning an intimate dinner, a cocktail celebration, or a
            full-venue wedding — our team designs every detail around you. Tropical
            gardens, candlelit terraces, and an iconic swing overlooking the sea.
          </p>
          <p>
            We work with a small number of private events each month so that every
            gathering receives our full attention.
          </p>
        </div>
      </section>

      {/* Event types */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto space-y-32">
        {eventTypes.map((event, i) => (
          <article
            key={event.title}
            className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-6 relative">
              <img
                src={event.image}
                alt={event.title}
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-[520px] md:h-[640px] object-cover"
              />
            </div>
            <div className="md:col-span-6 md:px-8">
              <span className="font-display italic text-[var(--color-neon)] text-2xl">
                {event.tag}
              </span>
              <h3 className="font-display text-5xl md:text-6xl mt-3 leading-tight">
                {event.title}
              </h3>
              <p className="mt-6 text-cream/75 text-lg leading-relaxed">{event.blurb}</p>
              <ul className="mt-8 space-y-3">
                {event.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-cream/80 border-t border-cream/10 pt-3"
                  >
                    <span className="text-[var(--color-neon)]">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Inclusions */}
      <section className="border-y border-cream/10 bg-[var(--color-jungle)]/40">
        <div className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-neon)]">
            What's included
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 max-w-2xl leading-tight">
            Every detail, handled with care.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-cream/10">
            {inclusions.map((item) => (
              <div
                key={item}
                className="bg-[var(--color-jungle-deep)] px-6 py-10 text-lg font-display"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire */}
      <section id="enquire" className="px-6 md:px-12 py-32 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.4em] text-[var(--color-neon)]">
          Begin the conversation
        </span>
        <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1.05]">
          Let's design <em className="italic font-light">your</em> evening.
        </h2>
        <p className="mt-8 text-cream/75 text-lg">
          Tell us your date, the number of guests, and the kind of experience you're
          dreaming of. Our events team will reply within 24 hours.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:events@thecafe.com"
            className="inline-flex items-center justify-center gap-3 bg-cream text-[var(--color-jungle-deep)] px-10 py-5 text-xs uppercase tracking-[0.3em] rounded-full hover:bg-[var(--color-neon)] hover:text-cream transition"
          >
            events@thecafe.com
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-3 border border-cream/40 px-10 py-5 text-xs uppercase tracking-[0.3em] rounded-full hover:border-cream transition"
          >
            Call our team
          </a>
        </div>
      </section>

      <footer className="border-t border-cream/10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-xs uppercase tracking-[0.3em] text-cream/50">
        <span>© {new Date().getFullYear()} The Cafe</span>
        <Link to="/" className="hover:text-cream transition mt-3 md:mt-0">
          Return home
        </Link>
      </footer>
    </div>
  );
}
