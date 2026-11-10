import { Link } from "@tanstack/react-router";

export function ReflexionesContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="flex flex-col w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-md">
<div className="flex flex-col space-y-2">
<div className="flex items-center gap-space-xs text-secondary">

<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">MEU Texts</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Reflections</h1>
<p className="font-aphorism text-aphorism text-on-surface-variant italic max-w-2xl">
          “Think freely. Question deeply. Live consciously.”
        </p>
</div>

</div>

<div className="bg-surface-container-low p-space-sm rounded-sm flex flex-col gap-space-sm">
<div className="relative w-full">

<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded font-body-md text-body-md placeholder:text-outline focus:outline-none transition-all" id="search-input" placeholder="Search by topic or term..." type="text" />
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-outline font-label-sm text-label-sm pointer-events-none">
<kbd className="px-2 py-0.5 bg-surface-container-high rounded text-[11px]">⌘</kbd>
<kbd className="px-2 py-0.5 bg-surface-container-high rounded text-[11px]">K</kbd>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" id="filter-container">
<button className="filter-chip active-filter px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-primary text-on-primary transition-all duration-200" data-filter="all">All</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="filosofia">Philosophy</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="teologia">Theology</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="etica">Universal Ethics</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="historia">History of Religions</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="gnosis">Critical Gnosis</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="vida-muerte">Life and Death</button>
<button className="filter-chip px-3.5 py-1.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all duration-200" data-filter="tikkun">Tikkún Olám</button>
</div>
</div>
</section>

<section className="w-full my-space-md bg-surface-container-lowest rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">

<div className="lg:col-span-12 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
<div className="flex flex-col space-y-4">
<div className="flex items-center justify-between">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-sm text-label-sm uppercase tracking-widest font-semibold">Featured reflection</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
          The limit of understanding and the inner Demiurge
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          A reflection by MEU on the limits of our knowledge of God, the temptation to absolutize our own ideas and the responsibility to repair the world.
        </p>

</div>
<div className="pt-space-lg flex flex-wrap items-center gap-space-sm">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary hover:bg-primary-container rounded font-label-md text-label-md uppercase tracking-widest transition-all duration-300 group" href="#lectura-inmersiva">
<span>Read the reflection</span>

</a>

</div>
</div>
</section>

<section className="w-full my-space-xl flex flex-col space-y-space-md">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-1">

<span>Topics in preparation</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Upcoming reflections</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md text-right md:text-left">
        Topics on which MEU is preparing texts. They have not yet been published.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" id="essays-grid">

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Universal Ethics</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 8 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            The face of the other: Lévinas and responsibility
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            A reading of Lévinas’s ethics and of what it can contribute to responsibility toward one’s neighbor.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">In preparation</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Open Thesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Theology</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 14 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            Spinoza and the critique of images of God
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            What we can learn from his critique of anthropomorphism, and where MEU departs from his conception of God.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">In preparation</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Open Thesis</span>
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
            Environmental care and responsibility
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Care for nature as part of Tikkun Olam.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">In preparation</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Open Thesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-md transition-all duration-300 flex flex-col justify-between group">
<div className="flex flex-col space-y-3">
<div className="flex items-center justify-between">
<span className="bg-surface-container px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary">Critical Gnosis</span>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
 16 min
            </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
            When doctrine becomes absolute
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Critical gnosis applied to our own formulations before those of others.
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline tracking-wider">In preparation</span>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold hover:text-secondary transition-colors">
<span>Open Thesis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
</div>
</section>

<section className="w-full my-space-xl pt-space-lg bg-surface-container-low/60 rounded-sm p-space-md md:p-space-xl" id="lectura-inmersiva">
<div className="mb-space-lg max-w-[840px]">

<h2 className="font-display-md text-display-md text-primary leading-tight">
        The limit of understanding and the inner Demiurge
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        A reflection by MEU. Like all our work, it is a proposal open to criticism.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<aside className="lg:col-span-4 sticky top-28 space-y-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-sm">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-4">
            Contents
          </span>
<nav className="flex flex-col space-y-3 font-body-sm text-body-sm" id="toc-nav">
<a className="toc-link flex items-center justify-between text-primary font-medium p-2 rounded bg-surface-container transition-colors" href="#seccion-1">
<span>1. The limit of understanding</span>

</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-2">
<span>2. The trap of dogmatism</span>

</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-3">
<span>3. Immanent duty</span>

</a>
<a className="toc-link flex items-center justify-between text-on-surface-variant hover:text-primary p-2 rounded transition-colors" href="#seccion-bibliografia">
<span>Suggested reading</span>

</a>
</nav>
</div>

