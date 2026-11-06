import { Link } from "@tanstack/react-router";

const PRINCIPLES = [
  { id: "tesis-01", n: "01", nav: "Humildad epistemológica y razón crítica" },
  { id: "tesis-02", n: "02", nav: "Gnosis crítica" },
  { id: "tesis-03", n: "03", nav: "Ética universal racional" },
  { id: "tesis-04", n: "04", nav: "Libertad de conciencia y disenso" },
  { id: "tesis-05", n: "05", nav: "Valor intrínseco de la vida finita" },
  { id: "tesis-06", n: "06", nav: "Tikkun Olam: reparar el mundo" },
];

const article = "thesis-section scroll-mt-28 flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const eyebrow = "font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase font-mono";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const lead = "font-body-lg text-body-lg text-on-surface leading-relaxed";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const note = "flex items-start gap-3 p-3 bg-surface-container-high rounded text-on-surface-variant";

export function FilosofiaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
<div className="flex flex-col space-y-2">
<h1 className="font-display-lg text-display-lg text-primary max-w-4xl tracking-tight">
          Nuestra Filosofía: seis principios para pensar y vivir
        </h1>
</div>
</div>

<div className="p-space-lg rounded-sm bg-surface-container-low flex flex-col md:flex-row gap-space-lg items-center justify-between">
<p className="font-body-lg text-body-lg text-on-surface max-w-3xl leading-relaxed">
        El Monoteísmo Ético Universalista es una propuesta filosófica abierta. No pide adhesión ciega: invita a examinar con honestidad lo que creemos, a vivir con responsabilidad y a cuidar el mundo que compartimos. Estos seis principios orientan esa búsqueda; no la cierran.
      </p>
</div>
</section>

<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mt-space-md">

<aside className="lg:col-span-4 xl:col-span-3">
<div className="sticky top-28 flex flex-col p-space-md bg-surface-container-lowest rounded-sm space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Principios</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">06</span>
</div>
<nav className="flex flex-col space-y-1" id="thesis-nav">
{PRINCIPLES.map((p, i) => (
<a key={p.id} className={`thesis-link group flex items-start gap-3 p-2.5 rounded transition-all duration-200 ${i === 0 ? "bg-surface-container-high text-primary font-semibold" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"}`} data-target={p.id} href={`#${p.id}`}>
<span className="font-label-sm text-label-sm text-secondary mt-0.5 group-hover:text-primary transition-colors">{p.n}.</span>
<span className="font-body-sm text-body-sm leading-snug">{p.nav}</span>
</a>
))}
</nav>

<div className="p-space-sm rounded-sm bg-surface-container-low text-on-surface flex flex-col space-y-2">
<span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary">Criterio de lectura</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Toda enseñanza aquí expuesta puede ser examinada, discutida o rechazada.
          </p>
</div>

<div className="pt-2 flex flex-col space-y-1">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Progreso de lectura</span>
<span className="font-label-sm text-label-sm font-mono text-secondary" id="reading-progress-percent">0%</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-sm overflow-hidden">
<div className="h-full bg-secondary transition-all duration-300 w-0" id="reading-progress-bar" />
</div>
</div>
</div>
</aside>

<div className="lg:col-span-8 xl:col-span-9 flex flex-col space-y-space-xl">

<article className={article} id="tesis-01">
<span className={eyebrow}>Principio I</span>
<h2 className={h2}>01. Humildad epistemológica, razón y pensamiento crítico</h2>
<p className={lead}>
          Nuestro conocimiento es limitado. Sobre Dios, sobre el mundo y sobre nosotros mismos sabemos menos de lo que quisiéramos, y a menudo menos de lo que creemos. Reconocerlo no debilita la fe ni la reflexión: las hace honestas.
        </p>
<p className={lead}>
          Entendemos al Dios de Abraham como principio universal trascendente y fundamento de la existencia, sin pretender encerrarlo en imágenes o definiciones humanas. Es una convicción de fe, no una demostración científica.
        </p>
<p className={body}>
          Por eso la razón y el pensamiento crítico ocupan un lugar central. Cada persona es responsable de examinar por sí misma toda enseñanza, incluidas las de esta filosofía. Pensar críticamente no es una amenaza para la convicción, sino una condición de su autenticidad. Preferimos una convicción modesta y abierta a una certeza que no admite preguntas.
        </p>
<p className={body}>
          Distinguimos el conocimiento empírico de las convicciones metafísicas: las afirmaciones religiosas que puedan comprobarse deben someterse a evidencia, y la fe no puede invalidar descubrimientos científicos.
        </p>
</article>

<article className={article} id="tesis-02">
<span className={eyebrow}>Principio II</span>
<h2 className={h2}>02. Gnosis crítica: conocerse para no absolutizarse</h2>
<p className={lead}>
          Entendemos la gnosis no como un saber secreto reservado a iniciados, sino como un trabajo de autoconocimiento: revisar nuestros prejuicios, reconocer nuestros intereses y advertir cuándo convertimos nuestras propias ideas en absolutos.
        </p>
<p className={body}>
          Esto incluye nuestras representaciones de Dios. Toda imagen humana de lo divino es parcial. La gnosis crítica nos invita a cuestionar las versiones de Dios que hemos absolutizado —incluidas las nuestras— antes de juzgar las de los demás.
        </p>
