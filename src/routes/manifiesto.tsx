import { createFileRoute } from "@tanstack/react-router";
import { ManifiestoContent } from "@/components/pages/ManifiestoContent";
import { ManifiestoContent as ManifiestoContentEn } from "@/components/pages/en/ManifiestoContent";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto — MEU" },
      { name: "description", content: "Manifiesto del Monoteísmo Ético Universalista: una filosofía para vivir y reparar el mundo. Propuesta fundacional abierta a revisión." },
      { property: "og:title", content: "Manifiesto — MEU" },
      { property: "og:description", content: "Manifiesto del Monoteísmo Ético Universalista: una filosofía para vivir y reparar el mundo." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const lang = useLang();
  return lang === "en" ? <ManifiestoContentEn /> : <ManifiestoContent />;
}
