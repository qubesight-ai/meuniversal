const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const h3 = "font-headline-sm text-headline-sm text-primary";
const lead = "font-body-lg text-body-lg text-on-surface leading-relaxed";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const section = "flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const item = "flex flex-col space-y-2 p-space-md bg-surface-container-low rounded-sm";

export function FundamentosContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>What we believe, what we reason and what we still do not know</h1>
<p className={intro}>A page about the degree of certainty of everything we say.</p>
<p className={body}>Editorial Version 1.1 — November 6, 2026.</p>
<p className={lead}>Not all our claims have the same status. Some are convictions of faith. Others are positions we try to justify through arguments. Others, finally, are questions we do not know how to answer.</p>
<p className={body}>Distinguishing them is a form of honesty. If we presented a conviction of faith as though it were a demonstration, or an open question as though it were settled, we would be deceiving our readers, and perhaps ourselves as well.</p>
</header>

<section className={section}>
<h2 className={h2}>A. Theological convictions</h2>
<p className={intro}>What follows are affirmations of faith. They are neither scientific demonstrations nor necessary philosophical conclusions. Reasonable people may not share them.</p>

<div className={item}>
<h3 className={h3}>The existence of the God of Abraham</h3>
<p className={body}>We believe that there is a God, whom we name “the God of Abraham” because of the historical root this expression shares with several traditions. We understand him as a transcendent universal principle and the foundation of existence, without seeking to confine him within human images or definitions. We do not claim to be able to demonstrate this. There are considerations we find weighty—the question of the origin of what exists, moral experience, wonder at the order of the world—but we acknowledge that none rationally compels belief.</p>
</div>

<div className={item}>
<h3 className={h3}>His unity and indivisibility</h3>
<p className={body}>We believe that God is one, universal and indivisible. This conviction separates us from other theological understandings, such as the Christian doctrine of the Trinity, which we respect although we do not share it. We do not claim to know God's nature beyond what this affirmation expresses.</p>
</div>

<div className={item}>
<h3 className={h3}>The value of life in itself</h3>
<p className={body}>We believe that life has value in itself, and not only as a means to something else. This conviction can be supported by philosophical arguments (see section B), but in its theological formulation—that life was created with value of its own—it is an affirmation of faith.</p>
</div>

<div className={item}>
<h3 className={h3}>Creation is not a test</h3>
<p className={body}>We interpret creation as not being a test to obtain supernatural rewards. This is an interpretation of divine intention, and therefore fallible: we do not know God's purposes with certainty. We hold it because it seems to us the most consistent with a good God, not because we can prove it.</p>
</div>
</section>

<section className={section}>
<h2 className={h2}>B. Philosophical and ethical positions</h2>
<p className={intro}>Here we present arguments. So that readers can evaluate them, we indicate what kind of claim each one is:</p>
<ul className="list-disc pl-6 flex flex-col space-y-1">
<li className={body}><strong className="font-semibold text-primary">Philosophical argument:</strong> a reason intended to convince anyone willing to reflect.</li>
<li className={body}><strong className="font-semibold text-primary">Normative commitment:</strong> a choice about how we want to live, which can be justified but not demonstrated.</li>
<li className={body}><strong className="font-semibold text-primary">Empirical claim:</strong> something that can be tested against data or experience.</li>
</ul>

<div className={item}>
<h3 className={h3}>Autonomy between science and faith</h3>
<p className={body}><em className="text-secondary">Distinction of domains:</em> empirical knowledge is tested against evidence; metaphysical convictions express an interpretation of meaning and do not replace that knowledge.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> religious claims that can be tested are subject to evidence, and faith cannot invalidate scientific discoveries.</p>
</div>

<div className={item}>
<h3 className={h3}>Freedom of conscience</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> if no one has infallible access to the truth about God, no one has a legitimate right to impose their interpretation on others.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we respect each person's right to believe, doubt or not believe, even when we think they are mistaken.</p>
<p className={body}><em className="text-secondary">Empirical claim:</em> history offers abundant examples of harm caused by religious imposition.</p>
</div>

<div className={item}>
<h3 className={h3}>Human dignity</h3>
<p className={body}><em className="text-secondary">Fundamental commitment:</em> human dignity is unconditional. It does not depend on an individual's ability to reason, communicate, decide or be autonomous. A person is not worth less because they have fewer abilities, or because of their origin, belief, gender, sexual orientation, gender identity or condition. We reject discrimination and conversion practices.</p>
<p className={body}><em className="text-secondary">Philosophical argument:</em> if dignity depended on capacities that vary from one person to another—and that anyone can lose through illness, age or accident—it would cease to be equal for everyone. We therefore understand it as inherent in every human being, not as a recognition that must be earned.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we treat every person as an end in themselves, never merely as a means.</p>
<p className={body}><em className="text-secondary">Note:</em> the ultimate foundation of dignity is an open question (see section C).</p>
</div>

