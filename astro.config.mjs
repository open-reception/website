// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  prefetch: true,
  integrations: [
    starlight({
      title: "OpenReception",
      defaultLocale: "en",
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.file-downloads.hash.outbound-links.js",
            "data-domain": "open-reception.org",
            defer: true,
          },
        },
        {
          tag: "script",
          content: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/open-reception/appointment-booking-software",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://mastodon.social/@openreception",
        },
        {
          icon: "blueSky",
          label: "Bluesky",
          href: "https://bsky.app/profile/openreception.bsky.social",
        },
      ],
      sidebar: [
        {
          label: "Research",
          autogenerate: {directory: "research"},
        },
      ],
      components: {
        Footer: "./src/components/Footer.astro",
        Search: "./src/components/Search.astro",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
