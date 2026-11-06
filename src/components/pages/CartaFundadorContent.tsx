import { Link } from "@tanstack/react-router";
import ernestoFoto from "@/assets/ernesto-libby.jpg.asset.json";

const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const lead = "font-body-lg text-body-lg text-on-surface leading-relaxed";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const quote = "pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg";
const aphorism = "font-aphorism text-aphorism text-primary italic leading-relaxed";

export function CartaFundadorContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<div className="flex items-center gap-space-md">
<img src={ernestoFoto.url} alt="Ernesto Libby Lugo" className="w-20 h-20 rounded-lg object-cover" loading="lazy" />
<div className="flex flex-col space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Carta del fundador</span>
<span className="font-headline-sm text-headline-sm text-primary">Ernesto Libby Lugo</span>
</div>
</div>
<h1 className={h1}>Por qué fundé el Monoteísmo Ético Universalista</h1>
<p className={intro}>Carta del fundador</p>
</header>

<article className="flex flex-col space-y-space-md">
<p className={lead}>Nunca he considerado que hacerse preguntas sobre Dios sea una falta de fe. Por el contrario, creo que cuestionar nuestras propias creencias puede ser una de las formas más sinceras de buscar la verdad.</p>
<p className={body}>Durante mi búsqueda espiritual y filosófica, dos inquietudes comenzaron a ocupar un lugar importante en mi pensamiento.</p>
<p className={body}>La primera fue mi desacuerdo con determinadas interpretaciones religiosas sobre Dios, la muerte y el propósito de nuestra existencia. Me preguntaba por qué la vida debía entenderse como una prueba, por qué nuestras acciones necesitaban justificarse mediante recompensas o castigos después de la muerte y por qué algunas personas afirmaban conocer con absoluta certeza la voluntad divina.</p>
<p className={body}>La segunda inquietud era igualmente importante: ¿por qué dedicar tantos esfuerzos a prepararnos para otra existencia cuando todavía tenemos tanto por hacer en esta?</p>
<p className={body}>Vivimos en un mundo donde existen la injusticia, la pobreza, la exclusión, la violencia y el sufrimiento. También vivimos en un mundo extraordinario, lleno de belleza, conocimiento, naturaleza, vínculos humanos y oportunidades para construir algo mejor.</p>
<p className={body}>Comencé a preguntarme si una espiritualidad verdaderamente comprometida con la vida no debería concentrarse precisamente en eso: en vivir responsablemente, aprender, amar, disfrutar y contribuir a reparar aquello que está dañado.</p>
<p className={body}>En el pensamiento judío encontré ideas que enriquecieron esta reflexión, especialmente el <em>Tikkun Olam</em>, entendido como la responsabilidad de reparar el mundo. También encontré inspiración en distintas corrientes filosóficas e históricas, aunque sin sentir la necesidad de aceptar íntegramente sus doctrinas.</p>
<p className={body}>De esa búsqueda surgió el Monoteísmo Ético Universalista.</p>
<p className={body}>El MEU expresa mi convicción de que podemos creer en el Dios de Abraham sin afirmar que comprendemos completamente su naturaleza. Que podemos reconocer la sabiduría de figuras religiosas sin considerarlas infalibles. Que podemos encontrar sentido en nuestra existencia sin depender de la promesa de otra vida.</p>
<p className={body}>Pero también expresa algo que considero fundamental: ninguna persona debería renunciar a su libertad de conciencia para participar en una búsqueda espiritual o filosófica.</p>
<p className={body}>No pretendo hablar en nombre de Dios. No me considero profeta, intermediario divino ni poseedor de una verdad definitiva. Soy simplemente una persona que ha reflexionado sobre estas preguntas y ha decidido compartir sus conclusiones, sabiendo que pueden contener errores.</p>
<p className={body}>Por eso deseo que el MEU permanezca abierto a la crítica, al diálogo y a la revisión. No quiero que sus principios se conviertan en dogmas que nadie pueda cuestionar, ni que mi condición de fundador otorgue a mis palabras una autoridad especial.</p>
<p className={body}>Si alguien encuentra contradicciones en mis ideas, espero que pueda señalarlas libremente. Si otra persona desarrolla una interpretación mejor fundamentada, espero que podamos aprender de ella.</p>
<p className={body}>Mi aspiración no es construir una comunidad de personas que piensen exactamente como yo. Es contribuir a una forma de pensamiento que permita unir la fe con la razón, la libertad con la responsabilidad y la reflexión con la acción.</p>
<p className={body}>Esta búsqueda también me llevó a crear el Ateneo de la Vida Interior (ATENEUM), una iniciativa dedicada al diálogo interreligioso y a la exploración espiritual desde el respeto, la libertad de conciencia y el pensamiento crítico. Aunque ambos proyectos nacen de inquietudes que comparto, tienen propósitos diferentes: el Ateneo ofrece un espacio plural donde pueden encontrarse distintas convicciones, mientras que el Monoteísmo Ético Universalista expresa una propuesta filosófica y teológica particular. Considero importante preservar esa independencia, porque el diálogo auténtico requiere que ninguna perspectiva reclame una posición privilegiada.</p>
<p className={body}>Porque, al final, considero que nuestra tarea más importante no consiste en escapar del mundo, sino en participar responsablemente en él.</p>
<p className={body}>No fundé el Monoteísmo Ético Universalista porque creyera haber encontrado todas las respuestas. Lo fundé porque considero que hay preguntas que merecen hacerse con libertad, incluso cuando cuestionan nuestras convicciones más profundas.</p>
<p className={body}>No espero que quienes lean estas palabras piensen como yo. Espero que piensen por sí mismos.</p>
<p className={body}>Y si algún día esta filosofía contribuye a que una persona viva con mayor libertad, trate a otra con más compasión o repare una pequeña parte del mundo, habrá cumplido su propósito.</p>
</article>

<blockquote className={quote}>
<p className={aphorism}>«Del mundo no se huye; se repara. La vida no se supera; se vive».</p>
</blockquote>

<div className="flex flex-col space-y-1 border-t border-outline-variant pt-space-md">
<span className="font-headline-sm text-headline-sm text-primary">Ernesto Libby Lugo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fundador del Monoteísmo Ético Universalista</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Creador del Ateneo de la Vida Interior (ATENEUM)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Costa Rica, 2026</span>
<a href="https://ateneum.world/" className="self-start pt-space-sm font-body-sm text-body-sm text-secondary underline underline-offset-4 hover:text-primary transition-colors">Visitar ATENEUM — ateneum.world</a>
</div>

<div>
<Link to="/" className="inline-flex items-center px-6 py-3 rounded border border-outline-variant hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors">
          Volver al inicio
        </Link>
</div>

</div></div></main>
  );
}
