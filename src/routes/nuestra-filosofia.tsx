import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { FilosofiaContent } from "@/components/pages/FilosofiaContent";
import { FilosofiaContent as FilosofiaContentEn } from "@/components/pages/en/FilosofiaContent";
import { useLang } from "@/lib/i18n";
import { filosofiaScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestra-filosofia")({
  head: () => ({
    meta: [
      { title: "Nuestra Filosofía — MEU" },
      { name: "description", content: "Los seis principios filosóficos del Monoteísmo Ético Universalista: razón, conciencia, ética y reparación del mundo." },
      { property: "og:title", content: "Nuestra Filosofía — MEU" },
      { property: "og:description", content: "Los seis principios filosóficos del Monoteísmo Ético Universalista: razón, conciencia, ética y reparación del mundo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  useEffect(() => filosofiaScript(), [lang]);
  return lang === "en" ? <FilosofiaContentEn /> : <FilosofiaContent />;
}
