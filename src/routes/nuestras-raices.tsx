import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { RaicesContent } from "@/components/pages/RaicesContent";
import { raicesScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestras-raices")({
  head: () => ({
    meta: [
      { title: "Nuestras Raíces — MEU" },
      { name: "description", content: "Genealogía de las siete vertientes que nutren el Monoteísmo Ético Universalista." },
      { property: "og:title", content: "Nuestras Raíces — MEU" },
      { property: "og:description", content: "Genealogía de las siete vertientes que nutren el Monoteísmo Ético Universalista." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => raicesScript(), []);
  return <RaicesContent />;
}
