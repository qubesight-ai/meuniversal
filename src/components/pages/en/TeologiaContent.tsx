import { Link } from "@tanstack/react-router";

const NAV = [
  { href: "#hashem", n: "I.", label: "The God of Abraham" },
  { href: "#demiurgo", n: "II.", label: "The Symbolic Demiurge" },
  { href: "#jesus", n: "III.", label: "Jesus of Nazareth" },
  { href: "#muerte-alma", n: "IV.", label: "Death and Soul" },
  { href: "#proposito", n: "V.", label: "Purpose of Creation" },
  { href: "#universalidad", n: "VI.", label: "Divine Universality" },
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
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">What We Affirm: Our Theology</h1>
<p className="font-headline-sm text-headline-sm text-secondary font-normal mt-space-xs max-w-3xl">
          Six affirmations of faith, held with conviction and awareness of their fallibility.
        </p>
</div>
</div>
</header>

<section className="mb-space-xl bg-surface-container-high rounded-sm p-space-lg relative overflow-hidden">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">How to read this page</span>
<p className="font-body-md text-body-md text-on-surface leading-relaxed mt-1">
          These positions are MEU’s own synthesis. They do not speak on behalf of the Jewish, Christian, or Islamic tradition, nor do they claim to demonstrate the nature of God exhaustively. They are convictions of faith and reflection that each person may examine, discuss, or reject.
        </p>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<aside className="lg:col-span-4 sticky top-28 self-start">
<div className="bg-surface-container-lowest rounded-sm p-space-md">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low p-space-sm rounded">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Six affirmations</span>
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
<span>Reading progress</span>
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
<p className={`${eyebrow} mb-space-md`}>Affirmation I</p>
<h2 className={h2}>I. The God of Abraham</h2>
<div className={bodyWrap}>
<p>
            We affirm faith in a single, universal, indivisible God, whose essence exceeds our understanding. We do not claim to demonstrate his nature exhaustively or to know his will infallibly.
          </p>
<p>
            We speak of the “God of Abraham” to name the one God recognized in the heritage that traces back to the figure of Abraham. The expression indicates a shared historical root, not an identical theology: Judaism, Christianity, and Islam have developed distinct, and often divergent, understandings of that same monotheistic horizon. Using it does not imply belonging to any of those traditions or abandoning one’s own.
          </p>
<p>
            We therefore prefer to speak of God with restraint. Every human image or concept of the divine is limited, and acknowledging this is part of faith, not its negation.
          </p>
</div>
</article>

<article className={art} id="demiurgo">
<p className={`${eyebrow} mb-space-md`}>Affirmation II</p>
<h2 className={h2}>II. The symbolic Demiurge</h2>
<div className={bodyWrap}>
<p>
            There is no second creator god. We take the word “Demiurge” as a symbol: it represents our human tendency to absolutize our own interpretations and confuse them with God’s will.
          </p>
<p>
            The Demiurge is, above all, a tool of self-criticism. It asks us when we have turned our ideas, institutions, or interests into an absolute. It is not a label for discrediting other religions or judging anyone’s faith.
          </p>
</div>
</article>

<article className={art} id="jesus">
<p className={`${eyebrow} mb-space-md`}>Affirmation III</p>
<h2 className={h2}>III. Jesus of Nazareth</h2>
<div className={bodyWrap}>
<p>
            We regard Jesus of Nazareth as a wise and righteous Jew, fully human, exceptionally valuable for his ethical teachings: love of one’s neighbor, care for the excluded, and consistency between word and action.
          </p>
<p>
            In our interpretation, he is neither God, nor the Messiah, nor a prophet. His relationship to the Jewish currents of his time is a matter of scholarly debate, and we do not assert as an established fact that he belonged to a particular school.
          </p>
<p>
            We do not rule out the possibility that his teachings had divine inspiration; but possible inspiration does not imply infallibility. His words, like those of any teacher, may be studied and interpreted critically.
          </p>
</div>
</article>

<article className={art} id="muerte-alma">
<p className={`${eyebrow} mb-space-md`}>Affirmation IV</p>
<h2 className={h2}>IV. Death and soul</h2>
<div className={bodyWrap}>
<p>
            We maintain a contemporary position partially inspired by the Sadducees, a Jewish group of the Second Temple period that, according to ancient sources, did not accept resurrection. We do not present this interpretation as a definitive historical reconstruction of what they believed.
          </p>
<p>
            We do not affirm individual immortality, resurrection, a final judgment, or rewards or punishments after death. Faced with what we do not know, we prefer restraint to speculation.
          </p>
</div>
<div className="my-space-lg p-space-lg lg:p-space-xl bg-surface-container-high rounded-sm">
<p className="font-headline-md text-headline-md text-primary leading-snug font-semibold">
            “We do not do good to deserve another life. We do good because this life matters.”
          </p>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Finitude does not diminish life’s value; it gives weight to every decision and every bond.
          </p>
</div>
</article>

<article className={art} id="proposito">
<p className={`${eyebrow} mb-space-md`}>Affirmation V</p>
<h2 className={h2}>V. Purpose of creation</h2>
<div className={bodyWrap}>
<p>
            We believe that life was created to be lived and valued for its own sake, not as a test to obtain another existence.
          </p>
<p>
            We expressly acknowledge that this interpretation of divine intention is a conviction of faith and, as such, fallible. We do not claim to know God’s purposes with certainty; we express what, in the light of our reflection, seems to us most consistent with a good God.
          </p>
</div>
<div className={box}>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            From this conviction follows the commitment to repairing the world: caring for life, justice, and nature here and now.
          </p>
</div>
</article>

<article className={art} id="universalidad">
<p className={`${eyebrow} mb-space-md`}>Affirmation VI</p>
<h2 className={h2}>VI. Divine universality</h2>
<div className={bodyWrap}>
<p>
            No religion has a monopoly on understanding the God of Abraham, nor does MEU. Human dignity does not depend on religious affiliation.
          </p>
<p>
            We respect other traditions and spiritual experiences and learn from them, without claiming that all their doctrines are equivalent or that ours are superior. Honest dialogue includes recognizing both common ground and differences.
          </p>
</div>
</article>

<section className="mt-space-xl p-space-xl rounded-sm bg-surface-container-low">
<div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="space-y-space-xs max-w-xl">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Next page</span>
<h3 className="font-headline-lg text-headline-lg text-primary">Our Roots</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              The historical traditions with which we engage in dialogue, distinguishing what the sources say, what is debated academically, and what MEU proposes today.
            </p>
</div>
<Link to="/nuestras-raices" className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md uppercase tracking-wider transition-colors flex-shrink-0">
Go to Our Roots
</Link>
</div>
</section>
</div>
</div>
</div>
</div></main>
  );
}
