import { Link } from "@tanstack/react-router";

export function ReflexionesContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="flex flex-col w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-md">
<div className="flex flex-col space-y-2">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[18px]">auto_stories</span>
<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Compendio Editorial • Volumen V</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Reflexiones</h1>
<p className="font-aphorism text-aphorism text-on-surface-variant italic max-w-2xl">
          «Pensar libremente. Cuestionar profundamente. Vivir conscientemente.»
        </p>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider bg-surface-container px-4 py-2 rounded">
<span className="material-symbols-outlined text-[16px] text-secondary">history_edu</span>
<span>42 Tratados Catalogados</span>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded font-body-md text-body-md placeholder:text-outline focus:outline-none shadow-sm transition-all" id="search-input" placeholder="Buscar por tesis, autor de referencia (Spinoza, Jonas, Maimónides) o término canónico..." type="text" />
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

<section className="w-full my-space-md bg-surface-container-lowest rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
<div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-primary-container">
<img className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" data-alt="Fotografía de estilo scriptorium filosófico de alta resolución con luz cenital dorada penetrando sobre un pergamino antiguo con tintas minerales, un compás astronómico de latón y libros de teología empastados en cuero sobre una mesa de roble oscuro, atmósfera de calma y sabiduría atemporal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWmsyb72vveQYdfi-1fhxrgMvdRAU28f4cBmtL3eZpgs2Vkjdp03EbdIt5_6qdVI5UhgqjU3Erd_vfEfKH8En0-LiNra_LNs29bnKw5j_0BedNo_OE67oDfUdPAhwlfHq8v7i_kowXvOaLjonfQbhci-1WauNq96ZrAvuQNtHny98_fvVNSgQRbdsRqNEh50eeofS1AhbrO7QxP-tIh0HuNWp2uP5XTUFDqAfvQQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-space-lg text-on-primary">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>12 min de lectura</span>
<span>•</span>
<span>Cuaderno II • Folio 89</span>
</div>
<p className="font-headline-sm text-headline-sm text-surface-container-lowest mt-1">Tratado Rector de Otoño</p>
</div>
</div>
<div className="lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
<div className="flex flex-col space-y-4">
<div className="flex items-center justify-between">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-sm text-label-sm uppercase tracking-widest font-semibold">Tesis Primaria • Exégesis Ontológica</span>
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">bookmark_border</span>
            Tratado No. 14
          </span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
          La vasija fracturada y el espejismo del absoluto: desmantelar el demiurgo interior
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Una interrogación rigurosa a la noción de providencia pasiva. Frente al colapso de las mitologías teístas antropomórficas, este ensayo expone cómo la reparación ontológica (Shevirat ha-Kelim) no es una tragedia cósmica ajena, sino la condición fundacional de la libertad y el imperativo moral humano.
        </p>
<div className="flex items-center gap-space-md pt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-secondary">Ψ</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-semibold text-primary uppercase tracking-wider">Mesa de Estudio Teológico</span>
<span className="font-body-sm text-body-sm text-outline">Revisión colegiada MEU</span>
</div>
</div>
<span className="text-outline">•</span>
<span className="font-label-sm text-label-sm text-outline tracking-wider">Publicado en Nisán MMXXIV</span>
</div>
</div>
<div className="pt-space-lg flex flex-wrap items-center gap-space-sm">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary hover:bg-primary-container rounded font-label-md text-label-md uppercase tracking-widest shadow-sm transition-all duration-300 group" href="#lectura-inmersiva">
<span>Iniciar Lectura Inmersiva</span>
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">menu_book</span>
</a>
<button className="inline-flex items-center gap-2 px-5 py-3 bg-surface-container hover:bg-surface-container-high text-primary rounded font-label-md text-label-md uppercase tracking-wider transition-colors duration-200">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span>Descargar Pliego PDF</span>
</button>
</div>
</div>
</section>

<section className="w-full my-space-xl flex flex-col space-y-space-md">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-1">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span>Series Canónicas</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Disertaciones Fundamentales</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md text-right md:text-left">
        Monografías teóricas redactadas bajo rigor epistémico, exégesis crítica y compromiso ético inmanente.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" id="essays-grid">

<article className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Ética Universal</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 8 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            El rostro del otro como altar profano: De Lévinas a la praxis del auxilio
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Exploración de la epifanía del prójimo despojado de poder como el único espacio donde la trascendencia irrumpe en el orden de lo visible.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">Ensayo #09</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Teología Racional</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 14 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            Spinoza y la disolución del tirano celestial: Dios como sustancia indivisa
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            El tránsito del monoteísmo mitológico a la comprensión geométrica del Todo. Por qué el miedo al castigo anula la verdadera pureza de la virtud.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">Ensayo #11</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Tikkún Olám</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 10 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            La ecología de la santidad: El cosmos como templo que no admite saqueo
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Frente al extractivismo utilitarista, redescubrimos el principio de corresponsabilidad biológica como mandato de fidelidad al Dios de la Creación.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">Ensayo #23</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Gnosis Crítica</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 16 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            La idolatría del dogma: Cuando la palabra sustituye la mirada del corazón
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Una deconstrucción de la fe fosilizada. Cómo las estructuras institucionales acaban adorando el becerro de oro de sus propias formulaciones doctrinales.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">Ensayo #31</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Abrir Tesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
</div>
</section>

