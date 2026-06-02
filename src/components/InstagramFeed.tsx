import { type MouseEvent, useEffect } from "react";
import { Instagram } from "lucide-react";

const DEFAULT_PROFILE_URL = "https://www.instagram.com/skyabovesamui/";
const instagramProfileUrl = import.meta.env.VITE_INSTAGRAM_PROFILE_URL || DEFAULT_PROFILE_URL;
const embedHandle = instagramProfileUrl
  .replace(/https?:\/\/(www\.)?instagram\.com\//, "@")
  .replace(/\/?$/, "")
  .trim();

const SNAPWIDGET_SNIPPET = `<!-- SnapWidget -->
<iframe src="https://snapwidget.com/embed/1113171" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;" title="Posts from Instagram"></iframe>`;

const InstagramFeed = () => {
  const handleInstagramClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isAndroid && !isIOS) {
      return;
    }

    event.preventDefault();
    const username = embedHandle.replace(/^@/, "");
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

  useEffect(() => {
    const scriptSrc = "https://snapwidget.com/js/snapwidget.js";
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      const iframes = document.querySelectorAll<HTMLIFrameElement>("iframe.snapwidget-widget");
      iframes.forEach((iframe) => {
        iframe.style.height = "";
      });
    };
  }, []);
  return (
    <section id="instagram" className="bg-secondary/20 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Instagram</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Life on the Hilltop
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Peek into the daily rhythms of the Sky Above Samui — sunset sessions, tropical plates,
              and ocean breezes.
            </p>
          </div>
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-smooth hover:bg-foreground/90"
            onClick={handleInstagramClick}
          >
            <Instagram className="h-5 w-5" />
            <span>{embedHandle}</span>
          </a>
        </div>

        <div className="mt-10 rounded-3xl bg-white shadow-soft">
          <div dangerouslySetInnerHTML={{ __html: SNAPWIDGET_SNIPPET }} />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
