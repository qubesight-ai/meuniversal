import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CompromisoContent } from "@/components/pages/CompromisoContent";
import { compromisoScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestro-compromiso")({
  head: () => ({
    meta: [
      { title: "Nuestro Compromiso — MEU" },
      { name: "description", content: "El código ético del MEU contra el autoritarismo y sus siete compromisos inviolables." },
      { property: "og:title", content: "Nuestro Compromiso — MEU" },
      { property: "og:description", content: "El código ético del MEU contra el autoritarismo y sus siete compromisos inviolables." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => compromisoScript(), []);
  return <CompromisoContent />;
}
