import { Link } from "@tanstack/react-router";

export function ReflexionesContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="flex flex-col w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-md">
<div className="flex flex-col space-y-2">
<div className="flex items-center gap-space-xs text-secondary">

<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Textos del MEU</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Reflexiones</h1>
<p className="font-aphorism text-aphorism text-on-surface-variant italic max-w-2xl">
          «Pensar libremente. Cuestionar profundamente. Vivir conscientemente.»
        </p>
</div>

</div>

<div className="bg-surface-container-low p-space-sm rounded-sm flex flex-col gap-space-sm">
<div className="relative w-full">

<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded font-body-md text-body-md placeholder:text-outline focus:outline-none transition-all" id="search-input" placeholder="Buscar por tema o término..." type="text" />
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-outline font-label-sm text-label-sm pointer-events-none">
<kbd className="px-2 py-0.5 bg-surface-container-high rounded text-[11px]">⌘</kbd>
<kbd className="px-2 py-0.5 bg-surface-container-high rounded text-[11px]">K</kbd>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" id="filter-container">
<button className="filter-chip active-filter px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-primary text-on-primary transition-all duration-200" data-filter="all">Todos</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="filosofia">Filosofía</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="teologia">Teología</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="etica">Ética Universal</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="historia">Historia de las Religiones</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="gnosis">Gnosis Crítica</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="vida-muerte">Vida y Muerte</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="tikkun">Tikkún Olám</button>
</div>
</div>
</section>

<section className="w-full my-space-md bg-surface-container-lowest rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">

<div className="lg:col-span-12 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
<div className="flex flex-col space-y-4">
<div className="flex items-center justify-between">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-sm text-label-sm uppercase tracking-widest font-semibold">Reflexión destacada</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
          El límite del entendimiento y el demiurgo interior
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Una reflexión del MEU sobre los límites de nuestro conocimiento de Dios, la tentación de absolutizar nuestras propias ideas y la responsabilidad de reparar el mundo.
        </p>

</div>
<div className="pt-space-lg flex flex-wrap items-center gap-space-sm">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary hover:bg-primary-container rounded font-label-md text-label-md uppercase tracking-widest transition-all duration-300 group" href="#lectura-inmersiva">
<span>Leer la reflexión</span>

</a>

</div>
</div>
</section>

<section className="w-full my-space-xl flex flex-col space-y-space-md">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-1">

<span>Temas en preparación</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Próximas reflexiones</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md text-right md:text-left">
        Temas sobre los que el MEU prepara textos. Todavía no están publicados.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" id="essays-grid">

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Ética Universal</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 8 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            El rostro del otro: Lévinas y la responsabilidad
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Una lectura de la ética de Lévinas y de lo que puede aportar a la responsabilidad hacia el prójimo.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">En preparación</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Teología</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 14 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            Spinoza y la crítica de las imágenes de Dios
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Qué podemos aprender de su crítica al antropomorfismo, y en qué se aleja el MEU de su concepción de Dios.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">En preparación</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Tikkún Olám</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 10 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            Cuidado ambiental y responsabilidad
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            El cuidado de la naturaleza como parte del Tikkun Olam.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">En preparación</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Gnosis Crítica</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 16 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            Cuando la doctrina se vuelve absoluta
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            La gnosis crítica aplicada a nuestras propias formulaciones, antes que a las de los demás.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">En preparación</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
</div>
</section>

<section className="w-full my-space-xl pt-space-lg bg-surface-container-low/60 rounded-sm p-space-md md:p-space-xl" id="lectura-inmersiva">
<div className="mb-space-lg max-w-[840px]">

<h2 className="font-display-md text-display-md text-primary leading-tight">
        El límite del entendimiento y el demiurgo interior
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        Reflexión del MEU. Como toda nuestra producción, es una propuesta abierta a la crítica.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<aside className="lg:col-span-4 sticky top-28 space-y-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-sm">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-4">
            Contenido
          </span>
<nav className="flex flex-col space-y-3 font-body-sm text-body-sm" id="toc-nav">
<a className="toc-link flex items-center justify-between text-primary font-medium p-2 rounded bg-surface-container transition-colors" href="#seccion-1">
<span>1. El límite del entendimiento</span>

</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-2">
<span>2. La trampa del dogmatismo</span>

</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-3">
<span>3. El deber inmanente</span>

</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-bibliografia">
<span>Lecturas sugeridas</span>

</a>
</nav>
</div>

<div className="bg-surface-container p-space-md rounded-sm flex flex-col space-y-2">
<div className="flex items-center gap-1.5 text-secondary">

<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Para pensar</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
            Quizá la fe más honesta no es la que multiplica certezas, sino la que deja a cada conciencia frente a la responsabilidad de la compasión.
          </p>

</div>

<div className="flex items-center justify-between px-2 text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Tamaño del texto</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-sm hover:bg-surface-container-high transition-colors" id="font-decrease">A-</button>
<button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-base hover:bg-surface-container-high transition-colors" id="font-increase">A+</button>
</div>
</div>
</aside>

