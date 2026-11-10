import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CompromisoContent } from "@/components/pages/CompromisoContent";
import { CompromisoContent as CompromisoContentEn } from "@/components/pages/en/CompromisoContent";
import { useLang } from "@/lib/i18n";
import { compromisoScript } from "@/lib/page-scripts";

export const Route = createFileRoute("/nuestro-compromiso")({
  head: () => ({
    meta: [
      { title: "Nuestro Compromiso — MEU" },
      { name: "description", content: "Participación voluntaria, libertad de conciencia y siete compromisos de convivencia del MEU." },
      { property: "og:title", content: "Nuestro Compromiso — MEU" },
      { property: "og:description", content: "Participación voluntaria, libertad de conciencia y siete compromisos de convivencia del MEU." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  useEffect(() => compromisoScript(), [lang]);
  return lang === "en" ? <CompromisoContentEn /> : <CompromisoContent />;
}
