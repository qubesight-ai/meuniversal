const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const section = "flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const item = "flex flex-col space-y-2 p-space-md bg-surface-container-low rounded-sm";
const entryTitle = "font-headline-sm text-headline-sm text-primary";
const label = "font-semibold text-primary";

type Entry = { title: string; meta: string; kind: string; brings: string; reading?: string; es?: string };
type Group = { title: string; entries: Entry[] };

const GROUPS: Group[] = [
  {
    title: "1. Biblical Judaism and Jewish thought",
    entries: [
      {
        title: "Biblia hebrea (Tanaj)",
        meta: "texts composed and edited over several centuries before the Common Era.",
        kind: "Primary.",
        brings: "the traditions concerning Abraham, the Torah, the prophets and the wisdom writings.",
        reading: "a source of the expression “the God of Abraham” and of the prophetic critique of worship separated from justice. We read it in its historical context, not as a literal and infallible text.",
      },
      {
        title: "Maimónides (Moisés ben Maimón), Guía de perplejos",
        meta: "c. 1190; composed in Judeo-Arabic (Dalālat al-ḥāʾirīn).",
        kind: "Primary.",
        brings: "an attempt to show the compatibility of the Torah and Aristotelian philosophy, encompassing the exegesis of anthropomorphic biblical terms, prophecy, providence, creation and the meaning of the commandments. Within that whole, he maintains that God's essential attributes can properly be affirmed only in negative form, and admits attributes of action, which describe God's effects in the world rather than his essence. Negative theology is one part of his thought, not its entirety.",
        es: "Guía de perplejos, ed. y trad. de David Gonzalo Maeso, Madrid, Trotta, 1994, ISBN 84-8164-002-6 (6.ª ed., 2015: ISBN 978-84-9879-593-6).",
        reading: "inspiration for speaking of God with restraint. We do not adopt his system.",
      },
      {
        title: "Baruch Spinoza, Tratado teológico-político",
        meta: "1670; Latin original: Tractatus theologico-politicus.",
        kind: "Primary.",
        brings: "a historical-critical reading of the Bible and a defense of freedom of thought.",
        reading: "an interlocutor on freedom of conscience and the critique of anthropomorphic images of God. His conception of God differs from ours.",
        es: "Tratado teológico-político, trad. y prólogo de Atilano Domínguez Basalo, Madrid, Alianza Editorial, 2014, ISBN 978-84-206-9327-9.",
      },
      {
        title: "Hermann Cohen, Religión de la razón desde las fuentes del judaísmo",
        meta: "1919 (posthumous); German original: Religion der Vernunft aus den Quellen des Judentums.",
        kind: "Primary / philosophy.",
        brings: "an ethical and rational reading of Jewish monotheism.",
        reading: "an interlocutor on the connection between monotheism and universal ethics.",
      },
    ],
  },
  {
    title: "2. Reform Judaism",
    entries: [
      {
        title: "Plataforma de Pittsburgh",
        meta: "1885.",
        kind: "Primary.",
        brings: "a declaration adopted at a conference of American Reform rabbis in Pittsburgh, representative of classical North American Reform Judaism. It regarded the moral laws of Mosaic legislation as binding and rejected certain rules concerning diet, priestly purity and clothing; it does not by itself represent all of Reform Judaism.",
        reading: "a historical example of a critical reading of a tradition. The movement evolved and revised positions on ritual observance and Jewish peoplehood, as its declarations of 1937 and 1999 show. MEU is not a branch of Reform Judaism, does not adopt its positions in their entirety and does not speak on its behalf.",
      },
      {
        title: "Michael A. Meyer, Response to Modernity: A History of the Reform Movement in Judaism",
        meta: "1988.",
        kind: "Secondary.",
        brings: "a scholarly history of the Reform movement.",
        reading: "a reference for avoiding the attribution to Reform Judaism of ideas it did not hold.",
      },
    ],
  },
  {
    title: "3. History of the Sadducees",
    entries: [
      {
        title: "Flavio Josefo, Antigüedades judías (XVIII, 16–17) and La guerra de los judíos (II, 164–166)",
        meta: "Antigüedades: c. 93–94 CE; Guerra: 70s CE, Greek version.",
        kind: "Primary.",
        brings: "in Antigüedades XVIII, 16, Josephus attributes to the Sadducees the view that the soul perishes along with the body; in Guerra II, 165, he attributes to them the rejection of the soul's continued existence and of rewards and punishments in Hades. These passages do not explicitly state a denial of bodily resurrection.",
        reading: "Josephus was not a Sadducee and writes for a Greco-Roman audience, using Greek philosophical categories; his testimony is valuable but not neutral. The two works belong to the same author and do not constitute two independent testimonies. The reconstruction of Sadducean beliefs must acknowledge these limits, without idealizing the group.",
      },
      {
        title: "New Testament: Mark 12:18–27; Acts 23:8",
        meta: "Mark: usually c. 65–75 CE; Acts: often c. 80–90 CE, although its dating is disputed and later dates have been proposed.",
        kind: "Primary.",
        brings: "Mark 12:18 presents the Sadducees as those who deny resurrection; Acts 23:8 also attributes to them the denial of angel and spirit. These are claims made by those texts, distinct from Josephus's formulation concerning the soul and Hades.",
        reading: "these are Christian testimonies, not writings by the Sadducees themselves. We do not regard the full independence of Mark, Acts and Josephus as demonstrated: their literary relationships, shared traditions and contexts must be examined, and the possible relationship between Acts and Josephus is disputed. Their partial agreement does not automatically allow us to count three independent testimonies.",
      },
      {
        title: "E. P. Sanders, Judaism: Practice and Belief, 63 BCE–66 CE",
        meta: "1992.",
        kind: "Secondary.",
        brings: "a study of Jewish religious life in the period, with attention to its different groups.",
        reading: "helps situate the Sadducees without idealizing them.",
      },
    ],
  },
  {
    title: "4. Jesus in his Jewish context",
    entries: [
      {
        title: "Gospels (Mark, Matthew, Luke, John)",
        meta: "usually dated to the second half of the first century CE; the exact dates and stages of redaction are disputed.",
        kind: "Primary.",
        brings: "the principal sources on the life and teachings of Jesus, written from the faith of later communities.",
        reading: "we read them critically, distinguishing between what scholarship considers probable and theological interpretations, already present in the Gospels themselves. We do not assume that they are four fully independent testimonies or accounts necessarily written by direct witnesses to all the events.",
      },
      {
        title: "Geza Vermes, Jesús el judío",
        meta: "1973, originally published in English: Jesus the Jew: A Historian’s Reading of the Gospels.",
        kind: "Secondary.",
        brings: "a study of Jesus within the Galilean Judaism of his time.",
      },
      {
        title: "E. P. Sanders, La figura histórica de Jesús",
        meta: "1993, originally published in English: The Historical Figure of Jesus.",
        kind: "Secondary.",
        brings: "a synthesis of what historical scholarship can affirm with reasonable confidence.",
      },
      {
        title: "John P. Meier, Un judío marginal",
        meta: "several volumes; English original from 1991: A Marginal Jew: Rethinking the Historical Jesus.",
        kind: "Secondary.",
        brings: "an extensive and methodologically explicit study of the historical Jesus.",
      },
      {
        title: "Amy-Jill Levine, The Misunderstood Jew: The Church and the Scandal of the Jewish Jesus",
        meta: "2006.",
        kind: "Secondary / writing for a general audience.",
        brings: "a critique of stereotypes about Judaism in Christian readings of Jesus.",
        reading: "these works do not endorse our theological interpretation of Jesus; they help us avoid asserting as fact what remains debated.",
      },
    ],
  },
  {
    title: "5. Philosophy of religion",
    entries: [
      {
        title: "William James, Las variedades de la experiencia religiosa",
        meta: "1902, originally published in English: The Varieties of Religious Experience: A Study in Human Nature.",
        kind: "Primary for James's thought / philosophical classic.",
        brings: "a study of religious experience from the perspectives of psychology and philosophy, with attention to personal testimonies. It includes its own philosophical interpretation; it is neither an entirely neutral description nor a demonstration of MEU's convictions.",
      },
      {
        title: "John Hick, An Interpretation of Religion: Human Responses to the Transcendent",
        meta: "1989.",
        kind: "Contemporary interpretation.",
        brings: "a philosophical proposal for religious pluralism (see also section 8).",
        reading: "an interlocutor, not a doctrinal source. His theory has received important criticisms worth knowing.",
      },
    ],
  },
  {
    title: "6. Historical Gnosticism",
    entries: [
      {
        title: "Códices de Nag Hammadi",
        meta: "Coptic manuscripts copied in the fourth century CE, discovered in Egypt in 1945; the works were composed earlier, with dates varying by text.",
        kind: "Primary.",
        brings: "texts from various currents, some featuring a Demiurge inferior to the supreme God.",
        reading: "we do not adopt their cosmology. We take the term “Demiurge” as a symbol of our own.",
      },
      {
        title: "Hans Jonas, La religión gnóstica",
        meta: "1958, originally published in English: The Gnostic Religion: The Message of the Alien God and the Beginnings of Christianity.",
        kind: "Secondary.",
        brings: "a classic study of Gnostic texts.",
        es: "La religión gnóstica, trad. de Menchu Gutiérrez, prólogo de Josep Montserrat Torrents, Madrid, Siruela (El Árbol del Paraíso, 21), 1.ª ed., reimpr. 2003, ISBN 978-84-7844-492-2.",
      },
      {
        title: "Michael A. Williams, Rethinking “Gnosticism” (1996), and Karen L. King, What Is Gnosticism? (2003)",
        meta: "",
        kind: "Secondary.",
        brings: "a critique of the category “Gnosticism” for grouping together very different movements.",
        reading: "a reason not to speak of “the Gnostics” as though they were a single bloc.",
      },
    ],
  },
  {
    title: "7. Ethics and moral philosophy",
    entries: [
      {
        title: "Aristóteles, Ética a Nicómaco",
        meta: "fourth century BCE.",
        kind: "Primary.",
        brings: "ethics as reflection on the good life and the virtues.",
      },
      {
        title: "Immanuel Kant, Fundamentación de la metafísica de las costumbres",
        meta: "1785; German original: Grundlegung zur Metaphysik der Sitten.",
        kind: "Primary.",
        brings: "the idea of treating people as ends and not merely as means.",
      },
      {
        title: "Emmanuel Lévinas, Totalidad e infinito",
        meta: "1961; French original: Totalité et Infini: Essai sur l’extériorité.",
        kind: "Primary / contemporary philosophy.",
        brings: "ethical responsibility before the face of the other.",
        es: "Totalidad e infinito: ensayo sobre la exterioridad, trad. de Miguel García-Baró, Salamanca, Sígueme (Hermeneia, 8), 2020, ISBN 978-84-301-1820-5. An earlier translation by Daniel E. Guillot exists (Sígueme, 1977).",
      },
      {
        title: "John Rawls, Teoría de la justicia",
        meta: "1971, originally published in English: A Theory of Justice.",
        kind: "Primary / political philosophy.",
        brings: "an influential theory of justice as fairness.",
        reading: "these works inform our rational universal ethics; none of their authors is responsible for our conclusions.",
      },
    ],
  },
  {
    title: "8. Religious pluralism",
    entries: [
      {
        title: "John Hick, An Interpretation of Religion: Human Responses to the Transcendent",
        meta: "1989 (see section 5).",
        kind: "",
        brings: "",
      },
      {
        title: "Jonathan Sacks, The Dignity of Difference: How to Avoid the Clash of Civilizations",
        meta: "2002; revised version in 2003.",
        kind: "Contemporary interpretation.",
        brings: "a British Orthodox rabbi's reflection on the value of religious and cultural diversity.",
        reading: "shows that respect for difference can be defended from within a tradition. The 2003 version revises formulations in the first; when quoting a passage, the version used must be identified. Sacks does not share MEU's theology.",
      },
    ],
  },
  {
    title: "9. Tikkun Olam and social justice",
    entries: [
      {
        title: "Mishná, tratado Guitín (chapter 4)",
        meta: "redacted around 200 CE.",
        kind: "Primary.",
        brings: "an early use of the expression mipnei tikkun ha-olam (“for the good order of the world”) as grounds for specific legal provisions, for example concerning divorce, the freeing of slaves and the ransom of captives, intended to prevent abuses and preserve social order. In this context it is a rabbinic legal criterion, not a general ethical program.",
        reading: "we distinguish this legal use from later developments, both ethical and mystical, that gave the expression other meanings; its contemporary use as a commitment to social justice is a modern reinterpretation. We do not present these meanings as a single concept.",
      },
      {
        title: "Abraham Joshua Heschel, Los profetas",
        meta: "1962, originally published in English: The Prophets.",
        kind: "Contemporary interpretation.",
        brings: "a reading of the biblical prophets centered on justice and sensitivity to suffering.",
      },
      {
        title: "Jonathan Sacks, To Heal a Fractured World: The Ethics of Responsibility",
        meta: "2005.",
        kind: "Contemporary interpretation.",
        brings: "a reflection on ethical responsibility and Tikkun Olam.",
        reading: "an interlocutor; his perspective is grounded in Orthodox Judaism.",
      },
    ],
  },
];

