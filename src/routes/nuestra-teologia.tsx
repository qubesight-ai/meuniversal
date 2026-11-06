import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { TeologiaContent } from "@/components/pages/TeologiaContent";
import { teologiaScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestra-teologia")({
  head: () => ({
    meta: [
      { title: "Nuestra Teología — MEU" },
      { name: "description", content: "Las seis afirmaciones teológicas del MEU: Hashem, el Demiurgo simbólico, Tikkun Olam y la universalidad." },
      { property: "og:title", content: "Nuestra Teología — MEU" },
      { property: "og:description", content: "Las seis afirmaciones teológicas del MEU: Hashem, el Demiurgo simbólico, Tikkun Olam y la universalidad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => teologiaScript(), []);
  return <TeologiaContent />;
}
