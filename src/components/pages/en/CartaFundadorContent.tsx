import { Link } from "@tanstack/react-router";
import ernestoFoto from "@/assets/ernesto-libby.jpg.asset.json";

const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const lead = "font-body-lg text-body-lg text-on-surface leading-relaxed";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const quote = "pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg";
const aphorism = "font-aphorism text-aphorism text-primary italic leading-relaxed";

export function CartaFundadorContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<div className="flex items-center gap-space-md">
<img src={ernestoFoto.url} alt="Ernesto Libby Lugo" className="w-20 h-20 rounded-lg object-cover" loading="lazy" />
<div className="flex flex-col space-y-1">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase">Founder's Letter</span>
<span className="font-headline-sm text-headline-sm text-primary">Ernesto Libby Lugo</span>
</div>
</div>
<h1 className={h1}>Why I Founded Universalist Ethical Monotheism</h1>
<p className={intro}>Founder's Letter</p>
</header>

<article className="flex flex-col space-y-space-md">
<p className={lead}>I have never considered asking questions about God to be a lack of faith. On the contrary, I believe that questioning our own beliefs can be one of the most sincere ways of seeking truth.</p>
<p className={body}>During my spiritual and philosophical search, two concerns began to occupy an important place in my thinking.</p>
<p className={body}>The first was my disagreement with certain religious interpretations of God, death, and the purpose of our existence. I wondered why life had to be understood as a test, why our actions needed to be justified through rewards or punishments after death, and why some people claimed to know the divine will with absolute certainty.</p>
<p className={body}>The second concern was equally important: why devote so much effort to preparing for another existence when we still have so much to do in this one?</p>
<p className={body}>We live in a world where injustice, poverty, exclusion, violence, and suffering exist. We also live in an extraordinary world, full of beauty, knowledge, nature, human bonds, and opportunities to build something better.</p>
<p className={body}>I began to wonder whether a spirituality truly committed to life should not focus on precisely that: living responsibly, learning, loving, enjoying life, and helping to repair what is damaged.</p>
<p className={body}>In Jewish thought I found ideas that enriched this reflection, especially <em>Tikkun Olam</em>, understood as the responsibility to repair the world. I also found inspiration in different philosophical and historical currents, though without feeling the need to accept their doctrines in their entirety.</p>
<p className={body}>From that search emerged Universalist Ethical Monotheism.</p>
<p className={body}>MEU expresses my conviction that we can believe in the God of Abraham without claiming that we fully understand his nature. That we can recognize the wisdom of religious figures without considering them infallible. That we can find meaning in our existence without depending on the promise of another life.</p>
<p className={body}>But it also expresses something I consider fundamental: no person should have to relinquish their freedom of conscience to participate in a spiritual or philosophical search.</p>
<p className={body}>I do not claim to speak in God's name. I do not consider myself a prophet, a divine intermediary, or the possessor of a definitive truth. I am simply a person who has reflected on these questions and decided to share his conclusions, knowing that they may contain errors.</p>
<p className={body}>That is why I want MEU to remain open to criticism, dialogue, and revision. I do not want its principles to become dogmas that no one can question, nor my status as Founder to grant my words any special authority.</p>
<p className={body}>If anyone finds contradictions in my ideas, I hope they can point them out freely. If someone else develops a better-founded interpretation, I hope we can learn from it.</p>
<p className={body}>My aspiration is not to build a community of people who think exactly as I do. It is to contribute to a way of thinking that allows faith to be joined with reason, freedom with responsibility, and reflection with action.</p>
<p className={body}>This search also led me to create the Ateneo de la Vida Interior (ATENEUM), an initiative devoted to interreligious dialogue and spiritual exploration grounded in respect, freedom of conscience, and critical thinking. Although both projects arise from concerns I share, they have different purposes: the Ateneo offers a plural space where different convictions can meet, while Universalist Ethical Monotheism expresses a particular philosophical and theological proposal. I consider it important to preserve that independence, because authentic dialogue requires that no perspective claim a privileged position.</p>
<p className={body}>Because, in the end, I believe that our most important task is not to escape the world, but to participate responsibly in it.</p>
<p className={body}>I did not found Universalist Ethical Monotheism because I believed I had found all the answers. I founded it because I believe there are questions worth asking freely, even when they challenge our deepest convictions.</p>
<p className={body}>I do not expect those who read these words to think as I do. I hope they will think for themselves.</p>
<p className={body}>And if one day this philosophy helps a person live more freely, treat another with greater compassion, or repair a small part of the world, it will have fulfilled its purpose.</p>
</article>

<blockquote className={quote}>
<p className={aphorism}>“We do not flee the world; we repair it. We do not move beyond life; we live it”.</p>
</blockquote>

<div className="flex flex-col space-y-1 border-t border-outline-variant pt-space-md">
<span className="font-headline-sm text-headline-sm text-primary">Ernesto Libby Lugo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Founder of Universalist Ethical Monotheism</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Creator of the Ateneo de la Vida Interior (ATENEUM)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Costa Rica, 2026</span>
<a href="https://ateneum.world/" className="self-start pt-space-sm font-body-sm text-body-sm text-secondary underline underline-offset-4 hover:text-primary transition-colors">Visit ATENEUM — ateneum.world</a>
</div>

<div>
<Link to="/" className="inline-flex items-center px-6 py-3 rounded border border-outline-variant hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors">
          Back to Home
        </Link>
</div>

</div></div></main>
  );
}
