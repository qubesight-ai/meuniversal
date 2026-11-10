import { Suspense, lazy, useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import earthStatic from "@/assets/earth-static.jpg";

const EarthGlobe = lazy(() => import("./EarthGlobe"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function StaticEarth() {
  const t = useT();
  return <img src={earthStatic} alt={t("La Tierra vista desde el espacio", "The Earth seen from space")} width={1024} height={1024} className="w-full h-full object-contain rounded-full" />;
}

export function HomeHero() {
  const t = useT();
  const [mode, setMode] = useState<"static" | "3d">("static");
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (hasWebGL()) setMode("3d");
  }, []);

  return (
    <section className="hero-universe relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop pt-36 pb-20 lg:pt-40 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 space-y-space-lg order-2 lg:order-1 reveal">
          <p className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-sky-soft">MEU</p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-universe-foreground tracking-tight">
            {t("Monoteísmo Ético Universalista", "Universalist Ethical Monotheism")}
          </h1>
          <p className="font-headline-sm text-headline-sm font-normal italic text-sand">
            {t("Una propuesta filosófica contemporánea: fe en un único Dios, pensamiento crítico y responsabilidad ética.", "A contemporary philosophical proposal: faith in one God, critical thought and ethical responsibility.")}
          </p>
          <p className="font-body-lg text-body-lg text-universe-muted max-w-xl">
            {t("Un espacio para pensar con calma y con honestidad. Afirmamos la fe en el Dios de Abraham, cuya esencia supera nuestra comprensión, y buscamos vivir esa convicción en el cuidado concreto de las personas y del mundo.", "A space to think calmly and honestly. We affirm faith in the God of Abraham, whose essence surpasses our understanding, and we seek to live that conviction through concrete care for people and for the world.")}
          </p>
          <p className="font-body-md text-body-md text-universe-muted max-w-xl">
            {t("Compartimos este pensamiento mediante el diálogo, sin exigir conversión: la libertad de conciencia de cada persona es inviolable.", "We share this thought through dialogue, without demanding conversion: each person's freedom of conscience is inviolable.")}
          </p>
          <blockquote className="border-l border-sand/50 pl-space-md">
            <p className="font-aphorism text-aphorism italic text-universe-foreground">
              {t("«No hacemos el bien para merecer otra vida. Hacemos el bien porque esta vida importa.»", "“We do not do good to earn another life. We do good because this life matters.”")}
            </p>
          </blockquote>
          <div className="flex flex-wrap gap-space-md pt-2">
            <a href="#tratados" className="hero-btn-primary">{t("Recorrer el sitio", "Explore the site")}</a>
            <a href="#pilares" className="hero-btn-ghost">{t("Nuestros pilares", "Our pillars")}</a>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
          <div className="relative w-[78vw] max-w-[520px] aspect-square" aria-label={t("La Tierra vista desde el espacio", "The Earth seen from space")} role="img">
            {mode === "3d" ? (
              <>
                {!ready && <div className="absolute inset-0 opacity-90"><StaticEarth /></div>}
                <Suspense fallback={null}>
                  <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}>
                    <EarthGlobe reduced={reduced} onReady={() => setTimeout(() => setReady(true), 400)} />
                  </div>
                </Suspense>
              </>
            ) : (
              <StaticEarth />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
