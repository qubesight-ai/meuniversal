import { Link } from "@tanstack/react-router";

export function PreguntasContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-space-xs text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Dialogue</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Frequently Asked Questions</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant italic mt-1">A philosophy that does not fear being questioned.</p>
</div>
<div className="flex flex-col md:items-end text-left md:text-right">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">13 questions</span>
</div>
</div>


</section>

<section className="w-full mb-space-xl">
<div className="relative overflow-hidden rounded-sm bg-surface-container p-space-lg md:p-space-xl flex flex-col md:flex-row gap-space-lg items-center">


<div className="flex flex-col md:w-2/3 space-y-3 z-10">
<div className="flex items-center gap-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Before we begin</span>
</div>
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          “Questioning is also a form of wisdom.”
        </p>
<p className="font-body-md text-body-md text-on-surface-variant pt-2">
          Universalist Ethical Monotheism (MEU) imposes no closed dogmas and demands no abdication of the intellect. It distinguishes empirical knowledge from metaphysical convictions: faith does not invalidate scientific discoveries, and testable claims are subject to evidence. Here we answer the most common questions about our relationship with other religions, our theology, the symbolic Demiurge, and ethics.
        </p>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col md:flex-row gap-space-md items-center justify-between">
<div className="relative w-full md:w-1/2">

<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-sm font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all" id="faq-search" placeholder="Search by concept: repairing the world, Demiurge, faith, ethics..." type="text" />
</div>
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0" id="filter-buttons">
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-primary text-on-primary" data-filter="all">
          All (13)
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t1">
          Identity
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t2">
          Theology
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t3">
          Ethics and finitude
        </button>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-space-xl items-start">

<div className="lg:col-span-6 flex flex-col space-y-space-md" id="col-tratado-1">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-primary">Identity and Coexistence</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">6 questions</span>
</div>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">What is Universalist Ethical Monotheism (MEU)?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            MEU is a contemporary philosophical proposal that affirms faith in a single, universal, indivisible God—the God of Abraham—understood as the transcendent principle and foundation of existence, whose essence exceeds our understanding. This is a conviction of faith, not a scientific demonstration. It is organized around six principles: epistemological humility, critical gnosis, rational universal ethics, freedom of conscience, the intrinsic value of finite life, and repairing the world. It has no clergy and promises no salvation.
          </p>
<div className="p-space-sm bg-surface-container-low rounded-sm text-primary text-body-sm font-body-sm italic">
            “Faith that nullifies reason is fanaticism; reason that scorns wonder is sterility.”
          </div>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Is MEU a new religion or a sect?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            MEU understands itself as a philosophical and ethical proposal, not as a sect: it demands no obedience, has no clergy, requests no mandatory contributions, and recognizes no infallible leaders. It includes convictions of faith, but does not seek to compete with other religions for members.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Must I abandon my current religion to embrace MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No formal resignation or public apostasy is required. Many sympathizers participate in MEU as a critical hermeneutical framework within their own traditions (Jewish, liberal Christian, deist, or humanist). The only things incompatible with MEU are practices or doctrines that objectify God, promote tribal hatred, blind idolatry, or contempt for inalienable human rights. LGBTQ+ people participate on equal terms; their sexual orientation, gender identity, and intimate relationships, including same-sex marriages, constitute neither sin nor spiritual inferiority. We reject discrimination and conversion practices. Intellectual and communal participation does not require adherence to all of MEU’s theological convictions.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.IV</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Do you actively seek to convert people of other faiths?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            We reject aggressive proselytism and any form of spiritual coercion. Authentic conviction springs from personal discernment and ethical maturity, not from rhetorical persuasion or fear of eternal punishment. The psychological well-being that may accompany a belief does not, by itself, demonstrate that it is true. Our vocation is clarity of witness and open dialectical dialogue for anyone who voluntarily seeks this path. We share our teachings through education, dialogue, and example, without considering anyone’s conversion necessary: all adherence is free, conscious, and reversible.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.V</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">What kind of authority does the Founder or author of MEU have?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No spiritual authority. The Founder is the author of a fallible philosophical proposal: he is neither a prophet, a divine mediator, nor an unquestionable teaching authority. His teachings may be examined, questioned, or rejected; no doctrine is immune to criticism. An idea is worth its reasons, not the person who proposes it.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.VI</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Is there a place for atheists or agnostics in MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Yes. MEU affirms faith in God, but does not require others to share it in order to engage in dialogue or collaborate. Atheists and agnostics may find affinity with its ethics, critical thinking, and commitment to repairing the world, and their theological disagreement is respected.
          </p>
