import { Link } from "@tanstack/react-router";

const NAV = [
  { href: "#hashem", n: "I.", label: "El Dios de Abraham" },
  { href: "#demiurgo", n: "II.", label: "El Demiurgo Simbólico" },
  { href: "#jesus", n: "III.", label: "Jesús de Nazaret" },
  { href: "#muerte-alma", n: "IV.", label: "Muerte y Alma" },
  { href: "#proposito", n: "V.", label: "Propósito de la Creación" },
  { href: "#universalidad", n: "VI.", label: "Universalidad Divina" },
];

const art = "scroll-mt-28 bg-surface-container-lowest rounded-sm p-space-lg lg:p-space-xl relative";
const eyebrow = "font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary";
const h2 = "font-headline-lg text-headline-lg text-primary mb-space-sm";
const bodyWrap = "space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed";
const box = "mt-space-md p-space-md rounded-sm bg-surface-container-low";

export function TeologiaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<header className="relative mb-space-xl">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-md pb-space-md">
<div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Lo que afirmamos: Nuestra Teología</h1>
<p className="font-headline-sm text-headline-sm text-secondary font-normal mt-space-xs max-w-3xl">
          Seis afirmaciones de fe, sostenidas con convicción y con conciencia de su falibilidad.
        </p>
</div>
</div>
</header>

<section className="mb-space-xl bg-surface-container-high rounded-sm p-space-lg relative overflow-hidden">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Cómo leer esta página</span>
<p className="font-body-md text-body-md text-on-surface leading-relaxed mt-1">
          Estas posiciones son la síntesis propia del MEU. No hablan en nombre de la tradición judía, cristiana ni islámica, ni pretenden demostrar exhaustivamente la naturaleza de Dios. Son convicciones de fe y de reflexión que cada persona puede examinar, discutir o rechazar.
        </p>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<aside className="lg:col-span-4 sticky top-28 self-start">
<div className="bg-surface-container-lowest rounded-sm p-space-md">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low p-space-sm rounded">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Seis afirmaciones</span>
</div>
<nav className="flex flex-col space-y-1" id="theology-nav">
{NAV.map((n, i) => (
<a key={n.href} className={`nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 ${i === 0 ? "bg-surface-container text-primary font-semibold" : "hover:bg-surface-container text-on-surface-variant hover:text-primary"}`} href={n.href}>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">{n.n}</span>
<span className="font-body-md text-body-md">{n.label}</span>
</div>
<span className={`material-symbols-outlined text-[18px] text-secondary ${i === 0 ? "" : "opacity-0 group-hover:opacity-100 transition-opacity"}`}>arrow_right</span>
</a>
))}
</nav>

<div className="mt-space-md pt-space-sm px-space-sm flex flex-col gap-1">
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Progreso de lectura</span>
<span className="text-secondary font-semibold" id="scroll-percentage">0%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-sm overflow-hidden">
<div className="h-full bg-secondary transition-all duration-150" id="scroll-bar" style={{"width": "0%"}} />
</div>
</div>
</div>
</aside>

<div className="lg:col-span-8 flex flex-col space-y-space-xl">

<article className={art} id="hashem">
<p className={`${eyebrow} mb-space-md`}>Afirmación I</p>
<h2 className={h2}>I. El Dios de Abraham</h2>
<div className={bodyWrap}>
<p>
            Afirmamos la fe en un único Dios universal e indivisible, cuya esencia supera nuestra comprensión. No pretendemos demostrar exhaustivamente su naturaleza ni conocer infaliblemente su voluntad.
          </p>
<p>
            Hablamos del «Dios de Abraham» para nombrar al Dios único reconocido en la herencia que se remonta a la figura de Abraham. La expresión indica una raíz histórica compartida, no una teología idéntica: el judaísmo, el cristianismo y el islam han desarrollado comprensiones distintas, y a menudo divergentes, de ese mismo horizonte monoteísta. Usarla no implica pertenecer a ninguna de esas tradiciones ni abandonar la propia.
          </p>
<p>
            Por eso preferimos hablar de Dios con sobriedad. Toda imagen o concepto humano sobre lo divino es limitado, y reconocerlo es parte de la fe, no su negación.
          </p>
</div>
</article>

<article className={art} id="demiurgo">
<p className={`${eyebrow} mb-space-md`}>Afirmación II</p>
<h2 className={h2}>II. El Demiurgo simbólico</h2>
<div className={bodyWrap}>
<p>
            No existe un segundo dios creador. Tomamos la palabra «Demiurgo» como símbolo: representa nuestra tendencia humana a absolutizar interpretaciones propias y a confundirlas con la voluntad de Dios.
          </p>
