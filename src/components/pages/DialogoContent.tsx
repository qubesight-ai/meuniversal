const h1 = "font-display-lg text-display-lg text-primary tracking-tight";
const intro = "font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed";
const h2 = "font-headline-lg text-headline-lg text-primary tracking-tight";
const body = "font-body-md text-body-md text-on-surface-variant leading-relaxed";
const section = "flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm";
const label = "font-semibold text-primary";

type Debate = { title: string; objection: string; answer: string; limits: string; question: string; objectionLabel?: string; extra?: string };

const DEBATES: Debate[] = [
  {
    title: "1. ¿Por qué creer en el Dios de Abraham?",
    objection: "No hay pruebas concluyentes de la existencia de Dios. Los argumentos clásicos han recibido críticas serias, y el mundo puede describirse sin recurrir a lo divino. Si el MEU valora tanto la razón y la humildad epistemológica, lo coherente sería suspender el juicio o no creer. Además, ¿por qué precisamente el Dios de Abraham, y no otra concepción de lo divino?",
    answer: "Coincidimos en que no hay pruebas concluyentes. Por eso hablamos de fe, no de demostración. Nuestra fe no pretende sustituir a la razón, sino responder a preguntas que la razón plantea pero no cierra: por qué existe algo, por qué la experiencia moral se nos impone con tanta fuerza. Elegimos la expresión «Dios de Abraham» porque nombra una herencia histórica concreta con la que dialogamos, no porque consideremos inferiores otras concepciones.",
    limits: "Que una pregunta quede abierta no justifica, por sí solo, una respuesta concreta. La elección del Dios de Abraham tiene también un componente cultural e histórico que no podemos presentar como puramente racional.",
    question: "¿Puede una creencia ser razonable sin ser demostrable? ¿Dónde está la línea entre la fe razonable y la creencia arbitraria?",
  },
  {
    title: "2. ¿Puede existir moralidad sin religión?",
    objectionLabel: "La objeción (desde dos lados).",
    objection: "Algunas personas creyentes sostienen que sin Dios no hay fundamento objetivo para la moral. Algunas personas no creyentes sostienen lo contrario: que la moral no necesita a Dios, y que si el MEU admite una ética universal racional, su fe resulta superflua para la ética.",
    answer: "Creemos que una persona puede ser profundamente ética sin creer en Dios; la experiencia lo muestra a diario. Por eso proponemos una ética que pueda justificarse ante cualquiera. Nuestra fe no es la condición de la ética, sino un horizonte desde el cual algunos vivimos esa ética con sentido.",
    limits: "Ante la primera objeción, no ofrecemos un fundamento último de la moral, y la pregunta sigue abierta (ver Fundamentos). Ante la segunda, reconocemos que nuestra fe no añade razones éticas que una persona no creyente no pueda tener; su papel es más existencial que argumentativo.",
    question: "¿Qué haría que una norma moral fuera válida para todos, con o sin Dios?",
  },
  {
    title: "3. ¿Por qué reconocer a Jesús como sabio y no como profeta?",
    objection: "Para el cristianismo, Jesús es mucho más que un sabio; para el islam, es un profeta. Reducirlo a un maestro ético parece una elección selectiva: se aceptan sus enseñanzas morales y se descartan las afirmaciones que las fuentes le atribuyen sobre sí mismo y su misión. Además, si el MEU admite una posible inspiración divina, ¿por qué no llamarlo profeta?",
    answer: "Nuestra posición es una interpretación, no un juicio sobre la fe de otros. Valoramos en Jesús lo que podemos reconocer desde nuestra perspectiva: su ética del amor al prójimo y su atención a los excluidos. No lo reconocemos como profeta según nuestra propia interpretación teológica, porque no atribuimos a ningún ser humano una autoridad especial e incuestionable sobre la voluntad divina. Con ello no afirmamos que todas las tradiciones consideren infalibles a sus profetas; cada tradición entiende la profecía a su manera, y nos limitamos a explicar por qué esa categoría no forma parte de nuestra lectura.",
    limits: "Toda lectura de las fuentes sobre Jesús implica seleccionar, y la nuestra también. El debate histórico sobre qué dijo y pensó Jesús es complejo, y no lo hemos resuelto. Distinguir entre «posible inspiración» y «profecía» puede parecer sutil, y requiere más desarrollo.",
    question: "¿Es posible honrar a una figura religiosa sin aceptar todo lo que su tradición afirma de ella?",
  },
  {
    title: "4. ¿Qué sentido tiene hacer el bien si no existe recompensa después de la muerte?",
    objection: "Si todo termina con la muerte, la injusticia sufrida por muchas personas nunca será reparada, y quienes obraron mal nunca rendirán cuentas. Para muchas tradiciones, la esperanza en una justicia final da sentido al sufrimiento y sostiene el esfuerzo moral. Renunciar a ella puede conducir a la desesperanza.",
    answer: "Hacemos el bien porque las personas importan ahora, no para obtener algo después. Una bondad motivada principalmente por la recompensa se parece más a una inversión que a la compasión. La ausencia de una justicia final, si así fuera, no nos dispensaría de buscar justicia: la haría más urgente.",
    limits: "La objeción toca un punto doloroso: las víctimas que nunca obtuvieron justicia. Nuestra posición no les ofrece consuelo equivalente, y debemos reconocerlo con honestidad. Además, no sabemos con certeza qué ocurre tras la muerte: nuestra posición es una interpretación teológica contemporánea, no una demostración científica ni un conocimiento.",
    question: "¿Puede una vida tener sentido aunque no todas sus injusticias sean reparadas?",
  },
  {
    title: "5. ¿No es contradictorio afirmar un solo Dios y defender el pluralismo religioso?",
    objection: "Si existe un único Dios, las afirmaciones contradictorias de las distintas religiones sobre él no pueden ser todas verdaderas. Defender el pluralismo parece, entonces, una forma de relativismo, o bien una cortesía que oculta la convicción de tener razón.",
    answer: "No afirmamos que todas las doctrinas sean equivalentes ni verdaderas a la vez. Afirmamos dos cosas compatibles: que ninguna tradición, tampoco la nuestra, comprende plenamente a Dios; y que la dignidad de las personas no depende de que acierten en teología. Nuestro pluralismo es ético y epistemológico, no un relativismo sobre la verdad.",
    limits: "Sigue existiendo una tensión entre sostener convicciones propias y reconocer que otros pueden tener razón donde nosotros nos equivocamos. No la disolvemos; intentamos vivirla con honestidad.",
    question: "¿Es posible tener convicciones firmes y, al mismo tiempo, tomarse en serio la posibilidad de estar equivocado?",
  },
  {
    title: "6. ¿Cómo sabemos que nuestra interpretación del Demiurgo no es también dogmática?",
    objection: "El MEU usa el Demiurgo para señalar las representaciones absolutizadas de Dios. Pero ¿quién decide cuál es una representación absolutizada? El símbolo podría convertirse en un arma retórica: llamar «Demiurgo» a lo que no nos gusta y reservar para nosotros la imagen correcta de Dios.",
    answer: "La objeción es justa, y es precisamente el riesgo que el símbolo debe vigilar. Por eso insistimos en que se aplica primero a nosotros mismos y nunca como etiqueta contra otras religiones. Si el MEU usara el Demiurgo para descalificar a otros, estaría incurriendo en aquello que el símbolo denuncia.",
    limits: "Una intención declarada no garantiza su cumplimiento. No tenemos un criterio infalible para distinguir una imagen de Dios absolutizada de una que no lo es; solo el examen crítico continuo y la apertura a que otros nos señalen nuestros errores.",
    question: "¿Qué señales podrían indicarnos que hemos convertido nuestras propias ideas en un absoluto?",
  },
  {
    title: "7. ¿Puede una filosofía inspirada en el judaísmo separarse legítimamente de sus interpretaciones tradicionales?",
    objection: "El MEU usa conceptos de origen judío —el Dios de Abraham, Tikkun Olam, la referencia a los saduceos— pero los reinterpreta con libertad, fuera de las comunidades que los han transmitido durante siglos. Esto puede verse como una apropiación: tomar términos de una tradición viva y darles un sentido que esa tradición no reconoce.",
    answer: "Reconocemos nuestra deuda con el pensamiento judío y no pretendemos hablar en su nombre. Cuando usamos estos conceptos, procuramos indicar de dónde proceden, qué significaron históricamente y en qué se aparta nuestra relectura. No nos presentamos como judaísmo ni como su continuación.",
    limits: "La preocupación por la apropiación no se resuelve solo con advertencias. Las comunidades judías tienen razones legítimas para cuestionar ciertos usos de sus conceptos, y debemos escucharlas.",
    question: "¿Qué distingue el diálogo respetuoso con una tradición de la apropiación de sus palabras?",
  },
  {
    title: "8. ¿Qué diferencia al MEU de una religión organizada?",
    objection: "El MEU tiene un Dios, afirmaciones de fe, principios éticos y un fundador. Llamarse «propuesta filosófica» podría ser una manera de evitar las críticas que se dirigen a las religiones, sin dejar de serlo.",
    answer: "Es cierto que el MEU incluye convicciones de fe, y no lo ocultamos: nos presentamos como una propuesta filosófica con convicciones teológicas. Lo que intentamos evitar son rasgos concretos que asociamos a muchas formas de religión organizada: autoridades infalibles, obediencia exigida, clero mediador, conversión necesaria, pertenencia exclusiva o sanciones por disentir. Si estos rasgos aparecieran, sería legítimo criticarnos por ello.",
    extra: "No pretendemos imponer a terceros una definición de lo que constituye una religión. Quien considere que el MEU es una religión según sus propios criterios tiene derecho a hacerlo; nosotros solo explicamos cómo nos entendemos a nosotros mismos y qué rasgos rechazamos.",
    limits: "La frontera entre filosofía con convicciones de fe y religión no es nítida. Además, muchas religiones organizadas no presentan los rasgos que mencionamos, y no queremos caricaturizarlas. Toda comunidad humana corre el riesgo de institucionalizarse con el tiempo.",
    question: "¿Qué debería hacer una comunidad para no convertirse en aquello que critica?",
  },
];

export function DialogoContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>Diálogo, preguntas y críticas al MEU</h1>
<p className={intro}>Una biblioteca de objeciones. Cada una se formula de la manera más sólida que hemos podido, seguida de nuestra respuesta provisional, sus límites y una pregunta para seguir pensando. No pretendemos haber refutado ninguna posición.</p>
</header>

{DEBATES.map((d) => (
<section key={d.title} className={section}>
<h2 className={h2}>{d.title}</h2>
<p className={body}><strong className={label}>{d.objectionLabel ?? "La objeción."}</strong> {d.objection}</p>
<p className={body}><strong className={label}>Respuesta provisional del MEU.</strong> {d.answer}</p>
{d.extra && <p className={body}>{d.extra}</p>}
<p className={body}><strong className={label}>Límites de esta respuesta.</strong> {d.limits}</p>
<p className={body}><strong className={label}>Para seguir pensando.</strong> {d.question}</p>
</section>
))}

<p className="font-body-sm text-body-sm text-on-surface-variant italic text-center">Esta biblioteca está abierta a nuevas objeciones. No hay por ahora foro ni comentarios en el sitio.</p>

</div></div></main>
  );
}