<section className="w-full my-space-xl pt-space-lg bg-surface-container-low/60 rounded-xl p-space-md md:p-space-xl shadow-sm" id="lectura-inmersiva">
<div className="mb-space-lg max-w-[840px]">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-2">
<span className="material-symbols-outlined text-[16px]">auto_stories</span>
<span>Plantilla de Lectura Integral • Folio Activo</span>
</div>
<h2 className="font-display-md text-display-md text-primary leading-tight">
        La vasija fracturada y el espejismo del absoluto
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        Tratado Teológico-Político sobre la inmanencia de la justicia y la disolución del absolutismo devocional.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<aside className="lg:col-span-4 sticky top-28 space-y-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-4">
            Estructura del Tratado
          </span>
<nav className="flex flex-col space-y-3 font-body-sm text-body-sm" id="toc-nav">
<a className="toc-link flex items-center justify-between text-primary font-medium p-2 rounded bg-surface-container transition-colors" href="#seccion-1">
<span>1. El límite del entendimiento</span>
<span className="font-label-sm text-[11px] text-secondary">§ 01–04</span>
</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-2">
<span>2. La trampa del dogmatismo</span>
<span className="font-label-sm text-[11px] text-outline">§ 05–09</span>
</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-3">
<span>3. El deber inmanente</span>
<span className="font-label-sm text-[11px] text-outline">§ 10–15</span>
</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-bibliografia">
<span>Aparato Crítico & Fuentes</span>
<span className="material-symbols-outlined text-[16px] text-outline">menu_book</span>
</a>
</nav>
</div>

<div className="bg-surface-container p-space-md rounded-lg shadow-inner flex flex-col space-y-2">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px]">lightbulb</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Nota Marginal</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
            «El monoteísmo auténtico no consiste en multiplicar los milagros, sino en eliminar los intermediarios mágicos para dejar a la conciencia a solas frente al mandato de la compasión.»
          </p>
<span className="font-label-sm text-label-sm text-outline self-end">— Archivo MEU, Glosa 44</span>
</div>

<div className="flex items-center justify-between px-2 text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Tipografía Áurea</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-sm hover:bg-surface-container-high transition-colors" id="font-decrease">A-</button>
<button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-base hover:bg-surface-container-high transition-colors" id="font-increase">A+</button>
</div>
</div>
</aside>

<article className="lg:col-span-8 max-w-[720px] bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-md flex flex-col space-y-space-md" id="essay-content">

<div className="scroll-mt-32 space-y-4" id="seccion-1">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Capítulo Primero</span>
<span>•</span>
<span>§ 01</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">1. El límite del entendimiento</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Todo dogma comienza cuando el asombro calla y la mente confunde su mapa provisional con el territorio infinito. La tradición profética originaria no fue un edicto sobre las propiedades físicas de la divinidad, sino una advertencia demoledora contra la tentación humana de esculpir estatuas conceptuales. Cuando concebimos a Dios como un emperador suspendido sobre las nubes que concede caprichos bélicos o recompensas vanas, hemos fabricado el más perverso de los ídolos: el dios a nuestra propia imagen y semejanza.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            El verdadero umbral de la fe racional es el reconocimiento de la finitud cognoscitiva. No es un escepticismo paralizante, sino la sobria constatación maimonidiana: sólo podemos afirmar con certeza lo que Dios <em className="italic">no es</em>. Todo predicado positivo es un balbuceo de la criatura que tropieza con la inmensidad del Todo.
          </p>
</div>

<div className="scroll-mt-32 space-y-4 pt-space-sm" id="seccion-2">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Capítulo Segundo</span>
<span>•</span>
<span>§ 05</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">2. La trampa del dogmatismo</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            La religión fosilizada se niega a perecer porque comercia con el bien más codiciado de la psique humana: la certeza inmediata. Al prometer salvaciones automáticas a cambio de la sumisión acrítica a fórmulas verbales, priva al individuo de su atributo más sagrado, la responsabilidad intransferible.
          </p>

<figure className="my-space-md p-space-md md:p-space-lg bg-primary text-on-primary rounded-lg shadow-md relative overflow-hidden">
<div className="absolute -right-4 -bottom-6 text-on-primary/10 select-none pointer-events-none">
<span className="material-symbols-outlined text-[130px]">format_quote</span>
</div>
<blockquote className="font-aphorism text-aphorism italic text-secondary-fixed leading-relaxed relative z-10">
              «No hacemos el bien para merecer otra vida; hacemos el bien porque la vida misma es el único lugar donde la justicia es posible.»
            </blockquote>