<div className={item}>
<h3 className={h3}>Social justice</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> if all people have equal dignity, inequalities that arise not from their choices but from circumstances they did not choose require justification.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we commit ourselves to reducing exclusion and expanding opportunities.</p>
<p className={body}><em className="text-secondary">Empirical claim:</em> the effects of poverty and exclusion on health, education or life expectancy can be measured; concrete policies to remedy them must be evaluated with data, not slogans.</p>
</div>

<div className={item}>
<h3 className={h3}>Individual and collective responsibility</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> we are responsible for what we do and, to a certain extent, for what we allow to happen when we could prevent it.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we take responsibility for the consequences of our actions, not only for our intentions.</p>
</div>

<div className={item}>
<h3 className={h3}>Critical thinking</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> a belief that has never been examined cannot be distinguished from a prejudice.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we also subject our own ideas to examination; no doctrine is immune to criticism, doubt, dialogue or revision.</p>
</div>

<div className={item}>
<h3 className={h3}>The value of finite life</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> many things we value—a friendship, a work, a day shared—do not lose their value because they end. Finitude does not negate value; it often makes it visible.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we live this life as something that matters in itself.</p>
</div>

<div className={item}>
<h3 className={h3}>Rejection of spiritual coercion</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> a faith obtained through fear, guilt or pressure is not free adherence, and therefore loses the value it claims to have.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we reject the use of fear, guilt or supernatural promises to influence people. The psychological well-being that may accompany a belief does not, by itself, demonstrate that it is true.</p>
</div>

<div className={item}>
<h3 className={h3}>Tikkun Olam</h3>
<p className={body}><em className="text-secondary">Philosophical argument:</em> if avoidable suffering is an evil and we can reduce it, we have reasons to do so.</p>
<p className={body}><em className="text-secondary">Normative commitment:</em> we commit ourselves to the practical repair of the world: social justice, education, solidarity and environmental care.</p>
<p className={body}><em className="text-secondary">Empirical claim:</em> the effectiveness of each concrete action can and must be evaluated.</p>
</div>
</section>

<section className={section}>
<h2 className={h2}>C. Open questions</h2>
<p className={intro}>We have no definitive answers to these questions. We present some possibilities and explain why they remain open.</p>

<div className={item}>
<h3 className={h3}>Why does something exist rather than nothing?</h3>
<p className={body}>This is one of philosophy's oldest questions. Some people see in it a reason to believe in God; others think the question has no answer, or that it is ill-posed. Our faith does not resolve it: it accompanies it.</p>
</div>

<div className={item}>
<h3 className={h3}>What can we really know about God?</h3>
<p className={body}>If God's essence exceeds our understanding, what value do our claims about God have? Some traditions have held that it is safer to say what God is not than what he is. We do not know precisely where the boundary lies between what we can meaningfully affirm and what exceeds our language.</p>
</div>

<div className={item}>
<h3 className={h3}>Can a universal ethics exist?</h3>
<p className={body}>Cultures differ in many moral norms, but they also share common intuitions. We do not know whether there is an ethical core that every reasonable person must accept, or whether universality is rather a goal constructed through dialogue.</p>
</div>

<div className={item}>
<h3 className={h3}>How is human dignity grounded?</h3>
<p className={body}>In reason, in the capacity to suffer, in a relationship with God, in a social agreement? Each answer has advantages and difficulties. We firmly defend human dignity as unconditional, but acknowledge that its ultimate foundation remains under discussion.</p>
</div>

<div className={item}>
<h3 className={h3}>What does it mean to live a good life?</h3>
<p className={body}>Pleasure, virtue, bonds, meaning, service to others? Probably a combination of these, in proportions each person discovers throughout their life. We do not believe there is a single correct way to live well.</p>
</div>

<div className={item}>
<h3 className={h3}>How should we respond to unjust suffering?</h3>
<p className={body}>If we affirm a good God, the suffering of the innocent is a serious objection. We have no explanation that resolves it. We do know, however, that the first response to suffering should not be a theory, but help.</p>
</div>

<div className={item}>
<h3 className={h3}>What are the limits of our interpretation of scripture?</h3>
<p className={body}>We read ancient texts through contemporary eyes. When is a rereading legitimate and when does it betray the text? What authority do interpretive traditions with centuries of history have in relation to our present reading? We have no definitive criterion.</p>
</div>

<div className={item}>
<h3 className={h3}>What evidence might lead us to revise our beliefs?</h3>
<p className={body}>This is perhaps the most important question on this page. If nothing could make us change our minds, our convictions would be the product not of reflection but of habit. Some possible reasons for revision: arguments showing internal contradictions in our claims, historical data contradicting our interpretations, or practical consequences of our ideas that prove harmful.</p>
</div>
</section>

<p className="font-body-sm text-body-sm text-on-surface-variant italic text-center">This page expresses our epistemological humility: we prefer to acknowledge what we do not know rather than appear to have certainties we lack.</p>

</div></div></main>
  );
}
