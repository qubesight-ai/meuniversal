import { createFileRoute } from "@tanstack/react-router";
import { CartaFundadorContent } from "@/components/pages/CartaFundadorContent";

export const Route = createFileRoute("/carta-del-fundador")({
  head: () => ({
    meta: [
      { title: "Carta del Fundador — MEU" },
      { name: "description", content: "Por qué fundé el Monoteísmo Ético Universalista: carta de Ernesto Libby Lugo, fundador del MEU, Costa Rica, 2026." },
      { property: "og:title", content: "Carta del Fundador — MEU" },
      { property: "og:description", content: "Por qué fundé el Monoteísmo Ético Universalista: carta de Ernesto Libby Lugo." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <CartaFundadorContent />;
}