<article className="lg:col-span-8 max-w-[720px] bg-surface-container-lowest p-space-lg md:p-space-xl rounded-sm flex flex-col space-y-space-md" id="essay-content">

<div className="scroll-mt-32 space-y-4" id="seccion-1">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Parte 1</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">1. El límite del entendimiento</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            El dogmatismo comienza cuando confundimos nuestro mapa provisional con el territorio. Las tradiciones bíblicas ya advertían contra las imágenes que pretenden fijar lo divino. Ese riesgo no desaparece con las estatuas: también podemos fabricar imágenes conceptuales de Dios a nuestra medida, y luego defenderlas como si fueran Dios mismo.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Reconocer los límites de nuestro conocimiento no es un escepticismo paralizante. Maimónides, por ejemplo, sostuvo que de Dios podemos decir con más seguridad lo que <em className="italic">no es</em> que lo que es. Sin adoptar todo su sistema, el MEU comparte esa prudencia: hablar de Dios con humildad.
          </p>
</div>

<div className="scroll-mt-32 space-y-4 pt-space-sm" id="seccion-2">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Parte 2</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">2. La trampa del dogmatismo</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            La certeza inmediata es atractiva: nos libera de la incomodidad de dudar. Pero cuando una doctrina ofrece seguridad a cambio de dejar de pensar, quita a la persona algo valioso: la responsabilidad sobre su propio juicio.
          </p>

<figure className="my-space-md p-space-md md:p-space-lg text-on-surface rounded-sm relative overflow-hidden border-y border-outline-variant">

<blockquote className="font-aphorism text-aphorism italic text-primary leading-relaxed relative z-10">
              «No hacemos el bien para merecer otra vida; hacemos el bien porque la vida misma es el único lugar donde la justicia es posible.»
            </blockquote>
</figure>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Cuando el bien se hace solo por temor a un castigo o por deseo de una recompensa, la motivación se desplaza de la persona que sufre hacia uno mismo. Proponemos hacer el bien por el valor de la vida y de los demás.
          </p>
</div>

<div className="scroll-mt-32 space-y-4 pt-space-sm" id="seccion-3">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Parte 3</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">3. El deber inmanente</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Ante el dolor y la injusticia del mundo, el MEU no propone la resignación ni la huida, sino el trabajo de nuestras manos: el <strong className="font-semibold text-primary">Tikkun Olam</strong>, la reparación práctica del mundo.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Cada acto de bondad desinteresada, cada injusticia corregida, cada persona ayudada sin preguntarle en qué cree, es una forma de reparación. No sabemos con certeza cómo actúa Dios en el mundo; sí sabemos lo que nosotros podemos hacer.
          </p>
</div>

<div className="scroll-mt-32 pt-space-md mt-space-md bg-surface-container-low p-space-md rounded-sm" id="seccion-bibliografia">
<h4 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">

            Lecturas sugeridas
          </h4>
<ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[1]</span>
<div>
<strong className="text-primary font-semibold">Spinoza, Baruch:</strong>
<em>Ética demostrada según el orden geométrico</em>, Parte I.
              </div>
</li>
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[2]</span>
<div>
<strong className="text-primary font-semibold">Maimónides, Moisés:</strong>
<em>Guía de perplejos</em>, Parte I, sobre los atributos negativos.
              </div>
</li>
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[3]</span>
<div>
<strong className="text-primary font-semibold">Lévinas, Emmanuel:</strong>
<em>Totalidad e infinito</em>, Sección III.
              </div>
</li>
</ul>
</div>


</article>
</div>
</section>

<section className="w-full my-space-lg bg-surface-container-high rounded-sm p-space-lg md:p-space-xl relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8 flex flex-col space-y-3">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.25em]">

<span>Diálogo abierto</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Una propuesta en construcción</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          El Monoteísmo Ético Universalista no es una revelación cerrada, sino una propuesta que se revisa y crece con el diálogo. Las preguntas, críticas y desacuerdos razonados son bienvenidos.
        </p>

</div>
<div className="lg:col-span-4 flex flex-col space-y-3 bg-surface-container-lowest p-space-md rounded-sm">
<span className="font-headline-sm text-headline-sm text-primary">Seguir leyendo</span>
<Link to="/preguntas-frecuentes" className="w-full py-3 bg-primary text-on-primary hover:bg-primary-container text-center rounded font-label-sm text-label-sm uppercase tracking-widest transition-colors font-semibold">
          Preguntas frecuentes
        </Link>
<Link to="/nuestra-filosofia" className="w-full py-2 bg-transparent text-secondary hover:text-primary text-center font-label-sm text-label-sm uppercase tracking-widest transition-colors">
          Nuestra filosofía
        </Link>
</div>
</div>
</section>


</div></div></main>
  );
}
