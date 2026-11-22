// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightGitHubAlerts from "starlight-github-alerts";
import starlightHeadingBadges from "starlight-heading-badges";

// https://astro.build/config
export default defineConfig({
  site: "https://open-reception.org",
  prefetch: true,
  integrations: [
    starlight({
      plugins: [starlightGitHubAlerts(), starlightHeadingBadges()],
      title: "OpenReception",
      defaultLocale: "root",
      locales: {
        root: {label: "English", lang: "en"},
        de: {label: "Deutsch", lang: "de"},
      },
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
          label: "Getting Started",
          items: [{autogenerate: {directory: "getting-started"}}],
          translations: {
            de: "Loslegen",
          },
        },
        {
          label: "Tenants",
          collapsed: true,
          items: [{autogenerate: {directory: "tenants"}}],
          translations: {
            de: "Mandanten",
          },
        },
        {
          label: "Agents & Absences",
          collapsed: true,
          items: [{autogenerate: {directory: "agents"}}],
          translations: {
            de: "Akteure & Abwesenheiten",
          },
        },
        {
          label: "Channels",
          collapsed: true,
          items: [{autogenerate: {directory: "channels"}}],
          translations: {
            de: "Kanäle",
          },
        },
        {
          label: "Calendar",
          collapsed: true,
          items: [{autogenerate: {directory: "calendar"}}],
          translations: {
            de: "Kalender",
          },
        },
        {
          label: "Staff & Notifications",
          collapsed: true,
          items: [{autogenerate: {directory: "staff"}}],
          translations: {
            de: "Personal & Benachrichtigungen",
          },
        },
        {
          label: "Settings",
          collapsed: true,
          items: [{autogenerate: {directory: "settings"}}],
          translations: {
            de: "Einstellungen",
          },
        },
        {
          label: "Account",
          collapsed: true,
          items: [{autogenerate: {directory: "account"}}],
          translations: {
            de: "Konto",
          },
        },
        {
          label: "Client Side",
          collapsed: true,
          items: [{autogenerate: {directory: "client-side"}}],
          translations: {
            de: "Klientenfunktionen",
          },
        },
        {
          label: "Automation",
          collapsed: true,
          items: [{autogenerate: {directory: "automation"}}],
          translations: {
            de: "Automatisierung",
          },
        },
        {
          label: "Community",
          items: [{autogenerate: {directory: "community"}}],
          translations: {
            de: "Community",
          },
        },
        {
          label: "Research",
          items: [{autogenerate: {directory: "research"}}],
          translations: {
            de: "Recherche",
          },
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
