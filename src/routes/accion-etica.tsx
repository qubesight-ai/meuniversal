import { createFileRoute } from "@tanstack/react-router";
import { AccionEticaContent } from "@/components/pages/AccionEticaContent";
import { AccionEticaContent as AccionEticaContentEn } from "@/components/pages/en/AccionEticaContent";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/accion-etica")({
  head: () => ({
    meta: [
      { title: "Acción ética — MEU" },
      { name: "description", content: "Reparar el mundo: cómo el MEU propone traducir sus principios en compromisos concretos de educación, justicia, solidaridad, naturaleza y reconciliación." },
      { property: "og:title", content: "Acción ética — MEU" },
      { property: "og:description", content: "Reparar el mundo: propuestas concretas del MEU para pasar de la reflexión a la acción." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  return lang === "en" ? <AccionEticaContentEn /> : <AccionEticaContent />;
}
