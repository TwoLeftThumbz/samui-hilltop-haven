20/01 21:42 Added a dedicated About page with SEO-focused Sora Sierra cafe copy and wired nav/footer links to the new route.
20/01 21:55 Updated About page story copy to describe Sora Sierra's hillside setting and SEO keywords without claiming it is an organic farm.
20/01 22:00 Refined the About page story copy with more natural, creative phrasing around the hilltop location and surrounding farms.
20/01 22:05 Replaced the About page final section image with the selected Gallery photo (dish-02).
21/01 01:28 Added Vercel SPA rewrite to serve index.html for client-side routes like /about.
21/01 11:29 Allowed the Community Love CTA button to wrap on small screens to avoid horizontal scrolling.
21/01 11:34 Updated the sitemap to include the About route and refreshed lastmod dates; added sitemap reference to robots.txt.
05/02 19:38 Restricted Vercel rewrites to known routes so legacy WordPress URLs now return 404 instead of 200.
12/02 12:44 Replaced the header text brand with the Sora Sierra logo image in the navigation.
12/02 12:48 Replaced the footer brand text with the Sora Sierra logo image.
12/02 12:49 Linked the footer Facebook icon to the Sky Above Samui Facebook page.
12/02 12:51 Added a TikTok icon link in the footer social section.
12/02 12:59 Swapped the header and footer logo images to use the transparent PNG asset.
12/02 13:04 Added a dark logo variant and swapped the header logo based on scroll state.
12/02 13:11 Added the mobile-only hero background video with image fallback for larger screens.
12/02 13:15 Reverted the rounded-corner favicon/app icon assets back to the originals.
12/02 13:24 Updated the footer Instagram and TikTok links to Sky Above Samui profiles.
12/02 13:24 Increased the footer logo size slightly.
12/02 13:25 Increased the footer logo size again.
12/02 13:25 Increased the footer logo size to h-16.
12/02 13:31 Added a mobile Instagram deep-link handler to improve navigation to the profile in the app.
12/02 13:33 Added the Instagram deep-link behavior to the homepage Instagram button and updated the default profile URL.
12/02 13:37 Switched Instagram mobile deep links to the universal _u profile URL for better in-app navigation.
12/02 13:39 Updated Instagram deep links to use Android intent URLs with iOS scheme fallback.
12/02 13:51 Added a hero CTA button that opens WhatsApp with a prefilled reservation message.
12/02 14:04 Removed the hero scroll-down icon button.
12/02 14:08 Matched the hero WhatsApp CTA styling to the header Reserve Now button.
12/02 14:13 Adjusted hero layout for mobile landscape (removed spacer breaks, switched to svh, and tuned text sizing).
12/02 14:26 Added the Atteron font and switched all headers/serif styles to use it.
12/02 14:27 Pushed the hero text block downward on large screens with increased top padding.
12/02 14:28 Doubled the hero top padding on large screens to move the content lower.
12/02 14:28 Doubled the hero top padding again for large screens.
13/02 13:53 Added GTM script in head and noscript iframe after body open in index.html.
05/05 20:46 Added a new /events page from new-page.txt content, wired it into routing, and linked Events in the site navigation and footer.
02/06 12:22 Replaced the /events page with the tmp/events.tsx layout adapted to Sora Sierra styling and assets.
02/06 12:26 Refined the /events page against tmp/events.html with a darker high-fidelity Sora Sierra visual treatment.
02/06 12:33 Matched the /events route to the live Lovable layout utilities while retaining Sora Sierra theme colors.
02/06 12:34 Converted the Tailwind animate plugin to an ESM import after adding event page theme aliases.
02/06 12:41 Restyled the /events page with homepage background, button, image radius, and font color treatments.
02/06 12:42 Replaced the custom /events header with the shared homepage Navigation component.
02/06 12:45 Swapped the /events hero background image to gallery ambiance-02.
30/06 14:10 Added a Cloudflare Turnstile verification dialog before homepage WhatsApp and email contact actions.
30/06 17:54 Extended the Turnstile verification dialog to the hero reservation CTA and header Reserve Now buttons.
30/06 18:03 Added a Vercel Turnstile verification API route and required server validation before contact redirects.
01/07 16:04 Moved contact redirect destinations behind a Turnstile-verified API endpoint so the WhatsApp number is no longer exposed in the client bundle.
01/07 16:13 Removed the in-development Events page from app routing and hid its header and footer navigation links.
27/08 16:55 Replaced all 24 menu page WebP assets with renders from the updated 2026 compressed menu PDF.
