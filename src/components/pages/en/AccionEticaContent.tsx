const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const lead = "font-body-lg text-body-lg text-on-surface leading-relaxed";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const section = "flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const label = "font-semibold text-primary";
const quote = "pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg";
const aphorism = "font-aphorism text-aphorism text-primary italic leading-relaxed";

type Area = {
  title: string;
  fundamento: string;
  precision?: string;
  problema: string;
  acciones: string[];
  preguntas: string[];
};

const AREAS: Area[] = [
  {
    title: "1. Education and critical thinking",
    fundamento: "Freedom of conscience needs people capable of thinking for themselves. Without access to knowledge and the tools to evaluate it, freedom becomes fragile.",
    problema: "Misinformation, lack of access to quality education, and the difficulty of engaging in dialogue with those who think differently.",
    acciones: [
      "Share what you know: teach a skill, help someone with their studies, support adult literacy.",
      "Verify information before sharing it, and explain to others how to do so.",
      "Organize or participate in spaces for reading and conversation where different positions are heard.",
      "Periodically review your own opinions in light of opposing arguments.",
    ],
    preguntas: [
      "When did I last change my mind because of a good argument?",
      "With whom do I find it difficult to engage in dialogue, and why?",
    ],
  },
  {
    title: "2. Social justice",
    fundamento: "If all people have equal dignity, inequalities that depend on circumstances they did not choose demand a response.",
    problema: "Exclusion based on origin, gender, economic circumstances, disability, belief, or other reasons, and the lack of real opportunities for many people.",
    acciones: [
      "Treat everyone with equal respect in everyday and professional interactions.",
      "Learn about inequalities in your own surroundings before expressing opinions about them.",
      "Support, with time or resources, credible local initiatives that expand opportunities.",
      "Exercise civic rights—voting, participating, reporting abuses—in an informed way.",
    ],
    preguntas: [
      "What advantages do I have that I did not choose?",
      "Whom am I failing to see in my surroundings?",
    ],
  },
  {
    title: "3. Solidarity and accompaniment",
    fundamento: "Compassion is demonstrated not through declarations but through presence. Helping those who suffer is a duty that does not depend on their beliefs or ours.",
    problema: "Loneliness, illness, poverty, forced migration, and other situations of vulnerability.",
    acciones: [
      "Spend time with older people, those who are ill, or those who are alone in our surroundings.",
      "Offer concrete help—time, listening, practical support—to someone going through a crisis.",
      "Collaborate with existing aid initiatives in your own community, first verifying their credibility.",
      "Help without asking for anything in return, and never as a form of proselytism.",
    ],
    preguntas: [
      "Who around me needs company but does not ask for it?",
      "Do I help while expecting recognition?",
    ],
  },
  {
    title: "4. Nature and environmental responsibility",
    fundamento: "We are responsible for the consequences of our actions, including those that will affect people not yet born. The life we value depends on ecosystems that we can damage or protect.",
    problema: "Environmental degradation, biodiversity loss, and climate change, which affect the most vulnerable people most severely.",
    acciones: [
      "Reduce unnecessary consumption and waste.",
      "Learn about environmental problems from reliable scientific sources.",
      "Care for nearby natural spaces and participate in protecting them.",
      "Take environmental impact into account in personal and professional decisions.",
    ],
    preguntas: [
      "What world am I leaving to those who will come after us?",
      "What habit could I change this month?",
    ],
  },
  {
    title: "5. Reconciliation and human rebuilding",
    fundamento: "Every person is responsible for the harm they cause. But no one is reducible to their worst acts. The justice we defend seeks to make reparation to victims and, when possible, allow those who caused harm to transform themselves and reintegrate.",
    precision: "No victim is obliged to forgive, reconcile, or maintain contact with the person who harmed them. The dignity, safety, and autonomy of victims always take priority over any reconciliation process. Asking for forgiveness is the responsibility of the person who caused harm; granting it is a free decision by the person who suffered the harm, and no one can demand it of them.",
    problema: "Harm between people and communities, the lack of reparation for victims, and the permanent exclusion of those who have made mistakes even after accepting responsibility.",
    acciones: [
      "Acknowledge the harm you yourself have caused and seek to repair it.",
      "Listen to those who have been harmed before speaking of forgiveness.",
      "Avoid reducing people to their past mistakes in everyday interactions.",
      "Learn about restorative justice practices and their responsible application.",
    ],
    preguntas: [
      "Is there any harm I caused that I have not yet repaired?",
      "Whom do I still judge solely by the worst thing they did?",
    ],
  },
];

export function AccionEticaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>Repairing the world: from reflection to action</h1>
<p className={intro}>How MEU proposes to translate its principles into concrete commitments. Everything that follows is a proposal, not an achievement already realized or an existing program.</p>
<p className={lead}>A philosophy that changes nothing in people's lives runs the risk of remaining mere words. For MEU, Tikkun Olam—the repair of the world—is the bridge between reflection and action.</p>
<p className={body}>There is no need to belong to any organization to practice it. Most of the actions we propose are within anyone's reach, at home, at work, or in their neighborhood. None requires sharing our beliefs, and none should be used to attract adherents.</p>
</header>

{AREAS.map((a) => (
<section key={a.title} className={section}>
<h2 className={h2}>{a.title}</h2>
<p className={body}><strong className={label}>Ethical foundation.</strong> {a.fundamento}</p>
{a.precision && (
<div className="p-space-md bg-surface-container-high rounded-sm">
<p className={body}><strong className={label}>An essential clarification.</strong> {a.precision}</p>
</div>
)}
<p className={body}><strong className={label}>Human problem.</strong> {a.problema}</p>
<div className="flex flex-col space-y-1">
<p className={body}><strong className={label}>Possible actions.</strong></p>
<ul className="list-disc pl-6 flex flex-col space-y-1">
{a.acciones.map((x) => <li key={x} className={body}>{x}</li>)}
</ul>
</div>
<div className="flex flex-col space-y-1">
<p className={body}><strong className={label}>Questions for reflection.</strong></p>
<ul className="list-disc pl-6 flex flex-col space-y-1">
{a.preguntas.map((x) => <li key={x} className={body}>{x}</li>)}
</ul>
</div>
</section>
))}

<section className={section}>
<h2 className={h2}>A note on limits</h2>
<p className={body}>These proposals do not replace the work of institutions or professionals. Nor do they suggest that one person alone can repair the world. They propose something more modest: that each person do what is within their reach, honestly and without expecting a reward.</p>
</section>

<blockquote className={quote}>
<p className={aphorism}>“We do not do good to deserve another life. We do good because this life matters”.</p>
</blockquote>

</div></div></main>
  );
}
