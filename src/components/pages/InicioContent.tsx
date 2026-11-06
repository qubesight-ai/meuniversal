import { Link } from "@tanstack/react-router";
import { HomeHero } from "@/components/HomeHero";

export function InicioContent() {
  return (
<main className="w-full min-h-screen bg-surface"><HomeHero /><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full space-y-space-xl">



<section className="w-full bg-surface-container-high rounded-sm p-space-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter text-center md:text-left divide-y md:divide-y-0 md:divide-x-0">
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">I</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Monoteísmo Puro</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Sin divisiones trinitarias ni mitologías subordinadas.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">VII</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Tratados Canónicos</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Hermenéutica racional fundamentada en el rigor filosófico.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">∞</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Universalidad Moral</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pacto abierto a todo ser humano sin distinción de tribu ni linaje.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">0</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Intermediarios Cliricales</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Vínculo directo entre la conciencia finita y la Causa Suprema.</span>
</div>
</div>
</section>

<section className="w-full space-y-space-lg pt-space-md" id="pilares">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Fundamentos Axiomáticos</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">Los Tres Pilares Fundacionales</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        Columnas sobre las cuales descansa la síntesis entre la lucidez del intelecto y el imperativo moral inderogable.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Pilar Primario</span>
<h3 className="font-headline-md text-headline-md text-primary">I. Dios Universal</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            El Dios de Abraham como principio y causa indivisible del cosmos. Una divinidad libre de corporeidad, antropomorfismos y monopolios sacerdotales. No es una deidad tribal ni un juez irascible, sino la fuente última de la existencia y del orden ontológico ante el cual toda criatura comparece en dignidad idéntica.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Trascendencia Absoluta</span>

</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Pilar Dialéctico</span>
<h3 className="font-headline-md text-headline-md text-primary">II. Gnosis Crítica</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            La razón es el santuario del espíritu. Desmantelamos a los falsos demiurgos del dogmatismo ciego, la superstición y el chantaje ultramundano. La fe madura no teme a la ciencia, ni a la filología, ni a la duda: se templa en ellas para purificar la imagen de lo sagrado de toda idolatría temporal.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Razón Desmitificadora</span>

</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Pilar Praxeológico</span>
<h3 className="font-headline-md text-headline-md text-primary">III. Finitud y Reparación</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Herederos de la sobriedad saducea: la moralidad no requiere la promesa de la recompensa póstuma para tener vigor absoluto. La existencia terrenal es el único tabernáculo verificable. El deber es <em>Tikkun Olam</em>: justicia social, auxilio al vulnerable, preservación de la vida y orden ético inmanente.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Tikkun Olam Concreto</span>

</div>
</article>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center bg-surface-container-low rounded-sm p-space-xl">
<div className="lg:col-span-5 relative overflow-hidden rounded-sm">


<div className="absolute bottom-4 left-4 right-4 text-on-primary">
<span className="font-label-sm text-label-sm tracking-widest uppercase opacity-90">Scriptorium Central</span>
<p className="font-headline-sm text-headline-sm italic">De la letra a la ley moral viva</p>
</div>
</div>
<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Linaje Racional</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">Una Tradición Forjada en la Claridad</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
        El MEU no inventa la búsqueda: recoge los caudales del profetismo bíblico no exclusivista, la dialéctica socrática, el rigor maimonídeo y la Ilustración ética. Nos apartamos del consuelo místico complaciente para exigir una teología de la madurez: donde Dios no es el tapagujeros de nuestra ignorancia, sino el horizonte normativo de nuestra perfección.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
<div className="bg-surface-container-lowest p-space-md rounded">
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Sin Falso Escatologismo</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rechazo frontal a quienes sacrifican la equidad de este mundo en aras de quimeras futuras.</p>
</div>
<div className="bg-surface-container-lowest p-space-md rounded">
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Ecumenismo de la Acción</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Unidad no por dogma formal, sino por la rectitud de los frutos y la justicia compartida.</p>
</div>
</div>
</div>
</section>

<section className="w-full space-y-space-lg pt-space-md" id="tratados">
<div className="text-center max-w-2xl mx-auto space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Cuerpo Doctrinal Sistemático</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Panorama de los Siete Tratados</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
        La estructura canónica del Monoteísmo Ético Universalista, desarrollada para la deliberación individual y el estudio de las asambleas.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">I</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Metafísica</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            El Principio de Inmanencia y Trascendencia
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Demostración de la unidad no contingente. Cómo el Absoluto sostiene las leyes naturales sin intervención arbitraria ni ruptura mágica del cosmos observable.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Tratado Primero • 28 Capítulos</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">II</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Antropología</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            La Dialéctica de la Conciencia Humana
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            El albedrío moral como manifestación singular de la chispa cósmica. La liberación del miedo al castigo externo y la asunción de la autarquía ética.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Tratado Segundo • 19 Capítulos</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">III</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Teología</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Teología del Dios Indivisible
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Crítica irrefutable al politeísmo larvado, trinidad dogmática y cualquier forma de encarnación idolátrica.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Monismo Ético</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">IV</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Genealogía</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            El Linaje de la Razón y la Fe
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Revisión filológica desde los profetas de Israel y la sabiduría ateniense hasta Spinoza y Hermann Cohen.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Historia Crítica</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">V</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Deontología</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            La Responsabilidad Moral
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            El mandamiento sin coacción sobrenatural. La obligación con el desvalido como única liturgia admisible.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Mandato Práctico</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">VI</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Comunidad</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            El Pacto Cívico y la Asamblea Universal
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Estructuración de congregaciones sin clero jerárquico. Metodología de debate público, hospitalidad universal y auxilio mutuo libre de coacción ideológica.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Tratado Sexto • 15 Capítulos</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">VII</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Escatología Inmanente</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Tikkun Olam: La Gran Reparación Terrenal
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            La culminación de la historia no es el apocalipsis destructivo, sino la edificación deliberada de la justicia social, la ecología equilibrada y la fraternidad de las naciones.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Tratado Séptimo • 33 Capítulos</span>

</div>
</div>
</div>
</section>

<section className="w-full text-on-surface rounded-sm p-space-xl relative overflow-hidden border-y border-outline-variant">



<div className="relative z-10 max-w-3xl mx-auto text-center space-y-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest border-y border-outline-variant">

<span>La Voz del Diálogo Abierto</span>
</div>
<blockquote className="space-y-space-sm">
<p className="font-display-md text-display-md leading-tight italic font-normal text-on-surface-variant">
          «Nadie posee la verdad como si fuera una heredad privada. Dios no es propiedad de ninguna sinagoga, mezquita o catedral. Es la luz que hace posible ver la justicia; y la justicia pertenece a todos los que la procuran.»
        </p>
<cite className="block not-italic font-label-md text-label-md text-secondary-fixed tracking-[0.25em] uppercase pt-2">
          — Dictamen del Consejo de Diálogo Intercomunitario • MEU
        </cite>
</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto pt-2">
        Invitamos a pensadores, buscadores espirituales, filósofos y escépticos a sumarse a nuestras lecturas dialécticas y mesas redondas abiertas.
      </p>
<div className="pt-4 flex flex-wrap justify-center gap-space-sm">
<button className="px-6 py-3 rounded bg-secondary text-on-secondary hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider transition-colors">
          Participar en las Sesiones
        </button>
<button className="px-6 py-3 rounded bg-transparent text-on-surface-variant hover:bg-primary font-label-md text-label-md uppercase tracking-wider transition-colors">
          Descargar Manifiesto Completo (PDF)
        </button>
</div>
</div>
</section>
</div></div></main>
  );
}
