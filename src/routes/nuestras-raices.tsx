import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { RaicesContent } from "@/components/pages/RaicesContent";
import { RaicesContent as RaicesContentEn } from "@/components/pages/en/RaicesContent";
import { useLang } from "@/lib/i18n";
import { raicesScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestras-raices")({
  head: () => ({
    meta: [
      { title: "Nuestras Raíces — MEU" },
      { name: "description", content: "Tradiciones históricas con las que dialoga el Monoteísmo Ético Universalista, leídas con rigor." },
      { property: "og:title", content: "Nuestras Raíces — MEU" },
      { property: "og:description", content: "Tradiciones históricas con las que dialoga el Monoteísmo Ético Universalista, leídas con rigor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  useEffect(() => raicesScript(), [lang]);
  return lang === "en" ? <RaicesContentEn /> : <RaicesContent />;
}