<div className={note}>
<p className="font-body-sm text-body-sm leading-relaxed">
<strong className="font-semibold text-primary">Relación con el Demiurgo:</strong> en nuestra teología, el Demiurgo es un símbolo de esa tendencia humana a absolutizar interpretaciones propias. Es una herramienta de autocrítica, no una etiqueta para desacreditar otras religiones.
          </p>
</div>
</article>

<article className={article} id="tesis-03">
<span className={eyebrow}>Principio III</span>
<h2 className={h2}>03. Ética universal racional</h2>
<p className={lead}>
          Sostenemos una ética que pueda ser comprendida y compartida por cualquier persona, con independencia de su religión o de la ausencia de ella. Sus ejes son la dignidad de cada ser humano, la justicia, la compasión y la responsabilidad por las consecuencias de nuestras acciones.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-sm">
<div className="p-space-md bg-surface-container-low rounded-sm flex flex-col space-y-2">
<span className="font-headline-sm text-headline-sm text-primary">Dignidad y justicia</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Ninguna persona vale menos por su origen, creencia, género, orientación sexual, identidad de género o condición. Las personas LGBTQ+ participan en igualdad de condiciones; sus identidades y relaciones afectivas, incluidos los matrimonios entre personas del mismo sexo, son igualmente dignos y legítimos.
            </p>
</div>
<div className="p-space-md bg-surface-container-high rounded-sm flex flex-col space-y-2">
<span className="font-headline-sm text-headline-sm text-primary">Compasión y responsabilidad</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              No basta con tener buenas intenciones: somos responsables de los efectos reales de lo que hacemos y de lo que dejamos de hacer.
            </p>
</div>
</div>
</article>

<article className={article} id="tesis-04">
<span className={eyebrow}>Principio IV</span>
<h2 className={h2}>04. Libertad de conciencia, interpretación, pensamiento y disenso</h2>
<p className={lead}>
          Ningún ser humano posee autoridad espiritual sobre la conciencia de otro. Cada persona es libre de pensar, de interpretar los textos y las tradiciones, y de discrepar, también de esta filosofía.
        </p>
<p className={body}>
          El desacuerdo razonado no es una amenaza que deba tolerarse a regañadientes, sino una parte legítima de la búsqueda compartida. Una comunidad que no permite disentir deja de ser un espacio de pensamiento. Rechazamos las amenazas sobrenaturales, la culpa coercitiva y cualquier manipulación religiosa; el bienestar psicológico, por sí solo, tampoco demuestra la verdad de una creencia.
        </p>
</article>

<article className={article} id="tesis-05">
<span className={eyebrow}>Principio V</span>
<h2 className={h2}>05. Valor intrínseco de la vida finita</h2>
<p className={lead}>
          La vida tiene valor en sí misma, no como medio para obtener otra existencia. Vivir, amar, aprender y disfrutar responsablemente son formas legítimas de habitar el mundo.
        </p>
<p className={body}>
          Reconocer que nuestra vida es finita no conduce al desaliento, sino a una mayor atención: a las personas, al tiempo que compartimos y a las consecuencias de nuestras decisiones. Reconocemos la bondad, la justicia, la compasión y la belleza interior de todas las personas; si hablamos de «alma», lo hacemos poéticamente, sin afirmar una alma inmortal.
        </p>
<blockquote className="pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
            «No hacemos el bien para merecer otra vida. Hacemos el bien porque esta vida importa.»
          </p>
</blockquote>
</article>

<article className={article} id="tesis-06">
<span className={eyebrow}>Principio VI</span>
<h2 className={h2}>06. Tikkun Olam: reparación práctica del mundo</h2>
<p className={lead}>
          Tikkun Olam significa «reparación del mundo». Para el MEU se traduce en acciones concretas: justicia social, educación, solidaridad y cuidado del medio ambiente.
        </p>
<p className={body}>
          La expresión procede de la tradición judía, donde ha tenido sentidos diversos a lo largo de la historia. En la Cábala luriánica del siglo XVI se asoció a la imagen de unas vasijas que se rompen. Podemos usar esa imagen como metáfora inspiradora, pero no la proponemos como cosmología obligatoria: lo esencial es el compromiso práctico de dejar el mundo mejor de lo que lo encontramos.
        </p>
</article>

<section className="mt-space-xl p-space-xl rounded-sm text-on-surface relative overflow-hidden border-y border-outline-variant">
<div className="relative z-10 flex flex-col space-y-space-md">
<span className="font-label-sm text-label-sm tracking-[0.25em] uppercase font-semibold text-secondary">Siguiente página</span>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="flex flex-col space-y-2 max-w-2xl">
<h2 className="font-display-md text-display-md text-on-surface-variant tracking-tight">
                Nuestra Teología: seis afirmaciones de fe
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2">
                Qué afirmamos sobre el Dios de Abraham, el Demiurgo simbólico, Jesús de Nazaret, la muerte, el propósito de la vida y la universalidad divina, y con qué grado de certeza.
              </p>
</div>
<Link to="/nuestra-teologia" className="shrink-0 px-6 py-3.5 rounded bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 font-label-md text-label-md uppercase tracking-wider flex items-center gap-3 group">
<span>Continuar a la Teología</span>
</Link>
</div>
</div>
</section>
</div>
</div>
</div>
</div></main>
  );
}