export function BibliotecaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>Sources, influences and readings</h1>
<p className={intro}>A library for reading the traditions with which MEU engages in dialogue on their own terms.</p>
</header>

<section className={section}>
<h2 className={h2}>How to read this library</h2>
<ul className="list-disc pl-6 flex flex-col space-y-1">
<li className={body}><strong className={label}>Primary source:</strong> an original document for studying a period, tradition or author; not necessarily direct testimony to all the events it describes.</li>
<li className={body}><strong className={label}>Secondary source:</strong> a scholarly study of those sources.</li>
<li className={body}><strong className={label}>Contemporary interpretation:</strong> a work of current thought proposing its own reading.</li>
</ul>
<p className={body}>These classifications depend on the research question: a philosophical work is a primary source for its author's thought, even if it interprets other sources. “Contemporary interpretation” describes its approach, not a mutually exclusive category. We distinguish bibliographic data and documented claims from disputed historical reconstructions and MEU's own philosophical interpretations.</p>
<p className={body}>The dates of modern works correspond to their first publication in the language indicated, not to a particular Spanish edition. For ancient texts, we distinguish composition, copying and redaction where appropriate; their dates are approximate. The Spanish titles identify the works; where we were able to verify a specific Spanish edition (publisher, translator, year and ISBN), we indicate it, without thereby recommending it over others.</p>
<p className={body}>The appearance of a work here does not mean that its authors share MEU's ideas, or that MEU shares all of theirs. Citing a tradition or philosopher does not imply adopting all their teachings: no source cited is infallible for MEU, nor is any interpretation by the Founder. In each entry we distinguish <strong className={label}>what the source contributes</strong> from <strong className={label}>how MEU reads it</strong>.</p>
</section>

{GROUPS.map((g) => (
<section key={g.title} className={section}>
<h2 className={h2}>{g.title}</h2>
{g.entries.map((e) => (
<div key={e.title} className={item}>
<p className={entryTitle}>{e.title}{e.meta ? ` — ${e.meta}` : ""}{e.kind ? ` ` : ""}<em className="text-secondary font-body-sm text-body-sm">{e.kind}</em></p>
{e.brings && <p className={body}><strong className={label}>Contributes:</strong> {e.brings}</p>}
{e.reading && <p className={body}><strong className={label}>MEU's reading:</strong> {e.reading}</p>}
{e.es && <p className={body}><strong className={label}>Spanish edition:</strong> {e.es}</p>}
</div>
))}
</section>
))}

</div></div></main>
  );
}