</div>
</article>
</div>

<div className="lg:col-span-6 flex flex-col space-y-space-md" id="col-tratado-2-3">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-primary">Theology, Symbols, and Finitude</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">7 questions</span>
</div>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Who has the authority to interpret the will of the God of Abraham?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No one has a monopoly on God’s will. We recognize the God of Abraham alone as divine authority; no person, Founder, teacher, interpretation of scripture, or institution has a monopoly on his will. Understanding God is a shared human quest, always limited. We therefore distrust any group—including our own—that claims to speak with the exclusive voice of God.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Do you regard Jesus as God incarnate?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No. We regard Jesus of Nazareth as a first-century Jewish historical figure and study him critically within his historical and religious context. We recognize the ethical and philosophical value of some teachings attributed to him, such as compassion, justice, humility and care for others. In our interpretation, he is neither God, nor the Messiah, nor a prophet, nor an infallible religious authority. Nor is he the founder of MEU or a source of binding doctrine. We do not claim that every statement the Gospels attribute to him is historically accurate, and his relationship to the Jewish currents of his time is a matter of scholarly debate. Studying and appreciating Jesus does not imply accepting Christianity or adopting its theological doctrines. He is one of several historical and philosophical figures MEU can examine, not a foundation of its theology. We respect that Christianity and Judaism each understand him in their own way.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">What is the “Demiurge” in MEU’s perspective?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            There is no second creator god. We use the term as a symbol of our human tendency to absolutize our own interpretations and confuse them with God’s will. It is a tool of self-criticism that we apply first to ourselves, not a label for discrediting other religions.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.IV</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">What does the concept of Gnosis mean in this framework?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            In MEU, gnosis is not secret knowledge reserved for initiates, but critical self-knowledge: examining our own prejudices and questioning the representations of God that we have absolutized. We do not adopt the cosmology of the ancient Gnostic movements.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Is there life after death according to MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            We maintain a contemporary position, partially inspired by the Sadducees, that does not affirm individual immortality, resurrection, a final judgment, or rewards or punishments after death. We do not present it as a definitive historical reconstruction or as an absolute certainty. What we do affirm is that this life has value in itself. If we use the word “soul,” we do so poetically, without affirming the existence of an immortal soul.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">Why do good if there is no eternal reward or punishment?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Because people and the world matter in themselves. Ethics needs neither the promise of a reward nor the threat of punishment: it finds its meaning in alleviating suffering, caring for life, and leaving a better world for those who will come after us.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">What does the principle of repairing the world mean in daily practice?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            For MEU, repairing the world is an ethical responsibility and a practical commitment: social justice, education, solidarity, and environmental care. The idea has roots in the Hebrew expression Tikkun Olam, which has a long history in Jewish tradition, but we do not adopt any cosmology as obligatory.
          </p>
</div>
</article>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="w-full h-48 rounded-sm overflow-hidden relative">

<div className="absolute inset-0 flex items-center p-space-lg md:p-space-xl">
<div className="max-w-lg text-on-primary space-y-2">
<p className="font-headline-md text-headline-md font-normal leading-snug">The answers are provisional; the question remains open.</p>
</div>
</div>
</div>
</section>

<section className="w-full relative overflow-hidden rounded-sm bg-surface-container p-space-lg md:p-space-xl mb-space-lg">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-space-md">


<div className="space-y-2">
<h3 className="font-display-md text-display-md text-primary">Thinking further</h3>
</div>
<blockquote className="px-space-md py-space-sm bg-surface-container-high/60 rounded-sm max-w-2xl">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          “Truth does not fear the question; it fears the censor who forbids asking it.”
        </p>
</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
        If any questions remain, you may read our reflections or review our commitment to coexistence.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-2">
<Link to="/reflexiones" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors">
<span>Go to Reflections</span>

</Link>
<Link to="/nuestro-compromiso" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-surface-container-highest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container font-label-md text-label-md uppercase tracking-wider transition-colors">

<span>Our Commitment</span>
</Link>
</div>
</div>
</section>


</div></div></main>
  );
}
