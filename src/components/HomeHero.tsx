import { Suspense, lazy, useEffect, useState } from "react";
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
  return <img src={earthStatic} alt="La Tierra vista desde el espacio" width={1024} height={1024} className="w-full h-full object-contain rounded-full" />;
}

export function HomeHero() {
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
            Monoteísmo Ético Universalista
          </h1>
          <p className="font-headline-sm text-headline-sm font-normal italic text-sand">
            Una propuesta filosófica contemporánea: fe en un único Dios, pensamiento crítico y responsabilidad ética.
          </p>
          <p className="font-body-lg text-body-lg text-universe-muted max-w-xl">
            Un espacio para pensar con calma y con honestidad. Afirmamos la fe en el Dios de Abraham, cuya esencia supera nuestra comprensión, y buscamos vivir esa convicción en el cuidado concreto de las personas y del mundo.
          </p>
          <p className="font-body-md text-body-md text-universe-muted max-w-xl">
            Compartimos este pensamiento mediante el diálogo, sin exigir conversión: la libertad de conciencia de cada persona es inviolable.
          </p>
          <blockquote className="border-l border-sand/50 pl-space-md">
            <p className="font-aphorism text-aphorism italic text-universe-foreground">
              «No hacemos el bien para merecer otra vida. Hacemos el bien porque esta vida importa.»
            </p>
          </blockquote>
          <div className="flex flex-wrap gap-space-md pt-2">
            <a href="#tratados" className="hero-btn-primary">Recorrer el sitio</a>
            <a href="#pilares" className="hero-btn-ghost">Nuestros pilares</a>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
          <div className="relative w-[78vw] max-w-[520px] aspect-square" aria-label="La Tierra vista desde el espacio" role="img">
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
