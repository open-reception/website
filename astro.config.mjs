// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  site: "https://open-reception.org",
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  prefetch: true,
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: "OpenReception",
      defaultLocale: "en",
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./src/assets/open-reception-logo.svg",
      },
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
      editLink: {
        baseUrl: "https://github.com/open-reception/website/edit/main/",
      },
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