<figcaption className="mt-4 font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary-fixed-dim">
              — Proposición Moral VII, Tratado de la Rectitud
            </figcaption>
</figure>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Quien obra rectamente motivado por el pánico al infierno o la codicia del paraíso aún no ha dado el primer paso en la senda ética. El bien que busca recompensa es cálculo contable, no devoción inmanente a la Unidad.
          </p>
</div>

<div className="scroll-mt-32 space-y-4 pt-space-sm" id="seccion-3">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Capítulo Tercero</span>
<span>•</span>
<span>§ 10</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">3. El deber inmanente</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Si la vasija está rota, si el cosmos exhibe las cicatrices de la contingencia y el dolor inocente, la respuesta monoteísta universalista no es la resignación ante un misterio impenetrable ni la huida ascética hacia cielos incorpóreos. La respuesta es el trabajo de nuestras manos: el <strong className="font-semibold text-primary">Tikkún</strong>.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Cada acto de bondad desinteresada, cada estructura injusta desmantelada, cada prójimo alimentado sin pedir credenciales doctrinarias es una chispa que regresa al fuego primordial. Dios no interviene desde fuera quebrando las leyes de la física para rescatar a la humanidad de sus torpezas; Dios habita en la conciencia que rehúsa callar ante la infamia.
          </p>
</div>

<div className="scroll-mt-32 pt-space-md mt-space-md bg-surface-container-low p-space-md rounded-lg" id="seccion-bibliografia">
<h4 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">local_library</span>
            Aparato Crítico & Fuentes Canónicas
          </h4>
<ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[1]</span>
<div>
<strong className="text-primary font-semibold">Spinoza, Baruch:</strong>
<em>Ethica Ordine Geometrico Demonstrata</em>, Pars I «De Deo», Proposiciones XI a XIV. Edición de referencia: Alianza Editorial, Madrid.
              </div>
</li>
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[2]</span>
<div>
<strong className="text-primary font-semibold">Maimónides, Moisés:</strong>
<em>Guía de los Perplejos (Moré Nevujim)</em>, Parte I, Caps. L-LVIII sobre la Teología Negativa. Ed. Trotta.
              </div>
</li>
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[3]</span>
<div>
<strong className="text-primary font-semibold">Lévinas, Emmanuel:</strong>
<em>Totalidad e Infinito: Ensayo sobre la exterioridad</em>, Sección III «El rostro y la exterioridad». Ed. Sígueme.
              </div>
</li>
</ul>
</div>

<div className="pt-space-lg mt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container p-space-md rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[32px] text-secondary">arrow_back</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Tratado Anterior</span>
<span className="font-body-md text-body-md font-semibold text-primary">El Silencio Cósmico y el Salmo Racional</span>
</div>
</div>
<a className="flex items-center gap-3 text-right group" href="#">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Tratado Siguiente</span>
<span className="font-body-md text-body-md font-semibold text-primary group-hover:text-secondary transition-colors">La Ciudad Justa: Profetismo y Polis</span>
</div>
<span className="material-symbols-outlined text-[32px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</article>
</div>
</section>

<section className="w-full my-space-lg bg-surface-container-high rounded-xl p-space-lg md:p-space-xl shadow-sm relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8 flex flex-col space-y-3">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.25em]">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span>Colaboración Académica Activa</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Cuaderno Dialéctico en Construcción</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          El Monoteísmo Ético Universalista no es una revelación cerrada, sino un scriptorium continuo. Si usted investiga en los campos de la filosofía analítica, la exégesis bíblica comparada, la teología de la liberación o el pensamiento secularizado, su pluma puede formar parte de los próximos folios monográficos.
        </p>
<div className="flex items-center gap-space-md pt-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary" />
            Revisión por Pares Ciega
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary" />
            Acceso Abierto Universal
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary" />
            Indexación Canónica
          </span>
</div>
</div>
<div className="lg:col-span-4 flex flex-col space-y-3 bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<span className="font-headline-sm text-headline-sm text-primary">Enviar Propuesta de Tesis</span>
<p className="font-body-sm text-body-sm text-outline">
          Convocatoria abierta para el Cuaderno VI: «Tecnología, Algoritmo y Trascendencia».
        </p>
<a className="w-full py-3 bg-primary text-on-primary hover:bg-primary-container text-center rounded font-label-sm text-label-sm uppercase tracking-widest transition-colors font-semibold" href="#">
          Remitir Manuscrito
        </a>
<a className="w-full py-2 bg-transparent text-secondary hover:text-primary text-center font-label-sm text-label-sm uppercase tracking-widest transition-colors" href="#">
          Consultar Guía de Estilo
        </a>
</div>
</div>
</section>


</div></div></main>
  );
}
