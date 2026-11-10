import { Link } from "@tanstack/react-router";

const PRINCIPLES = [
  { id: "tesis-01", n: "01", nav: "Epistemological humility and critical reason" },
  { id: "tesis-02", n: "02", nav: "Critical gnosis" },
  { id: "tesis-03", n: "03", nav: "Rational universal ethics" },
  { id: "tesis-04", n: "04", nav: "Freedom of conscience and dissent" },
  { id: "tesis-05", n: "05", nav: "Intrinsic value of finite life" },
  { id: "tesis-06", n: "06", nav: "Tikkun Olam: repairing the world" },
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
          Our Philosophy: six principles for thinking and living
        </h1>
</div>
</div>

<div className="p-space-lg rounded-sm bg-surface-container-low flex flex-col md:flex-row gap-space-lg items-center justify-between">
<p className="font-body-lg text-body-lg text-on-surface max-w-3xl leading-relaxed">
        Universalist Ethical Monotheism is an open philosophical proposal. It does not ask for blind adherence: it invites us to examine honestly what we believe, to live responsibly and to care for the world we share. These six principles guide that search; they do not close it.
      </p>
</div>
</section>

<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mt-space-md">

<aside className="lg:col-span-4 xl:col-span-3">
<div className="sticky top-28 flex flex-col p-space-md bg-surface-container-lowest rounded-sm space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Principles</span>
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
<span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary">Reading criterion</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Every teaching presented here may be examined, discussed or rejected.
          </p>
</div>

<div className="pt-2 flex flex-col space-y-1">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Reading progress</span>
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
<span className={eyebrow}>Principle I</span>
<h2 className={h2}>01. Epistemological humility, reason and critical thinking</h2>
<p className={lead}>
          Our knowledge is limited. About God, about the world and about ourselves, we know less than we would like, and often less than we think. Acknowledging this weakens neither faith nor reflection: it makes them honest.
        </p>
<p className={lead}>
          We understand the God of Abraham as the transcendent universal principle and foundation of existence, without claiming to confine him within human images or definitions. This is a conviction of faith, not a scientific demonstration.
        </p>
<p className={body}>
          That is why reason and critical thinking hold a central place. Each person is responsible for examining every teaching for themselves, including those of this philosophy. Thinking critically is not a threat to conviction, but a condition of its authenticity. We prefer a modest and open conviction to a certainty that admits no questions.
        </p>
<p className={body}>
          We distinguish empirical knowledge from metaphysical convictions: religious claims that can be tested must be subjected to evidence, and faith cannot invalidate scientific discoveries.
        </p>
</article>

<article className={article} id="tesis-02">
<span className={eyebrow}>Principle II</span>
<h2 className={h2}>02. Critical gnosis: knowing oneself so as not to absolutize oneself</h2>
<p className={lead}>
          We understand gnosis not as secret knowledge reserved for initiates, but as a task of self-knowledge: examining our prejudices, acknowledging our interests and noticing when we turn our own ideas into absolutes.
        </p>
<p className={body}>
          This includes our representations of God. Every human image of the divine is partial. Critical gnosis invites us to question the versions of God that we have absolutized—including our own—before judging those of others.
        </p>
<div className={note}>
<p className="font-body-sm text-body-sm leading-relaxed">
<strong className="font-semibold text-primary">Relation to the Demiurge:</strong> in our theology, the Demiurge is a symbol of that human tendency to absolutize one’s own interpretations. It is a tool for self-criticism, not a label for discrediting other religions.
          </p>
</div>
</article>

<article className={article} id="tesis-03">
<span className={eyebrow}>Principle III</span>
<h2 className={h2}>03. Rational universal ethics</h2>
<p className={lead}>
          We uphold an ethics that can be understood and shared by anyone, regardless of their religion or lack thereof. Its central concerns are the dignity of every human being, justice, compassion and responsibility for the consequences of our actions.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-sm">
<div className="p-space-md bg-surface-container-low rounded-sm flex flex-col space-y-2">
<span className="font-headline-sm text-headline-sm text-primary">Dignity and justice</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              No person is worth less because of their origin, belief, gender, sexual orientation, gender identity or condition. LGBTQ+ people participate on equal terms; their identities and loving relationships, including same-sex marriages, are equally worthy and legitimate.
            </p>
</div>
<div className="p-space-md bg-surface-container-high rounded-sm flex flex-col space-y-2">
<span className="font-headline-sm text-headline-sm text-primary">Compassion and responsibility</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Good intentions are not enough: we are responsible for the actual effects of what we do and what we fail to do.
            </p>
</div>
</div>
</article>

<article className={article} id="tesis-04">
<span className={eyebrow}>Principle IV</span>
<h2 className={h2}>04. Freedom of conscience, interpretation, thought and dissent</h2>
<p className={lead}>
          No human being holds spiritual authority over another’s conscience. Each person is free to think, to interpret texts and traditions, and to disagree, including with this philosophy.
        </p>
<p className={body}>
          Reasoned disagreement is not a threat to be grudgingly tolerated, but a legitimate part of the shared search. A community that does not allow dissent ceases to be a space for thought. We reject supernatural threats, coercive guilt and any religious manipulation; psychological well-being alone does not prove the truth of a belief either.
        </p>
</article>

<article className={article} id="tesis-05">
<span className={eyebrow}>Principle V</span>
<h2 className={h2}>05. The intrinsic value of finite life</h2>
<p className={lead}>
          Life has value in itself, not as a means of obtaining another existence. Living, loving, learning and enjoying life responsibly are legitimate ways of inhabiting the world.
        </p>
<p className={body}>
          Acknowledging that our life is finite leads not to discouragement, but to greater attentiveness: to people, to the time we share and to the consequences of our decisions. We recognize the goodness, justice, compassion and inner beauty of all people; if we speak of “soul”, we do so poetically, without affirming an immortal soul.
        </p>
<blockquote className="pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
            “We do not do good to deserve another life. We do good because this life matters.”
          </p>
</blockquote>
</article>

<article className={article} id="tesis-06">
<span className={eyebrow}>Principle VI</span>
<h2 className={h2}>06. Tikkun Olam: the practical repair of the world</h2>
<p className={lead}>
          Tikkun Olam means “repair of the world”. For MEU, it translates into concrete actions: social justice, education, solidarity and care for the environment.
        </p>
<p className={body}>
          The expression comes from Jewish tradition, where it has had diverse meanings throughout history. We do not adopt any cosmology as obligatory: what is essential is the practical commitment to leaving the world better than we found it.
        </p>
</article>

<section className="mt-space-xl p-space-xl rounded-sm text-on-surface relative overflow-hidden border-y border-outline-variant">
<div className="relative z-10 flex flex-col space-y-space-md">
<span className="font-label-sm text-label-sm tracking-[0.25em] uppercase font-semibold text-secondary">Next page</span>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="flex flex-col space-y-2 max-w-2xl">
<h2 className="font-display-md text-display-md text-on-surface-variant tracking-tight">
                Our Theology: six affirmations of faith
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2">
                What we affirm about the God of Abraham, the symbolic Demiurge, Jesus of Nazareth, death, the purpose of life and divine universality, and with what degree of certainty.
              </p>
</div>
<Link to="/nuestra-teologia" className="shrink-0 px-6 py-3.5 rounded bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 font-label-md text-label-md uppercase tracking-wider flex items-center gap-3 group">
<span>Continue to Theology</span>
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
