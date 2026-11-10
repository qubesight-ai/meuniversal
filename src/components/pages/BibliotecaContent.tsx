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
        meta: "c. 1190; composición en judeoárabe (Dalālat al-ḥāʾirīn).",
        kind: "Primaria.",
        brings: "un intento de mostrar la compatibilidad entre la Torá y la filosofía aristotélica, que abarca la exégesis de los términos bíblicos antropomórficos, la profecía, la providencia, la creación y el sentido de los mandamientos. Dentro de ese conjunto, sostiene que los atributos esenciales de Dios solo pueden afirmarse con propiedad en forma negativa, y admite los atributos de acción, que describen efectos de Dios en el mundo y no su esencia. La teología negativa es una parte de su pensamiento, no su totalidad.",
        es: "Guía de perplejos, ed. y trad. de David Gonzalo Maeso, Madrid, Trotta, 1994, ISBN 84-8164-002-6 (6.ª ed., 2015: ISBN 978-84-9879-593-6).",
        reading: "inspiración para hablar de Dios con sobriedad. No adoptamos su sistema.",
      },
      {
        title: "Baruch Spinoza, Tratado teológico-político",
        meta: "1670; original latino: Tractatus theologico-politicus.",
        kind: "Primaria.",
        brings: "una lectura histórico-crítica de la Biblia y una defensa de la libertad de pensamiento.",
        reading: "interlocutor sobre la libertad de conciencia y la crítica de las imágenes antropomórficas de Dios. Su concepción de Dios difiere de la nuestra.",
        es: "Tratado teológico-político, trad. y prólogo de Atilano Domínguez Basalo, Madrid, Alianza Editorial, 2014, ISBN 978-84-206-9327-9.",
      },
      {
        title: "Hermann Cohen, Religión de la razón desde las fuentes del judaísmo",
        meta: "1919 (póstuma); original alemán: Religion der Vernunft aus den Quellen des Judentums.",
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
        brings: "declaración adoptada en una conferencia de rabinos reformistas estadounidenses en Pittsburgh, representativa del reformismo clásico norteamericano. Consideraba obligatorias las leyes morales de la legislación mosaica y rechazaba determinadas normas de alimentación, pureza sacerdotal y vestimenta; no representa por sí sola todo el judaísmo reformista.",
        reading: "ejemplo histórico de lectura crítica de una tradición. El movimiento evolucionó y revisó posiciones sobre observancia ritual y pueblo judío, como muestran sus declaraciones de 1937 y 1999. El MEU no es una rama del judaísmo reformista, no adopta íntegramente sus posiciones ni habla en su nombre.",
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
        title: "Flavio Josefo, Antigüedades judías (XVIII, 16–17) y La guerra de los judíos (II, 164–166)",
        meta: "Antigüedades: c. 93–94 e.c.; Guerra: década de 70 e.c., versión griega.",
        kind: "Primaria.",
        brings: "en Antigüedades XVIII, 16, Josefo atribuye a los saduceos que el alma perece junto con el cuerpo; en Guerra II, 165, les atribuye el rechazo de la perduración del alma y de las recompensas y castigos en el Hades. Estos pasajes no enuncian explícitamente una negación de la resurrección corporal.",
        reading: "Josefo no era saduceo y escribe para un público grecorromano, utilizando categorías filosóficas griegas; su testimonio es valioso pero no neutral. Las dos obras pertenecen al mismo autor, no constituyen dos testimonios independientes. La reconstrucción de las creencias saduceas debe reconocer estos límites, sin idealizar al grupo.",
      },
      {
        title: "Nuevo Testamento: Marcos 12:18–27; Hechos 23:8",
        meta: "Marcos: habitualmente c. 65–75 e.c.; Hechos: frecuentemente c. 80–90 e.c., aunque su datación es discutida y hay propuestas posteriores.",
        kind: "Primaria.",
        brings: "Marcos 12:18 presenta a los saduceos como quienes niegan la resurrección; Hechos 23:8 les atribuye además la negación de ángel y espíritu. Son afirmaciones de esos textos, distintas de la formulación de Josefo sobre el alma y el Hades.",
        reading: "son testimonios cristianos, no escritos de los propios saduceos. No damos por demostrada la plena independencia entre Marcos, Hechos y Josefo: sus relaciones literarias, tradiciones compartidas y contextos deben examinarse, y la posible relación entre Hechos y Josefo es discutida. Su coincidencia parcial no permite contar automáticamente tres testimonios independientes.",
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
        meta: "habitualmente datados en la segunda mitad del siglo I e.c.; las fechas exactas y las etapas de redacción son discutidas.",
        kind: "Primaria.",
        brings: "las principales fuentes sobre la vida y enseñanzas de Jesús, escritas desde la fe de comunidades posteriores.",
        reading: "los leemos críticamente, distinguiendo entre lo que la investigación considera probable y las interpretaciones teológicas, presentes ya en los propios evangelios. No los suponemos cuatro testimonios plenamente independientes ni relatos necesariamente escritos por testigos directos de todos los hechos.",
      },
      {
        title: "Geza Vermes, Jesús el judío",
        meta: "1973, publicación original en inglés: Jesus the Jew: A Historian’s Reading of the Gospels.",
        kind: "Secundaria.",
        brings: "estudio de Jesús en el marco del judaísmo galileo de su tiempo.",
      },
      {
        title: "E. P. Sanders, La figura histórica de Jesús",
        meta: "1993, publicación original en inglés: The Historical Figure of Jesus.",
        kind: "Secundaria.",
        brings: "síntesis de lo que la investigación histórica puede afirmar con razonable confianza.",
      },
      {
        title: "John P. Meier, Un judío marginal",
        meta: "varios volúmenes; original inglés desde 1991: A Marginal Jew: Rethinking the Historical Jesus.",
        kind: "Secundaria.",
        brings: "estudio extenso y metodológicamente explícito del Jesús histórico.",
      },
      {
        title: "Amy-Jill Levine, The Misunderstood Jew: The Church and the Scandal of the Jewish Jesus",
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
        meta: "1902, publicación original en inglés: The Varieties of Religious Experience: A Study in Human Nature.",
        kind: "Primaria para el pensamiento de James / clásico filosófico.",
        brings: "estudio de la experiencia religiosa desde la psicología y la filosofía, con atención a testimonios personales. Incluye una interpretación filosófica propia; no es una descripción completamente neutral ni una demostración de las convicciones del MEU.",
      },
      {
        title: "John Hick, An Interpretation of Religion: Human Responses to the Transcendent",
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
        meta: "manuscritos coptos copiados en el siglo IV e.c., descubiertos en Egipto en 1945; la composición de las obras es anterior y varía según el texto.",
        kind: "Primaria.",
        brings: "textos de diversas corrientes, algunos con la figura de un Demiurgo inferior al Dios supremo.",
        reading: "no adoptamos su cosmología. Tomamos el término «Demiurgo» como símbolo propio.",
      },
      {
        title: "Hans Jonas, La religión gnóstica",
        meta: "1958, publicación original en inglés: The Gnostic Religion: The Message of the Alien God and the Beginnings of Christianity.",
        kind: "Secundaria.",
        brings: "estudio clásico de los textos gnósticos.",
        es: "La religión gnóstica, trad. de Menchu Gutiérrez, prólogo de Josep Montserrat Torrents, Madrid, Siruela (El Árbol del Paraíso, 21), 1.ª ed., reimpr. 2003, ISBN 978-84-7844-492-2.",
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
        meta: "1785; original alemán: Grundlegung zur Metaphysik der Sitten.",
        kind: "Primaria.",
        brings: "la idea de tratar a las personas como fines y no solo como medios.",
      },
      {
        title: "Emmanuel Lévinas, Totalidad e infinito",
        meta: "1961; original francés: Totalité et Infini: Essai sur l’extériorité.",
        kind: "Primaria / filosofía contemporánea.",
        brings: "la responsabilidad ética ante el rostro del otro.",
        es: "Totalidad e infinito: ensayo sobre la exterioridad, trad. de Miguel García-Baró, Salamanca, Sígueme (Hermeneia, 8), 2020, ISBN 978-84-301-1820-5. Existe una traducción anterior de Daniel E. Guillot (Sígueme, 1977).",
      },
      {
        title: "John Rawls, Teoría de la justicia",
        meta: "1971, publicación original en inglés: A Theory of Justice.",
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
        title: "John Hick, An Interpretation of Religion: Human Responses to the Transcendent",
        meta: "1989 (ver sección 5).",
        kind: "",
        brings: "",
      },
      {
        title: "Jonathan Sacks, The Dignity of Difference: How to Avoid the Clash of Civilizations",
        meta: "2002; versión revisada en 2003.",
        kind: "Interpretación contemporánea.",
        brings: "reflexión de un rabino ortodoxo británico sobre el valor de la diversidad religiosa y cultural.",
        reading: "muestra que el respeto por la diferencia puede defenderse desde dentro de una tradición. La versión de 2003 revisa formulaciones de la primera; para citar un pasaje debe identificarse cuál se usa. Sacks no comparte la teología del MEU.",
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
        brings: "uso temprano de la expresión mipnei tikkun ha-olam («por el buen orden del mundo») como fundamento de disposiciones jurídicas concretas, por ejemplo en materia de divorcio, liberación de esclavos y rescate de cautivos, destinadas a prevenir abusos y preservar el orden social. En este contexto es un criterio legal rabínico, no un programa ético general.",
        reading: "distinguimos este uso jurídico de los desarrollos posteriores, éticos y también místicos, que dieron a la expresión otros sentidos; el uso contemporáneo como compromiso de justicia social es una reinterpretación moderna. No presentamos estos sentidos como un mismo concepto.",
      },
      {
        title: "Abraham Joshua Heschel, Los profetas",
        meta: "1962, publicación original en inglés: The Prophets.",
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
<li className={body}><strong className={label}>Fuente primaria:</strong> documento original para estudiar una época, tradición o autor; no necesariamente un testimonio directo de todos los acontecimientos que describe.</li>
<li className={body}><strong className={label}>Fuente secundaria:</strong> estudio académico sobre esas fuentes.</li>
<li className={body}><strong className={label}>Interpretación contemporánea:</strong> obra de pensamiento actual que propone una lectura propia.</li>
</ul>
<p className={body}>Estas clasificaciones dependen de la pregunta de estudio: una obra filosófica es fuente primaria para el pensamiento de su autor, aunque interprete otras fuentes. «Interpretación contemporánea» describe su enfoque, no una categoría excluyente. Distinguimos los datos bibliográficos y las afirmaciones documentadas de las reconstrucciones históricas discutidas y de las interpretaciones filosóficas propias del MEU.</p>
<p className={body}>Las fechas de las obras modernas corresponden a su primera publicación en la lengua indicada, no a una edición española concreta. En los textos antiguos distinguimos composición, copia y redacción cuando corresponde; sus dataciones son aproximadas. Los títulos españoles identifican las obras; cuando pudimos verificar una edición española concreta (editorial, traductor, año e ISBN), la indicamos, sin que ello implique recomendarla sobre otras.</p>
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
{e.es && <p className={body}><strong className={label}>Edición en español:</strong> {e.es}</p>}
</div>
))}
</section>
))}

</div></div></main>
  );
}
