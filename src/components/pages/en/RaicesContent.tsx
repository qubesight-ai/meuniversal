import { Link } from "@tanstack/react-router";

export function RaicesContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-space-md">
<div className="flex flex-col max-w-3xl">

<h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-none mb-space-sm">Our Roots</h1>
<p className="font-headline-md text-headline-md text-secondary italic font-serif">Traditions with which we engage in dialogue, read with historical rigor.</p>
</div>
<div className="flex flex-col items-start md:items-end text-left md:text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Historical-critical reading</span>
</div>
</div>

<div className="relative w-full rounded-sm overflow-hidden mt-space-sm">

<div className="flex items-end p-space-lg">
<div className="max-w-2xl">
<p className="font-aphorism text-aphorism italic text-on-surface">We do not start from nothing: we engage in dialogue with ancient and modern traditions, without attributing to them ideas they did not hold.</p>
</div>
</div>
</div>
</section>

<section className="w-full mt-space-md mb-space-xl">
<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col lg:flex-row items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm max-w-2xl">

<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">Three levels of reading</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            In each tradition we distinguish what the historical sources allow us to affirm, what is a matter of debated scholarly interpretation, and what MEU adopts or reinterprets as a contemporary proposal. These traditions are interlocutors, not authorities.
          </p>
</div>
</div>

<div className="flex items-center gap-2 bg-surface-container-high p-1.5 rounded-sm shrink-0">
<button className="px-3.5 py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200" id="btn-view-all" data-root-filter="all">
          All
        </button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200" id="btn-view-prophetic" data-root-filter="antiguedad">
          Biblical Root
        </button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200" id="btn-view-modern" data-root-filter="critica">
          Critical Convergence
        </button>
</div>
</div>
</section>

<section className="w-full flex flex-col gap-space-lg mb-space-xl">

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">I</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">2nd century BCE – 1st century CE</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">The Sadducees</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Second Temple Period</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              A Jewish group associated with the priestly elite of the Temple in Jerusalem. The ancient sources—Flavius Josephus and the New Testament—agree that they did not accept the resurrection of the dead. No writings by the Sadducees themselves have survived, so much of their thought is known only through authors outside their group and remains a subject of scholarly debate.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Sources: Flavio Josefo, Antigüedades judías XVIII; Mark 12:18; Acts 23:8.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              MEU draws partial inspiration from this attitude to formulate a contemporary position: not to affirm individual immortality, resurrection, or rewards or punishments after death. This is its own reinterpretation, not a reconstruction of what the Sadducees believed.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Partial inspiration, not identity
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">II</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">8th–6th centuries BCE</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Prophets of Israel</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-medium">Social justice</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The books attributed to Amos, Isaiah, and Micah criticize worship divorced from justice and call for protection for the orphan, the widow, and the stranger. The dating and composition of these books are subjects of scholarly study; many texts took shape over several generations.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            “What does the Lord require of you but to do justice, love mercy, and walk humbly?” (Micah 6:8)
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              We draw a central idea from this tradition: spiritual life cannot be separated from justice toward vulnerable people. Ritual has value for those who practice it, but it does not replace ethical responsibility.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Ethics at the center
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">III</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">1st century CE</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Jesus of Nazareth</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Jewish sage</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Historians agree that Jesus was a first-century Jew from Galilee who taught and was executed by the Roman authorities. The Gospels portray him debating the Law with other Jewish teachers and being close to the marginalized. His precise relationship with the Pharisees, the school of Hillel, or other currents is debated and cannot be asserted as an established fact.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            “The Sabbath was made for humankind, and not humankind for the Sabbath” (Mark 2:27)
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              MEU regards him as a wise and righteous Jew, fully human, valuable for his ethical teachings. In our interpretation he is not God, Messiah, or prophet. We respect the fact that other traditions understand him differently.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Ethical teacher, not divine
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">IV</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Rabbinic tradition</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Noahidism and the Universal Covenant</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Universalism</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Rabbinic literature formulates seven laws for all humanity (<em className="italic">Sheva Mitzvot Bnei Noaj</em>). In that tradition, non-Jewish people who observe them are considered righteous without needing to convert to Judaism. Their scope and interpretation have varied across authors and periods.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Talmud Babli: Sanedrín 56a; Maimónides, Hiljot Melajim 8:11.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              We are inspired by the idea that righteousness does not depend on belonging to a particular people or religion. MEU does not adopt the Noahide system as its own norm; it draws on its universalist intuition.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Righteousness without conversion
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">V</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">2nd–4th centuries CE</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Gnosticism and critical gnosis</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Self-criticism</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The name “Gnosticism” encompasses highly diverse currents from the early centuries. Several of their texts, preserved at Nag Hammadi among other places, describe an inferior Demiurge distinct from the supreme God. The very term “Gnosticism” is now debated by scholars because it groups together heterogeneous movements.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Sources: Nag Hammadi codices; reference study: Hans Jonas, La religión gnóstica.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              MEU does not adopt Gnostic cosmology or its negative view of matter. It reinterprets the Demiurge as a symbol of our tendency to absolutize our own interpretations, and gnosis as critical self-knowledge. This is a contemporary rereading, not a historical continuity.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Symbolic rereading
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">VI</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">16th century – present</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Tikkun Olam</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-medium">Repairing the world</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The expression appears in ancient rabbinic sources with a legal and social meaning. In the 20th century, especially in liberal Judaism, it came to denote a commitment to social justice.
            </p>
