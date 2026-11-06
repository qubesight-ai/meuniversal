import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { InicioContent } from "@/components/pages/InicioContent";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monoteísmo Ético Universalista (MEU)" },
      { name: "description", content: "Una síntesis contemporánea de fe racional, discernimiento crítico y responsabilidad moral inmanente." },
      { property: "og:title", content: "Monoteísmo Ético Universalista (MEU)" },
      { property: "og:description", content: "Una síntesis contemporánea de fe racional, discernimiento crítico y responsabilidad moral inmanente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {

  return <InicioContent />;
}
