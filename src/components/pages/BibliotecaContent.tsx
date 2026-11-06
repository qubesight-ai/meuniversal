const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const section = "flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const item = "flex flex-col space-y-2 p-space-md bg-surface-container-low rounded-sm";
const entryTitle = "font-headline-sm text-headline-sm text-primary";
const label = "font-semibold text-primary";

type Entry = { title: string; meta: string; kind: string; brings: string; reading?: string };
type Group = { title: string; entries: Entry[] };

const GROUPS: Group[] = [
  {
    title: "1. Judaísmo bíblico y pensamiento judío",
    entries: [
      {
        title: "Biblia hebrea (Tanaj)",
        meta: "textos compuestos y editados a lo largo de varios siglos antes de la era común.",
        kind: "Primaria.",
        brings: "las tradiciones sobre Abraham, la Torá, los profetas y los escritos sapienciales.",
        reading: "fuente de la expresión «Dios de Abraham» y de la crítica profética a un culto separado de la justicia. La leemos en su contexto histórico, no como texto literal e infalible.",
      },
      {
        title: "Maimónides (Moisés ben Maimón), Guía de perplejos",
        meta: "c. 1190.",
        kind: "Primaria.",
        brings: "un intento de armonizar la fe judía con la filosofía aristotélica, incluida la idea de que de Dios se puede hablar con más propiedad mediante atributos negativos.",
        reading: "inspiración para hablar de Dios con sobriedad. No adoptamos su sistema.",
      },
      {
        title: "Baruch Spinoza, Tratado teológico-político",
        meta: "1670.",
        kind: "Primaria.",
        brings: "una lectura histórico-crítica de la Biblia y una defensa de la libertad de pensamiento.",
        reading: "interlocutor sobre la libertad de conciencia y la crítica de las imágenes antropomórficas de Dios. Su concepción de Dios difiere de la nuestra.",
      },
      {
        title: "Hermann Cohen, Religión de la razón desde las fuentes del judaísmo",
        meta: "1919 (póstuma).",
        kind: "Primaria / filosofía.",
        brings: "una lectura ética y racional del monoteísmo judío.",
        reading: "interlocutor sobre el vínculo entre monoteísmo y ética universal.",
      },
    ],
  },
  {
    title: "2. Judaísmo reformista",
    entries: [
      {
        title: "Plataforma de Pittsburgh",
        meta: "1885.",
        kind: "Primaria.",
        brings: "declaración de rabinos reformistas estadounidenses que subrayó la dimensión ética del judaísmo y revisó la obligatoriedad de algunas normas rituales.",
        reading: "ejemplo histórico de lectura crítica de una tradición. El judaísmo reformista posterior revisó varias de sus posiciones, y el MEU no habla en su nombre.",
      },
      {
        title: "Michael A. Meyer, Response to Modernity: A History of the Reform Movement in Judaism",
        meta: "1988.",
        kind: "Secundaria.",
        brings: "historia académica del movimiento reformista.",
        reading: "referencia para no atribuir al reformismo ideas que no sostuvo.",
      },
    ],
  },
  {
    title: "3. Historia de los saduceos",
    entries: [
      {
        title: "Flavio Josefo, Antigüedades judías (libro XVIII) y La guerra de los judíos (libro II)",
        meta: "finales del siglo I e.c.",
        kind: "Primaria.",
        brings: "descripción de las corrientes judías de su tiempo, incluidos los saduceos, a quienes atribuye el rechazo de la supervivencia del alma y de las recompensas y castigos tras la muerte.",
        reading: "Josefo no era saduceo y escribe para un público grecorromano; su testimonio es valioso pero no neutral.",
      },
      {
        title: "Nuevo Testamento: Marcos 12:18–27; Hechos 23:8",
        meta: "siglo I e.c.",
        kind: "Primaria.",
        brings: "menciona que los saduceos negaban la resurrección.",
        reading: "segunda fuente independiente sobre ese rasgo; tampoco procede de los propios saduceos.",
      },
      {
        title: "E. P. Sanders, Judaism: Practice and Belief, 63 BCE–66 CE",
        meta: "1992.",
        kind: "Secundaria.",
        brings: "estudio de la vida religiosa judía de la época, con atención a sus distintos grupos.",
        reading: "ayuda a situar a los saduceos sin idealizarlos.",
      },
    ],
  },
  {
    title: "4. Jesús en su contexto judío",
    entries: [
      {
        title: "Evangelios (Marcos, Mateo, Lucas, Juan)",
        meta: "siglo I e.c.",
        kind: "Primaria.",
        brings: "las principales fuentes sobre la vida y enseñanzas de Jesús, escritas desde la fe de comunidades posteriores.",
        reading: "los leemos críticamente, distinguiendo entre lo que la investigación considera probable y las interpretaciones teológicas posteriores.",
      },
      {
        title: "Geza Vermes, Jesús el judío",
        meta: "1973.",
        kind: "Secundaria.",
        brings: "estudio de Jesús en el marco del judaísmo galileo de su tiempo.",
      },
      {
        title: "E. P. Sanders, La figura histórica de Jesús",
        meta: "1993.",
        kind: "Secundaria.",
        brings: "síntesis de lo que la investigación histórica puede afirmar con razonable confianza.",
      },
      {
        title: "John P. Meier, Un judío marginal",
        meta: "varios volúmenes desde 1991.",
        kind: "Secundaria.",
        brings: "estudio extenso y metodológicamente explícito del Jesús histórico.",
      },
      {
        title: "Amy-Jill Levine, The Misunderstood Jew",
        meta: "2006.",
        kind: "Secundaria / divulgación.",
        brings: "crítica de los estereotipos sobre el judaísmo en la lectura cristiana de Jesús.",
        reading: "estas obras no respaldan nuestra interpretación teológica de Jesús; nos ayudan a no afirmar como hechos lo que es debate.",
      },
    ],
  },
  {
    title: "5. Filosofía de la religión",
    entries: [
      {
        title: "William James, Las variedades de la experiencia religiosa",
        meta: "1902.",
        kind: "Clásico filosófico.",
        brings: "estudio de la experiencia religiosa desde la psicología y la filosofía, sin reducirla ni defenderla dogmáticamente.",
      },
      {
        title: "John Hick, An Interpretation of Religion",
        meta: "1989.",
        kind: "Interpretación contemporánea.",
        brings: "una propuesta filosófica de pluralismo religioso (ver también sección 8).",
        reading: "interlocutor, no fuente doctrinal. Su teoría ha recibido críticas importantes que conviene conocer.",
      },
    ],
  },
  {
    title: "6. Gnosticismo histórico",
    entries: [
      {
        title: "Códices de Nag Hammadi",
        meta: "textos copiados en el siglo IV e.c., descubiertos en Egipto en 1945.",
        kind: "Primaria.",
        brings: "textos de diversas corrientes, algunos con la figura de un Demiurgo inferior al Dios supremo.",
        reading: "no adoptamos su cosmología. Tomamos el término «Demiurgo» como símbolo propio.",
      },
      {
        title: "Hans Jonas, La religión gnóstica",
        meta: "1958.",
        kind: "Secundaria.",
        brings: "estudio clásico de los textos gnósticos.",
      },
      {
        title: "Michael A. Williams, Rethinking «Gnosticism» (1996), y Karen L. King, What Is Gnosticism? (2003)",
        meta: "",
        kind: "Secundarias.",
        brings: "crítica de la categoría «gnosticismo» por agrupar movimientos muy distintos.",
        reading: "razón para no hablar de «los gnósticos» como si fueran un bloque.",
      },
    ],
  },
  {
    title: "7. Ética y filosofía moral",
    entries: [
      {
        title: "Aristóteles, Ética a Nicómaco",
        meta: "siglo IV a.e.c.",
        kind: "Primaria.",
        brings: "la ética como reflexión sobre la vida buena y las virtudes.",
      },
      {
        title: "Immanuel Kant, Fundamentación de la metafísica de las costumbres",
        meta: "1785.",
        kind: "Primaria.",
        brings: "la idea de tratar a las personas como fines y no solo como medios.",
      },
      {
        title: "Emmanuel Lévinas, Totalidad e infinito",
        meta: "1961.",
        kind: "Primaria / filosofía contemporánea.",
        brings: "la responsabilidad ética ante el rostro del otro.",
      },
      {
        title: "John Rawls, Teoría de la justicia",
        meta: "1971.",
        kind: "Primaria / filosofía política.",
        brings: "una teoría influyente de la justicia como equidad.",
        reading: "estas obras alimentan nuestra ética universal racional; ninguno de sus autores es responsable de nuestras conclusiones.",
      },
    ],
  },
  {
    title: "8. Pluralismo religioso",
    entries: [
      {
        title: "John Hick, An Interpretation of Religion",
        meta: "1989 (ver sección 5).",
        kind: "",
        brings: "",
      },
      {
        title: "Jonathan Sacks, The Dignity of Difference",
        meta: "2002.",
        kind: "Interpretación contemporánea.",
        brings: "reflexión de un rabino ortodoxo británico sobre el valor de la diversidad religiosa y cultural.",
        reading: "muestra que el respeto por la diferencia puede defenderse desde dentro de una tradición. Sacks no comparte la teología del MEU.",
      },
    ],
  },
  {
    title: "9. Tikkun Olam y justicia social",
    entries: [
      {
        title: "Mishná, tratado Guitín (capítulo 4)",
        meta: "redactada hacia el 200 e.c.",
        kind: "Primaria.",
        brings: "uso temprano de la expresión mipnei tikkun ha-olam («por la reparación / el buen orden del mundo») para justificar normas jurídicas y sociales.",
      },
      {
        title: "Gershom Scholem, Las grandes tendencias de la mística judía",
        meta: "1941.",
        kind: "Secundaria.",
        brings: "estudio de la Cábala, incluida la de Isaac Luria y la imagen de la ruptura de las vasijas.",
        reading: "contexto histórico de una metáfora; no es cosmología oficial del MEU.",
      },
      {
        title: "Abraham Joshua Heschel, Los profetas",
        meta: "1962.",
        kind: "Interpretación contemporánea.",
        brings: "lectura de los profetas bíblicos centrada en la justicia y la sensibilidad ante el sufrimiento.",
      },
      {
        title: "Jonathan Sacks, To Heal a Fractured World: The Ethics of Responsibility",
        meta: "2005.",
        kind: "Interpretación contemporánea.",
        brings: "reflexión sobre la responsabilidad ética y el Tikkun Olam.",
        reading: "interlocutor; su perspectiva parte del judaísmo ortodoxo.",
      },
    ],
  },
];