<p>
            El Demiurgo es, ante todo, una herramienta de autocrítica. Nos pregunta cuándo hemos convertido nuestras ideas, nuestras instituciones o nuestros intereses en un absoluto. No es una etiqueta para desacreditar otras religiones ni para juzgar la fe de nadie.
          </p>
</div>
</article>

<article className={art} id="jesus">
<p className={`${eyebrow} mb-space-md`}>Afirmación III</p>
<h2 className={h2}>III. Jesús de Nazaret</h2>
<div className={bodyWrap}>
<p>
            Consideramos a Jesús de Nazaret un sabio y justo judío, plenamente humano, excepcionalmente valioso por sus enseñanzas éticas: el amor al prójimo, la atención a los excluidos y la coherencia entre palabra y acción.
          </p>
<p>
            Según nuestra interpretación, no es Dios, ni el Mesías, ni un profeta. Su vínculo con las corrientes judías de su tiempo es objeto de debate académico, y no afirmamos como hecho establecido que perteneciera a una escuela concreta.
          </p>
<p>
            No excluimos que sus enseñanzas hayan tenido inspiración divina; pero una posible inspiración no implica infalibilidad. Sus palabras, como las de cualquier maestro, pueden ser estudiadas e interpretadas críticamente.
          </p>
</div>
</article>

<article className={art} id="muerte-alma">
<p className={`${eyebrow} mb-space-md`}>Afirmación IV</p>
<h2 className={h2}>IV. Muerte y alma</h2>
<div className={bodyWrap}>
<p>
            Sostenemos una posición contemporánea inspirada parcialmente en los saduceos, un grupo judío de la época del Segundo Templo que, según las fuentes antiguas, no aceptaba la resurrección. No presentamos esta interpretación como una reconstrucción histórica definitiva de lo que ellos creían.
          </p>
<p>
            No afirmamos la inmortalidad individual, la resurrección, un juicio final ni recompensas o castigos posteriores a la muerte. Ante lo que no sabemos, preferimos la sobriedad a la especulación.
          </p>
</div>
<div className="my-space-lg p-space-lg lg:p-space-xl bg-surface-container-high rounded-sm">
<p className="font-headline-md text-headline-md text-primary leading-snug font-semibold">
            «No hacemos el bien para merecer otra vida. Hacemos el bien porque esta vida importa.»
          </p>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            La finitud no resta valor a la vida; da peso a cada decisión y a cada vínculo.
          </p>
</div>
</article>

<article className={art} id="proposito">
<p className={`${eyebrow} mb-space-md`}>Afirmación V</p>
<h2 className={h2}>V. Propósito de la creación</h2>
<div className={bodyWrap}>
<p>
            Creemos que la vida fue creada para ser vivida y valorada por sí misma, no como una prueba para obtener otra existencia.
          </p>
<p>
            Reconocemos expresamente que esta interpretación de la intención divina es una convicción de fe, y como tal falible. No pretendemos conocer con certeza los propósitos de Dios; expresamos lo que, a la luz de nuestra reflexión, nos parece más coherente con un Dios bueno.
          </p>
</div>
<div className={box}>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            De esta convicción se sigue el compromiso de reparar el mundo: cuidar la vida, la justicia y la naturaleza aquí y ahora.
          </p>
</div>
</article>

<article className={art} id="universalidad">
<p className={`${eyebrow} mb-space-md`}>Afirmación VI</p>
<h2 className={h2}>VI. Universalidad divina</h2>
<div className={bodyWrap}>
<p>
            Ninguna religión posee el monopolio de la comprensión del Dios de Abraham, tampoco el MEU. La dignidad humana no depende de la pertenencia religiosa.
          </p>
<p>
            Respetamos otras tradiciones y experiencias espirituales, y aprendemos de ellas, sin afirmar que todas sus doctrinas sean equivalentes ni que las nuestras sean superiores. El diálogo honesto incluye reconocer tanto las coincidencias como las diferencias.
          </p>
</div>
</article>

<section className="mt-space-xl p-space-xl rounded-sm bg-surface-container-low">
<div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="space-y-space-xs max-w-xl">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Siguiente página</span>
<h3 className="font-headline-lg text-headline-lg text-primary">Nuestras Raíces</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Las tradiciones históricas con las que dialogamos, distinguiendo lo que dicen las fuentes, lo que se discute académicamente y lo que el MEU propone hoy.
            </p>
</div>
<Link to="/nuestras-raices" className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md uppercase tracking-wider transition-colors flex-shrink-0">
Ir a Nuestras Raíces
</Link>
</div>
</section>
</div>
</div>
</div>
</div></main>
  );
}
