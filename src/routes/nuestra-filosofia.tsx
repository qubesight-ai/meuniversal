import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { FilosofiaContent } from "@/components/pages/FilosofiaContent";
import { filosofiaScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestra-filosofia")({
  head: () => ({
    meta: [
      { title: "Nuestra Filosofía — MEU" },
      { name: "description", content: "Las cinco tesis filosóficas del Monoteísmo Ético Universalista: razón, conciencia y ética." },
      { property: "og:title", content: "Nuestra Filosofía — MEU" },
      { property: "og:description", content: "Las cinco tesis filosóficas del Monoteísmo Ético Universalista: razón, conciencia y ética." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => filosofiaScript(), []);
  return <FilosofiaContent />;
}
