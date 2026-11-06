import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { InicioContent } from "@/components/pages/InicioContent";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monoteísmo Ético Universalista (MEU)" },
      { name: "description", content: "Una propuesta filosófica contemporánea: fe en un único Dios, pensamiento crítico y responsabilidad ética." },
      { property: "og:title", content: "Monoteísmo Ético Universalista (MEU)" },
      { property: "og:description", content: "Una propuesta filosófica contemporánea: fe en un único Dios, pensamiento crítico y responsabilidad ética." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {

  return <InicioContent />;
}
