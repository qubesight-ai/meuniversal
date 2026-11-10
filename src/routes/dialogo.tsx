import { createFileRoute } from "@tanstack/react-router";
import { DialogoContent } from "@/components/pages/DialogoContent";
import { DialogoContent as DialogoContentEn } from "@/components/pages/en/DialogoContent";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/dialogo")({
  head: () => ({
    meta: [
      { title: "Diálogo y críticas — MEU" },
      { name: "description", content: "Una biblioteca de objeciones al Monoteísmo Ético Universalista, con respuestas provisionales, sus límites y preguntas para seguir pensando." },
      { property: "og:title", content: "Diálogo y críticas — MEU" },
      { property: "og:description", content: "Objeciones al MEU formuladas con solidez, respuestas provisionales y sus límites." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  return lang === "en" ? <DialogoContentEn /> : <DialogoContent />;
}
