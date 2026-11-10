import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { TeologiaContent } from "@/components/pages/TeologiaContent";
import { TeologiaContent as TeologiaContentEn } from "@/components/pages/en/TeologiaContent";
import { useLang } from "@/lib/i18n";
import { teologiaScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestra-teologia")({
  head: () => ({
    meta: [
      { title: "Nuestra Teología — MEU" },
      { name: "description", content: "Las seis afirmaciones de fe del MEU: el Dios de Abraham, el Demiurgo simbólico, Jesús de Nazaret, la muerte, el propósito de la vida y la universalidad divina." },
      { property: "og:title", content: "Nuestra Teología — MEU" },
      { property: "og:description", content: "Las seis afirmaciones de fe del MEU: el Dios de Abraham, el Demiurgo simbólico, Jesús de Nazaret, la muerte, el propósito de la vida y la universalidad divina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  useEffect(() => teologiaScript(), [lang]);
  return lang === "en" ? <TeologiaContentEn /> : <TeologiaContent />;
}