</div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              MEU understands Tikkun Olam as the practical repair of the world: social justice, education, solidarity, and environmental care. We do not adopt any cosmology as obligatory.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Practical commitment
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">VII</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">19th–21st centuries</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Reform Judaism</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Tradition in dialogue</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Sources and scholarly debate</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Emerging in 19th-century Germany, with figures such as Abraham Geiger, Reform Judaism understood tradition as something that evolves historically. The Pittsburgh Platform (1885) emphasized the ethical dimension of Judaism over certain ritual norms. Its positions have changed considerably over time, and it does not represent all of Judaism.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Sources: Pittsburgh (1885) and Columbus (1937) Platforms.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MEU's proposal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              We value its idea that tradition can be read critically and in dialogue with science and human rights. MEU is not part of Reform Judaism and does not speak on its behalf.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Modern interlocutor
          </div>
</div>
</div>
</article>
</section>

<section className="w-full bg-surface-container-high rounded-sm p-space-lg md:p-space-xl mb-space-xl">
<div className="max-w-3xl mb-space-lg">
<h3 className="font-display-md text-display-md text-primary tracking-tight">What we retain and what we do not share</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
        A summary of what MEU draws from these traditions and what, out of its own convictions, it sets aside. This is our reading, not a judgment on those who think differently.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="bg-surface-container-lowest rounded-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 pb-space-sm mb-space-md">

<h4 className="font-headline-sm text-headline-sm text-primary">What we retain and honor</h4>
</div>
<ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Faith in one God:</strong> universal and indivisible, whose essence exceeds our understanding.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Repairing the world:</strong> practical commitment to justice, education, solidarity, and environmental care.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Study and dialogue:</strong> horizontal deliberation and respectful disagreement.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Care for the vulnerable:</strong> the prophetic heritage that places those who suffer at the center of ethical duty.
              </div>
</li>
</ul>
</div>
<div className="mt-space-lg pt-space-sm">

</div>
</div>

<div className="bg-surface-container-low rounded-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 pb-space-sm mb-space-md">

<h4 className="font-headline-sm text-headline-sm text-primary">What we do not share</h4>
</div>
<ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Exclusion based on belonging:</strong> the idea that dignity or righteousness depends on origin, lineage, or religion.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Morality based on fear:</strong> doing good out of fear of punishment or desire for rewards after death.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">The literal and infallible reading of texts:</strong> reading them without regard for their historical context or ethical conscience.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Infallible spiritual authorities:</strong> no one holds spiritual authority over another person's conscience.
              </div>
</li>
</ul>
</div>
<div className="mt-space-lg pt-space-sm">

</div>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest rounded-sm p-space-md flex flex-col justify-between">
<div className="w-full h-44 rounded-sm overflow-hidden mb-space-sm relative">


</div>
<div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">First-century Judaism</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Historical research reveals a diverse Judaism, with currents that debated one another. Understanding that context helps us read Jesus without anachronisms.
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">


</div>
</div>

<div className="bg-surface-container-lowest rounded-sm p-space-md flex flex-col justify-between">
<div className="w-full h-44 rounded-sm overflow-hidden mb-space-sm relative">


</div>
<div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">Maimonides & Spinoza</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Two thinkers who, with very different conclusions, criticized anthropomorphic images of God. We read them as interlocutors, not as authorities.
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">


</div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center justify-between mb-space-xs">


</div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-space-xs">A contemporary proposal</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          MEU does not claim to be the historical continuation of any of these traditions. It is a contemporary, fallible philosophical proposal that engages in dialogue with them.
        </p>


</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary">

</div>
</div>
</section>

<section className="w-full bg-surface-container-low rounded-sm p-space-lg md:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Next page</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">Reflections</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
        Reflective texts by MEU on reason, finitude, and repairing the world.
      </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<Link to="/reflexiones" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary-container transition-colors duration-200">
<span>Read reflections</span>

</Link>
<Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md tracking-wider uppercase transition-colors duration-200">
<span>Home</span>
</Link>
</div>
</section>
</div>
</div></main>
  );
}
