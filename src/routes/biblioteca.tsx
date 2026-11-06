import { createFileRoute } from "@tanstack/react-router";
import { BibliotecaContent } from "@/components/pages/BibliotecaContent";

export const Route = createFileRoute("/biblioteca")({
  head: () => ({
    meta: [
      { title: "Biblioteca — MEU" },
      { name: "description", content: "Fuentes, influencias y lecturas del Monoteísmo Ético Universalista: una selección editorial provisional para leer cada tradición en sus propios términos." },
      { property: "og:title", content: "Biblioteca — MEU" },
      { property: "og:description", content: "Fuentes, influencias y lecturas del MEU: selección editorial provisional de fuentes e influencias." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <BibliotecaContent />;
}
