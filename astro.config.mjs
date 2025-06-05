// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  integrations: [
    starlight({
      title: "OpenReception",
      defaultLocale: "en",
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
      ],
      sidebar: [
        {
          label: "Research",
          autogenerate: {directory: "research"},
        },
        // {
        //   label: "Reference",
        //   autogenerate: {directory: "reference"},
        // },
      ],
      components: {
        Footer: "./src/components/Footer.astro",
        Search: "./src/components/Search.astro",
      },
    }),
  ],
});
