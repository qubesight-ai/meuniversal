import { Link } from "@tanstack/react-router";
import { HomeHero } from "@/components/HomeHero";

export function InicioContent() {
  return (
<main className="w-full min-h-screen bg-surface"><HomeHero /><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full space-y-space-xl">



<section className="w-full bg-surface-container-high rounded-sm p-space-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter text-center md:text-left divide-y md:divide-y-0 md:divide-x-0">
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">1</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Un único Dios</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Universal e indivisible, más allá de nuestra comprensión.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">6</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Principios filosóficos</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Para orientar la reflexión, no para exigir conformidad.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">∞</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Dignidad universal</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">La dignidad humana no depende de la pertenencia religiosa.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">0</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Autoridades infalibles</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Nadie posee autoridad espiritual sobre la conciencia de otro.</span>
</div>
</div>
</section>

<section className="w-full space-y-space-lg pt-space-md" id="pilares">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Fundamentos</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">Tres pilares</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        Tres ideas que resumen la propuesta del MEU. Cada una se desarrolla en Filosofía y Teología.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Fe</span>
<h3 className="font-headline-md text-headline-md text-primary">I. Dios Universal</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Afirmamos la fe en el Dios de Abraham: único, universal e indivisible, cuya esencia supera nuestra comprensión. No pretendemos conocer infaliblemente su voluntad, y ninguna religión —tampoco el MEU— posee el monopolio de su comprensión.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Fe con humildad</span>

</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Pensamiento</span>
<h3 className="font-headline-md text-headline-md text-primary">II. Gnosis Crítica</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Autoconocimiento y revisión de los propios prejuicios, incluidas nuestras imágenes absolutizadas de Dios. La fe madura no teme a la ciencia ni a la duda; el pensamiento crítico es una forma de honestidad.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Autocrítica</span>

</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Acción</span>
<h3 className="font-headline-md text-headline-md text-primary">III. Finitud y Reparación</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            La vida tiene valor en sí misma, no como prueba para otra existencia. Inspirados parcialmente en los saduceos, no hacemos depender la ética de recompensas tras la muerte. El compromiso es <em>Tikkun Olam</em>: justicia social, educación, solidaridad y cuidado ambiental.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Reparar el mundo</span>

</div>
</article>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center bg-surface-container-low rounded-sm p-space-xl">
<div className="lg:col-span-5 relative overflow-hidden rounded-sm">


<div className="absolute bottom-4 left-4 right-4 text-on-primary">

</div>
</div>
<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Tradiciones en diálogo</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">Una propuesta que dialoga con la historia</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
        El MEU no parte de cero: dialoga con los profetas de Israel, con la filosofía griega, con pensadores como Maimónides y Spinoza y con la ética de la Ilustración. No se presenta como su heredero oficial, sino como una propuesta contemporánea que aprende de ellos con espíritu crítico.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
<div className="bg-surface-container-lowest p-space-md rounded">
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Esta vida importa</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">La justicia y el cuidado no se posponen a otra existencia.</p>
</div>
<div className="bg-surface-container-lowest p-space-md rounded">
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Encuentro en la acción</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Personas de distintas creencias pueden coincidir en la justicia y el cuidado mutuo.</p>
</div>
</div>
</div>
</section>

<section className="w-full space-y-space-lg pt-space-md" id="tratados">
<div className="text-center max-w-2xl mx-auto space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Recorrido</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Las siete secciones del sitio</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
        Un mapa de lo que encontrará en cada página, para leer a su propio ritmo.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">I</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Filosofía</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Nuestra Filosofía
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Seis principios: humildad epistemológica, gnosis crítica, ética universal, libertad de conciencia, valor de la vida finita y Tikkun Olam.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Seis principios</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">II</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Teología</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Nuestra Teología
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Seis afirmaciones de fe, del Dios de Abraham a la universalidad divina, sostenidas con conciencia de su falibilidad.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Seis afirmaciones</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">III</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Historia</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Nuestras Raíces
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Las tradiciones con las que dialogamos, distinguiendo fuentes, debate académico y propuesta propia.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Rigor histórico</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">IV</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Ensayo</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Reflexiones
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Textos breves de reflexión sobre la razón, la finitud y la reparación del mundo.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Para pensar</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">V</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Diálogo</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Preguntas Frecuentes
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Respuestas a las dudas más habituales sobre el MEU, su fe y su forma de convivir.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Dudas habituales</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">VI</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Ética</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Nuestro Compromiso
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Participación voluntaria, libertad de conciencia y ausencia de autoridades espirituales infalibles. Incluye nuestras dos declaraciones.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Convivencia libre</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">VII</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Práctica</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Tikkun Olam
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Reparar el mundo con acciones concretas: justicia social, educación, solidaridad y cuidado ambiental.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Reparar el mundo</span>

</div>
</div>
</div>
</section>

<section className="w-full text-on-surface rounded-sm p-space-xl relative overflow-hidden border-y border-outline-variant">



<div className="relative z-10 max-w-3xl mx-auto text-center space-y-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest border-y border-outline-variant">

<span>Diálogo abierto</span>
</div>
<blockquote className="space-y-space-sm">
<p className="font-display-md text-display-md leading-tight italic font-normal text-on-surface-variant">
          Nadie posee la verdad como una propiedad privada. Ninguna religión tiene el monopolio de la comprensión de Dios, y la justicia pertenece a todos los que la buscan.
        </p>
</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto pt-2">
        Personas creyentes, buscadoras, filósofas o escépticas son bienvenidas a leer, preguntar y discrepar.
      </p>
<div className="pt-4 flex flex-wrap justify-center gap-space-sm">
<Link to="/nuestra-filosofia" className="px-6 py-3 rounded bg-secondary text-on-secondary hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider transition-colors">
          Leer nuestra filosofía
        </Link>
<Link to="/preguntas-frecuentes" className="px-6 py-3 rounded bg-transparent text-on-surface-variant hover:bg-surface-container font-label-md text-label-md uppercase tracking-wider transition-colors">
          Preguntas frecuentes
        </Link>
</div>
</div>
</section>
</div></div></main>
  );
}
