const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const section = "flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const label = "font-semibold text-primary";

type Debate = { title: string; objection: string; answer: string; limits: string; question: string; objectionLabel?: string; extra?: string };

const DEBATES: Debate[] = [
  {
    title: "1. Why believe in the God of Abraham?",
    objection: "There is no conclusive proof of God's existence. The classical arguments have received serious criticism, and the world can be described without recourse to the divine. If MEU values reason and epistemological humility so highly, the consistent position would be to suspend judgment or not believe. Moreover, why specifically the God of Abraham, rather than another conception of the divine?",
    answer: "We agree that there is no conclusive proof. That is why we speak of faith, not demonstration. Our faith does not seek to replace reason, but to respond to questions that reason raises but does not settle: why something exists, why moral experience presses upon us so forcefully. We choose the expression “the God of Abraham” because it names a specific historical heritage with which we enter into dialogue, not because we consider other conceptions inferior.",
    limits: "The fact that a question remains open does not, by itself, justify a particular answer. The choice of the God of Abraham also has a cultural and historical component that we cannot present as purely rational.",
    question: "Can a belief be reasonable without being demonstrable? Where is the line between reasonable faith and arbitrary belief?",
  },
  {
    title: "2. Can morality exist without religion?",
    objectionLabel: "The objection (from two sides).",
    objection: "Some believers maintain that without God there is no objective foundation for morality. Some nonbelievers maintain the opposite: that morality does not need God, and that if MEU accepts a rational universal ethics, its faith is superfluous to ethics.",
    answer: "We believe that a person can be profoundly ethical without believing in God; experience shows this every day. We therefore propose an ethics that can be justified to anyone. Our faith is not the condition of ethics, but a horizon from which some of us live that ethics meaningfully.",
    limits: "In response to the first objection, we do not offer an ultimate foundation for morality, and the question remains open (see Foundations). In response to the second, we acknowledge that our faith adds no ethical reasons that a nonbeliever cannot have; its role is more existential than argumentative.",
    question: "What would make a moral norm valid for everyone, with or without God?",
  },
  {
    title: "3. Why recognize Jesus as a wise man and not as a prophet?",
    objection: "For Christianity, Jesus is much more than a wise man; for Islam, he is a prophet. Reducing him to an ethical teacher seems a selective choice: accepting his moral teachings while discarding the claims the sources attribute to him about himself and his mission. And if MEU does not regard him as a prophet, is it not deciding in advance that his teachings cannot come from God?",
    answer: "Our position is an interpretation, not a judgment on the faith of others. We value in Jesus what we can recognize from our perspective: his ethics of love of one's neighbor and his care for the excluded. We neither affirm nor presume that he received divine inspiration, and we attribute to him no prophetic authority and no revealed doctrinal authority, because we attribute to no human being a special and unquestionable authority concerning the divine will. His teachings may be studied and evaluated for their historical, ethical and philosophical value. Nor do we hold that divine inspiration was impossible: we claim no certainty about the metaphysical origin of his teachings. In saying this, we do not claim that all traditions consider their prophets infallible; each tradition understands prophecy in its own way, and we confine ourselves to explaining why that category is not part of our reading.",
    limits: "Every reading of the sources about Jesus involves selection, and ours does too. The historical debate about what Jesus said and thought is complex, and we have not resolved it. We hold to a reserve that is hard to maintain: we neither presume a divine origin nor rule it out, and that caution may prove unsatisfying to those who expect a clear affirmation or a clear denial.",
    question: "Is it possible to honor a religious figure without accepting everything their tradition affirms about them?",
  },
  {
    title: "4. What is the point of doing good if there is no reward after death?",
    objection: "If everything ends with death, the injustice suffered by many people will never be redressed, and those who did wrong will never be held accountable. For many traditions, hope in final justice gives meaning to suffering and sustains moral effort. Giving it up may lead to despair.",
    answer: "We do good because people matter now, not to obtain something later. Goodness motivated primarily by reward resembles an investment more than compassion. The absence of final justice, if that were the case, would not excuse us from seeking justice: it would make it more urgent.",
    limits: "The objection touches a painful point: victims who never obtained justice. Our position offers them no equivalent consolation, and we must acknowledge this honestly. Moreover, we do not know with certainty what happens after death: our position is a contemporary theological interpretation, not a scientific demonstration or knowledge.",
    question: "Can a life have meaning even if not all its injustices are redressed?",
  },
  {
    title: "5. Is it not contradictory to affirm one God and defend religious pluralism?",
    objection: "If there is only one God, the contradictory claims of different religions about him cannot all be true. Defending pluralism then seems a form of relativism, or a courtesy concealing the conviction that one is right.",
    answer: "We do not claim that all doctrines are equivalent or true at once. We affirm two compatible things: that no tradition, including our own, fully understands God; and that people's dignity does not depend on their being right about theology. Our pluralism is ethical and epistemological, not a relativism about truth.",
    limits: "A tension remains between holding convictions of our own and acknowledging that others may be right where we are mistaken. We do not dissolve it; we try to live it honestly.",
    question: "Is it possible to hold firm convictions while taking seriously the possibility of being mistaken?",
  },
  {
    title: "6. How do we know that our interpretation of the Demiurge is not also dogmatic?",
    objection: "MEU uses the Demiurge to point to absolutized representations of God. But who decides what constitutes an absolutized representation? The symbol could become a rhetorical weapon: calling what we dislike “the Demiurge” and reserving the correct image of God for ourselves.",
    answer: "The objection is fair, and this is precisely the risk against which the symbol must guard. That is why we insist that it applies first to ourselves and never as a label against other religions. If MEU used the Demiurge to discredit others, it would be engaging in what the symbol denounces.",
    limits: "A declared intention does not guarantee its fulfillment. We have no infallible criterion for distinguishing an absolutized image of God from one that is not; only continuous critical examination and openness to others pointing out our errors.",
    question: "What signs might indicate that we have turned our own ideas into an absolute?",
  },
  {
    title: "7. Can a philosophy inspired by Judaism legitimately separate itself from its traditional interpretations?",
    objection: "MEU uses concepts of Jewish origin—the God of Abraham, Tikkun Olam, the reference to the Sadducees—but reinterprets them freely, outside the communities that have transmitted them for centuries. This may be seen as appropriation: taking terms from a living tradition and giving them a meaning that tradition does not recognize.",
    answer: "We acknowledge our debt to Jewish thought and do not claim to speak on its behalf. When we use these concepts, we try to indicate where they come from, what they meant historically and how our rereading departs from them. We present ourselves neither as Judaism nor as its continuation.",
    limits: "Concern about appropriation is not resolved by caveats alone. Jewish communities have legitimate reasons to question certain uses of their concepts, and we must listen to them.",
    question: "What distinguishes respectful dialogue with a tradition from appropriation of its words?",
  },
  {
    title: "8. What distinguishes MEU from an organized religion?",
    objection: "MEU has a God, affirmations of faith, ethical principles and a Founder. Calling itself a “philosophical proposal” could be a way to avoid the criticisms directed at religions without ceasing to be one.",
    answer: "It is true that MEU includes convictions of faith, and we do not hide this: we present ourselves as a philosophical proposal with theological convictions. What we try to avoid are specific features we associate with many forms of organized religion: infallible authorities, required obedience, mediating clergy, necessary conversion, exclusive membership or sanctions for dissent. If these features appeared, criticism of us on that account would be legitimate.",
    extra: "We do not seek to impose on others a definition of what constitutes a religion. Anyone who considers MEU a religion according to their own criteria has the right to do so; we merely explain how we understand ourselves and what features we reject.",
    limits: "The boundary between philosophy with convictions of faith and religion is not clear-cut. Moreover, many organized religions do not have the features we mention, and we do not wish to caricature them. Every human community runs the risk of becoming institutionalized over time.",
    question: "What should a community do to avoid becoming what it criticizes?",
  },
];

export function DialogoContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>Dialogue, questions and criticisms of MEU</h1>
<p className={intro}>A library of objections. Each is formulated as strongly as we have been able to formulate it, followed by our provisional response, its limits and a question for further thought. We do not claim to have refuted any position.</p>
</header>

{DEBATES.map((d) => (
<section key={d.title} className={section}>
<h2 className={h2}>{d.title}</h2>
<p className={body}><strong className={label}>{d.objectionLabel ?? "The objection."}</strong> {d.objection}</p>
<p className={body}><strong className={label}>MEU's provisional response.</strong> {d.answer}</p>
{d.extra && <p className={body}>{d.extra}</p>}
<p className={body}><strong className={label}>Limits of this response.</strong> {d.limits}</p>
<p className={body}><strong className={label}>For further thought.</strong> {d.question}</p>
</section>
))}

<p className="font-body-sm text-body-sm text-on-surface-variant italic text-center">This library is open to new objections. There is currently no forum or comments section on the site.</p>

</div></div></main>
  );
}
