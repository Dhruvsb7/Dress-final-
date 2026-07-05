import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://id-preview--d4ca6420-986a-4888-8fea-82ebcd744994.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          `  <url>`,
          `    <loc>${BASE_URL}/</loc>`,
          `    <changefreq>weekly</changefreq>`,
          `    <priority>1.0</priority>`,
          `  </url>`,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