export function BibliotecaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>Fuentes, influencias y lecturas</h1>
<p className={intro}>Una biblioteca para leer las tradiciones con las que dialoga el MEU en sus propios términos.</p>
</header>

<section className={section}>
<h2 className={h2}>Cómo leer esta biblioteca</h2>
<ul className="list-disc pl-6 flex flex-col space-y-1">
<li className={body}><strong className={label}>Fuente primaria:</strong> texto antiguo o documento original de una tradición o época.</li>
<li className={body}><strong className={label}>Fuente secundaria:</strong> estudio académico sobre esas fuentes.</li>
<li className={body}><strong className={label}>Interpretación contemporánea:</strong> obra de pensamiento actual que propone una lectura propia.</li>
</ul>
<p className={body}>Que una obra aparezca aquí no significa que sus autores compartan las ideas del MEU, ni que el MEU comparta todas las suyas. Citar una tradición o un filósofo no implica adoptar todas sus enseñanzas: ninguna fuente citada es infalible para el MEU, y ninguna interpretación del fundador lo es tampoco. En cada entrada distinguimos <strong className={label}>lo que aporta la fuente</strong> de <strong className={label}>cómo la lee el MEU</strong>.</p>
</section>

{GROUPS.map((g) => (
<section key={g.title} className={section}>
<h2 className={h2}>{g.title}</h2>
{g.entries.map((e) => (
<div key={e.title} className={item}>
<p className={entryTitle}>{e.title}{e.meta ? ` — ${e.meta}` : ""}{e.kind ? ` ` : ""}<em className="text-secondary font-body-sm text-body-sm">{e.kind}</em></p>
{e.brings && <p className={body}><strong className={label}>Aporta:</strong> {e.brings}</p>}
{e.reading && <p className={body}><strong className={label}>Lectura del MEU:</strong> {e.reading}</p>}
</div>
))}
</section>
))}

</div></div></main>
  );
}