<div className="bg-surface-container p-space-md rounded-sm flex flex-col space-y-2">
<div className="flex items-center gap-1.5 text-secondary">

<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Food for thought</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
            Perhaps the most honest faith is not one that multiplies certainties, but one that leaves each conscience facing the responsibility of compassion.
          </p>

</div>

<div className="flex items-center justify-between px-2 text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Text size</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-sm hover:bg-surface-container-high transition-colors" id="font-decrease">A-</button>
<button className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-base hover:bg-surface-container-high transition-colors" id="font-increase">A+</button>
</div>
</div>
</aside>

<article className="lg:col-span-8 max-w-[720px] bg-surface-container-lowest p-space-lg md:p-space-xl rounded-sm flex flex-col space-y-space-md" id="essay-content">

<div className="scroll-mt-32 space-y-4" id="seccion-1">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Part 1</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">1. The limit of understanding</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Dogmatism begins when we confuse our provisional map with the territory. Biblical traditions already warned against images that claim to fix the divine in place. That risk does not disappear with statues: we can also fashion conceptual images of God to suit ourselves, and then defend them as though they were God himself.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Acknowledging the limits of our knowledge is not paralyzing skepticism. Maimonides, for example, maintained that we can say with greater certainty what God <em className="italic">is not</em> than what he is. Without adopting his entire system, MEU shares that caution: speaking of God with humility.
          </p>
</div>

<div className="scroll-mt-32 space-y-4 pt-space-sm" id="seccion-2">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Part 2</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">2. The trap of dogmatism</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Immediate certainty is attractive: it frees us from the discomfort of doubt. But when a doctrine offers security in exchange for ceasing to think, it takes something valuable away from the person: responsibility for their own judgment.
          </p>

<figure className="my-space-md p-space-md md:p-space-lg text-on-surface rounded-sm relative overflow-hidden border-y border-outline-variant">

<blockquote className="font-aphorism text-aphorism italic text-primary leading-relaxed relative z-10">
              “We do not do good to deserve another life; we do good because life itself is the only place where justice is possible.”
            </blockquote>
</figure>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            When good is done only out of fear of punishment or desire for a reward, the motivation shifts from the suffering person to oneself. We propose doing good because of the value of life and of others.
          </p>
</div>

<div className="scroll-mt-32 space-y-4 pt-space-sm" id="seccion-3">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span>Part 3</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">3. Immanent duty</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Faced with the world’s suffering and injustice, MEU proposes neither resignation nor flight, but the work of our hands: <strong className="font-semibold text-primary">Tikkun Olam</strong>, the practical repair of the world.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Every act of selfless kindness, every injustice corrected, every person helped without asking what they believe, is a form of repair. We do not know with certainty how God acts in the world; we do know what we ourselves can do.
          </p>
</div>

<div className="scroll-mt-32 pt-space-md mt-space-md bg-surface-container-low p-space-md rounded-sm" id="seccion-bibliografia">
<h4 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">

            Suggested reading
          </h4>
<ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[1]</span>
<div>
<strong className="text-primary font-semibold">Spinoza, Baruch:</strong>
<em>Ética demostrada según el orden geométrico</em>, Part I.
              </div>
</li>
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[2]</span>
<div>
<strong className="text-primary font-semibold">Maimónides, Moisés:</strong>
<em>Guía de perplejos</em>, Part I, on negative attributes.
              </div>
</li>
<li className="flex items-start gap-2">
<span className="font-label-sm text-secondary font-bold">[3]</span>
<div>
<strong className="text-primary font-semibold">Lévinas, Emmanuel:</strong>
<em>Totalidad e infinito</em>, Section III.
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

<span>Open dialogue</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">A proposal under construction</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Universalist Ethical Monotheism is not a closed revelation, but a proposal that is revised and grows through dialogue. Questions, criticisms and reasoned disagreements are welcome.
        </p>

</div>
<div className="lg:col-span-4 flex flex-col space-y-3 bg-surface-container-lowest p-space-md rounded-sm">
<span className="font-headline-sm text-headline-sm text-primary">Continue reading</span>
<Link to="/preguntas-frecuentes" className="w-full py-3 bg-primary text-on-primary hover:bg-primary-container text-center rounded font-label-sm text-label-sm uppercase tracking-widest transition-colors font-semibold">
          Frequently Asked Questions
        </Link>
<Link to="/nuestra-filosofia" className="w-full py-2 bg-transparent text-secondary hover:text-primary text-center font-label-sm text-label-sm uppercase tracking-widest transition-colors">
          Our Philosophy
        </Link>
</div>
</div>
</section>


</div></div></main>
  );
}
