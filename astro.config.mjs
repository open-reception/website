// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "OpenReception",
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
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     {label: "Example Guide", slug: "guides/example"},
        //   ],
        // },
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
