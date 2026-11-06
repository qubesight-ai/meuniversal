import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PreguntasContent } from "@/components/pages/PreguntasContent";
import { preguntasScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes — MEU" },
      { name: "description", content: "Diálogos y respuestas a las preguntas canónicas sobre el Monoteísmo Ético Universalista." },
      { property: "og:title", content: "Preguntas Frecuentes — MEU" },
      { property: "og:description", content: "Diálogos y respuestas a las preguntas canónicas sobre el Monoteísmo Ético Universalista." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => preguntasScript(), []);
  return <PreguntasContent />;
}
