import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ReflexionesContent } from "@/components/pages/ReflexionesContent";
import { reflexionesScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/reflexiones")({
  head: () => ({
    meta: [
      { title: "Reflexiones — Biblioteca de Ensayos MEU" },
      { name: "description", content: "Textos de reflexión del Monoteísmo Ético Universalista sobre la razón, la finitud y la reparación del mundo." },
      { property: "og:title", content: "Reflexiones — Biblioteca de Ensayos MEU" },
      { property: "og:description", content: "Textos de reflexión del Monoteísmo Ético Universalista sobre la razón, la finitud y la reparación del mundo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => reflexionesScript(), []);
  return <ReflexionesContent />;
}
