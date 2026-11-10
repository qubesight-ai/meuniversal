import { Link } from "@tanstack/react-router";
import { HomeHero } from "@/components/HomeHero";
import ernestoFoto from "@/assets/ernesto-libby.jpg.asset.json";
import meuLogo from "@/assets/meu-logo.png.asset.json";

export function InicioContent() {
  return (
<main className="w-full min-h-screen bg-surface"><HomeHero /><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full space-y-space-xl">



<section className="w-full bg-surface-container-high rounded-sm p-space-lg">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter text-center md:text-left divide-y md:divide-y-0 md:divide-x-0">
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">1</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">One God</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Universal and indivisible, beyond our comprehension.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">6</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Philosophical principles</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">To guide reflection, not to demand conformity.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">∞</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Universal dignity</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Human dignity does not depend on religious affiliation.</span>
</div>
<div className="p-space-xs flex flex-col">
<span className="font-display-md text-display-md text-primary leading-none">0</span>
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-2">Infallible authorities</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">No one holds spiritual authority over another’s conscience.</span>
</div>
</div>
</section>

<section className="w-full space-y-space-lg pt-space-md" id="pilares">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Foundations</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">Three pillars</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        Three ideas that summarize MEU’s proposal. Each is developed in Philosophy and Theology.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Faith</span>
<h3 className="font-headline-md text-headline-md text-primary">I. Universal God</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            We affirm faith in the God of Abraham: one, universal and indivisible, whose essence surpasses our comprehension. We do not claim infallible knowledge of his will, and no religion—not even MEU—holds a monopoly on understanding him.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Faith with humility</span>

</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Thought</span>
<h3 className="font-headline-md text-headline-md text-primary">II. Critical Gnosis</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Self-knowledge and the examination of our own prejudices, including our absolutized images of God. Mature faith fears neither science nor doubt; critical thinking is a form of honesty.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Self-criticism</span>

</div>
</article>

<article className="bg-surface-container-lowest rounded-sm p-space-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase">Action</span>
<h3 className="font-headline-md text-headline-md text-primary">III. Finitude and Repair</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Life has value in itself, not as a test for another existence. Partly inspired by the Sadducees, we do not make ethics dependent on rewards after death. The commitment is repairing the world: social justice, education, solidarity and environmental care.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Repairing the world</span>

</div>
</article>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center bg-surface-container-low rounded-sm p-space-xl">
<div className="lg:col-span-5 flex justify-center py-space-md">
<img src={meuLogo.url} alt="Emblem of Universalist Ethical Monotheism: a golden four-pointed star over the Earth’s northern hemisphere, framed by a dark blue arc, with the initials MEU and the text UNIVERSALIST ETHICAL MONOTHEISM" className="w-full max-w-[340px] h-auto" loading="lazy" />
</div>
<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Traditions in dialogue</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">A proposal in dialogue with history</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
        MEU does not start from nothing: it engages in dialogue with the prophets of Israel, with Greek philosophy, with thinkers such as Maimonides and Spinoza, and with Enlightenment ethics. It presents itself not as their official heir, but as a contemporary proposal that learns from them in a critical spirit.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
<div className="bg-surface-container-lowest p-space-md rounded">
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">This life matters</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Justice and care are not postponed to another existence.</p>
</div>
<div className="bg-surface-container-lowest p-space-md rounded">
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Meeting through action</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">People of different beliefs can find common ground in justice and mutual care.</p>
</div>
</div>
</div>
</section>

<section className="w-full space-y-space-lg pt-space-md" id="tratados">
<div className="text-center max-w-2xl mx-auto space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Overview</span>
<h2 className="font-headline-lg text-headline-lg text-primary">The site’s seven sections</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
        A map of what you will find on each page, to read at your own pace.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">I</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Philosophy</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Our Philosophy
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Six principles: epistemological humility, critical gnosis, universal ethics, freedom of conscience, the value of finite life and repairing the world.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Six principles</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">II</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Theology</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Our Theology
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Six affirmations of faith, from the God of Abraham to divine universality, held with awareness of their fallibility.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Six affirmations</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">III</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">History</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Our Roots
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            The traditions with which we engage in dialogue, distinguishing sources, scholarly debate and our own proposal.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Historical rigor</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">IV</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Essay</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Reflections
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Brief reflective texts on reason, finitude and the repair of the world.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Food for thought</span>

</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">V</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase tracking-wider">Dialogue</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
            Frequently Asked Questions
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Answers to the most common questions about MEU, its faith and its way of living together.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Common questions</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">VI</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Ethics</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Our Commitment
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Voluntary participation, freedom of conscience and the absence of infallible spiritual authorities. Includes our two declarations.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Living together freely</span>

</div>
</div>

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-sm transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-display-md text-display-md text-secondary leading-none">VII</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded uppercase tracking-wider">Practice</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
            Repairing the World
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            Repairing the world through concrete actions: social justice, education, solidarity and environmental care.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary font-medium">Repairing the world</span>

</div>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center bg-surface-container-low rounded-sm p-space-xl" id="fundador">
<div className="lg:col-span-4 flex justify-center lg:justify-start">
<img src={ernestoFoto.url} alt="Ernesto Libby Lugo, Founder of Universalist Ethical Monotheism" className="w-full max-w-xs rounded-lg object-cover" loading="lazy" />
</div>
<div className="lg:col-span-8 flex flex-col space-y-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">The Founder</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary">A philosophy born of questions</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
        “Universalist Ethical Monotheism arose from two concerns: to question certain traditional interpretations of God, death and the purpose of our existence, and to explore a spirituality that finds its meaning in living responsibly and repairing the world”.
      </p>
<blockquote className="pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          “I did not found MEU because I believed I had found all the answers. I founded it because I believe there are questions that deserve to be asked freely”.
        </p>
</blockquote>
<div className="flex flex-col space-y-1">
<span className="font-headline-sm text-headline-sm text-primary">Ernesto Libby Lugo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Founder of Universalist Ethical Monotheism (MEU)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Creator of the Ateneo de la Vida Interior (ATENEUM)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Costa Rica, 2026</span>
</div>
<div className="border-t border-outline-variant pt-space-md space-y-space-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Ateneo de la Vida Interior (ATENEUM)</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
In addition to founding Universalist Ethical Monotheism, Ernesto Libby Lugo created the Ateneo de la Vida Interior (ATENEUM), an independent initiative dedicated to interreligious dialogue, spiritual exploration, critical thinking and respectful encounters among people of different beliefs and convictions.
</p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
While MEU develops its own philosophical-theological proposal, the Ateneo seeks to offer a pluralistic space for reflection, without imposing any particular religious doctrine.
</p>
<a href="https://ateneum.world/" className="inline-flex font-body-md text-body-md text-secondary underline underline-offset-4 hover:text-primary transition-colors">Discover ATENEUM</a>
</div>
<div className="pt-2">
<Link to="/carta-del-fundador" className="inline-flex items-center px-6 py-3 rounded bg-secondary text-on-secondary hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider transition-colors">
          Read the Founder's Letter
        </Link>
</div>
</div>
</section>

<section className="w-full text-on-surface rounded-sm p-space-xl relative overflow-hidden border-y border-outline-variant">



<div className="relative z-10 max-w-3xl mx-auto text-center space-y-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-secondary font-label-sm text-label-sm uppercase tracking-widest border-y border-outline-variant">

<span>Open dialogue</span>
</div>
<blockquote className="space-y-space-sm">
<p className="font-display-md text-display-md leading-tight italic font-normal text-on-surface-variant">
          No one possesses truth as private property. No religion holds a monopoly on understanding God, and justice belongs to all who seek it.
        </p>
</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto pt-2">
        Believers, seekers, philosophers and skeptics are welcome to read, ask questions and disagree.
      </p>
<div className="pt-4 flex flex-wrap justify-center gap-space-sm">
<Link to="/nuestra-filosofia" className="px-6 py-3 rounded bg-secondary text-on-secondary hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider transition-colors">
          Read our philosophy
        </Link>
<Link to="/preguntas-frecuentes" className="px-6 py-3 rounded bg-transparent text-on-surface-variant hover:bg-surface-container font-label-md text-label-md uppercase tracking-wider transition-colors">
          Frequently Asked Questions
        </Link>
</div>
</div>
</section>
</div></div></main>
  );
}
