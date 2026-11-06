import { createFileRoute } from "@tanstack/react-router";
import { FundamentosContent } from "@/components/pages/FundamentosContent";

export const Route = createFileRoute("/fundamentos")({
  head: () => ({
    meta: [
      { title: "Fundamentos — MEU" },
      { name: "description", content: "Lo que el MEU cree, lo que razona y lo que todavía desconoce: convicciones teológicas, posturas filosóficas y preguntas abiertas." },
      { property: "og:title", content: "Fundamentos — MEU" },
      { property: "og:description", content: "Lo que el MEU cree, lo que razona y lo que todavía desconoce: convicciones, argumentos y preguntas abiertas." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <FundamentosContent />;
}
