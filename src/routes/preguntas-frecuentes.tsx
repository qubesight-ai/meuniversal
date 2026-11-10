import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PreguntasContent } from "@/components/pages/PreguntasContent";
import { PreguntasContent as PreguntasContentEn } from "@/components/pages/en/PreguntasContent";
import { useLang } from "@/lib/i18n";
import { preguntasScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes — MEU" },
      { name: "description", content: "Respuestas a las preguntas más habituales sobre el Monoteísmo Ético Universalista." },
      { property: "og:title", content: "Preguntas Frecuentes — MEU" },
      { property: "og:description", content: "Respuestas a las preguntas más habituales sobre el Monoteísmo Ético Universalista." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  useEffect(() => preguntasScript(), [lang]);
  return lang === "en" ? <PreguntasContentEn /> : <PreguntasContent />;
}
