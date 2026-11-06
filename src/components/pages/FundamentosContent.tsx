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
<h1 className={h1}>Lo que creemos, lo que razonamos y lo que todavía desconocemos</h1>
<p className={intro}>Una página sobre el grado de certeza de cada cosa que decimos.</p>
<p className={lead}>No todas nuestras afirmaciones tienen el mismo estatus. Algunas son convicciones de fe. Otras son posturas que intentamos justificar con argumentos. Otras, por último, son preguntas que no sabemos responder.</p>
<p className={body}>Distinguirlas es una forma de honestidad. Si presentáramos una convicción de fe como si fuera una demostración, o una pregunta abierta como si estuviera resuelta, estaríamos engañando a quien nos lee, y quizá también a nosotros mismos.</p>
</header>

<section className={section}>
<h2 className={h2}>A. Convicciones teológicas</h2>
<p className={intro}>Lo que sigue son afirmaciones de fe. No son demostraciones científicas ni conclusiones filosóficas obligatorias. Personas razonables pueden no compartirlas.</p>

<div className={item}>
<h3 className={h3}>La existencia del Dios de Abraham</h3>
<p className={body}>Creemos que existe un Dios, al que nombramos «Dios de Abraham» por la raíz histórica que esa expresión comparte con varias tradiciones. No afirmamos poder demostrarlo. Hay consideraciones que nos parecen dignas de peso —la pregunta por el origen de lo que existe, la experiencia moral, el asombro ante el orden del mundo—, pero reconocemos que ninguna obliga racionalmente a creer.</p>
</div>

<div className={item}>
<h3 className={h3}>Su unidad e indivisibilidad</h3>
<p className={body}>Creemos que Dios es uno, universal e indivisible. Esta convicción nos separa de otras comprensiones teológicas, como la doctrina cristiana de la Trinidad, que respetamos aunque no compartimos. No pretendemos conocer la naturaleza de Dios más allá de lo que esta afirmación expresa.</p>
</div>

<div className={item}>
<h3 className={h3}>El valor de la vida por sí misma</h3>
<p className={body}>Creemos que la vida tiene valor en sí misma, y no solo como medio para otra cosa. Esta convicción puede apoyarse en argumentos filosóficos (ver apartado B), pero en su formulación teológica —que la vida fue creada con valor propio— es una afirmación de fe.</p>
</div>

<div className={item}>
<h3 className={h3}>La creación no es una prueba</h3>
<p className={body}>Interpretamos que la creación no es una prueba para obtener recompensas sobrenaturales. Es una interpretación de la intención divina, y por tanto falible: no conocemos los propósitos de Dios con certeza. La sostenemos porque nos parece la más coherente con un Dios bueno, no porque podamos probarla.</p>
</div>
</section>

<section className={section}>
<h2 className={h2}>B. Posturas filosóficas y éticas</h2>
<p className={intro}>Aquí presentamos argumentos. Para que el lector pueda evaluarlos, indicamos qué tipo de afirmación es cada una:</p>
<ul className="list-disc pl-6 flex flex-col space-y-1">
<li className={body}><strong className="font-semibold text-primary">Argumento filosófico:</strong> una razón que pretende convencer a cualquier persona dispuesta a reflexionar.</li>
<li className={body}><strong className="font-semibold text-primary">Compromiso normativo:</strong> una elección sobre cómo queremos vivir, que se puede justificar pero no demostrar.</li>
<li className={body}><strong className="font-semibold text-primary">Afirmación empírica:</strong> algo que puede contrastarse con datos o experiencia.</li>
</ul>

<div className={item}>
<h3 className={h3}>Libertad de conciencia</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> si nadie tiene acceso infalible a la verdad sobre Dios, nadie tiene título legítimo para imponer su interpretación a otros.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> respetamos el derecho de cada persona a creer, dudar o no creer, incluso cuando pensamos que se equivoca.</p>
<p className={body}><em className="text-secondary">Afirmación empírica:</em> la historia ofrece abundantes ejemplos de daños causados por la imposición religiosa.</p>
</div>

<div className={item}>
<h3 className={h3}>Dignidad humana</h3>
<p className={body}><em className="text-secondary">Compromiso fundamental:</em> la dignidad humana es incondicional. No depende de la capacidad individual de razonar, comunicarse, decidir o ser autónomo. Una persona no vale menos por tener menos capacidades, ni por su origen, su creencia, su género o su condición.</p>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> si la dignidad dependiera de capacidades que varían de una persona a otra —y que cualquiera puede perder por enfermedad, edad o accidente—, dejaría de ser igual para todos. Por eso la entendemos como inherente a cada ser humano, no como un reconocimiento que deba ganarse.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> tratamos a toda persona como fin en sí misma, nunca solo como medio.</p>
<p className={body}><em className="text-secondary">Nota:</em> el fundamento último de la dignidad es una pregunta abierta (ver apartado C).</p>
</div>

<div className={item}>
<h3 className={h3}>Justicia social</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> si todas las personas tienen igual dignidad, las desigualdades que no se deben a sus elecciones sino a circunstancias que no eligieron requieren justificación.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> nos comprometemos a reducir la exclusión y ampliar oportunidades.</p>
<p className={body}><em className="text-secondary">Afirmación empírica:</em> las consecuencias de la pobreza y la exclusión sobre la salud, la educación o la esperanza de vida pueden medirse; las políticas concretas para remediarlas deben evaluarse con datos, no con consignas.</p>
</div>

<div className={item}>
<h3 className={h3}>Responsabilidad individual y colectiva</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> somos responsables de lo que hacemos y, en cierta medida, de lo que permitimos que ocurra cuando podríamos evitarlo.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> asumimos la responsabilidad por las consecuencias de nuestras acciones, no solo por nuestras intenciones.</p>
</div>

<div className={item}>
<h3 className={h3}>Pensamiento crítico</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> una creencia que nunca ha sido examinada no puede distinguirse de un prejuicio.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> sometemos también nuestras propias ideas a examen.</p>
</div>

<div className={item}>
<h3 className={h3}>Valor de la vida finita</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> muchas cosas que valoramos —una amistad, una obra, un día compartido— no pierden valor por terminar. La finitud no anula el valor; a menudo lo hace visible.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> vivimos esta vida como algo que importa por sí mismo.</p>
</div>

<div className={item}>
<h3 className={h3}>Rechazo de la coerción espiritual</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> una fe obtenida mediante miedo, culpa o presión no es una adhesión libre, y por tanto pierde el valor que pretende tener.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> rechazamos el uso del miedo, la culpa o las promesas sobrenaturales para influir en las personas.</p>
</div>

<div className={item}>
<h3 className={h3}>Tikkun Olam</h3>
<p className={body}><em className="text-secondary">Argumento filosófico:</em> si el sufrimiento evitable es un mal y podemos reducirlo, tenemos razones para hacerlo.</p>
<p className={body}><em className="text-secondary">Compromiso normativo:</em> nos comprometemos con la reparación práctica del mundo: justicia social, educación, solidaridad y cuidado ambiental.</p>
<p className={body}><em className="text-secondary">Afirmación empírica:</em> la eficacia de cada acción concreta puede y debe evaluarse.</p>
</div>
</section>

<section className={section}>
<h2 className={h2}>C. Preguntas abiertas</h2>
<p className={intro}>No tenemos respuestas definitivas para estas preguntas. Presentamos algunas posibilidades y por qué siguen abiertas.</p>

<div className={item}>
<h3 className={h3}>¿Por qué existe algo en lugar de nada?</h3>
<p className={body}>Es una de las preguntas más antiguas de la filosofía. Algunas personas ven en ella una razón para creer en Dios; otras piensan que la pregunta no tiene respuesta, o que está mal planteada. Nuestra fe no la resuelve: la acompaña.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Qué podemos conocer realmente sobre Dios?</h3>
<p className={body}>Si la esencia de Dios supera nuestra comprensión, ¿qué valor tienen nuestras afirmaciones sobre Dios? Algunas tradiciones han sostenido que es más seguro decir lo que Dios no es que lo que es. No sabemos con precisión dónde está el límite entre lo que podemos afirmar con sentido y lo que excede nuestro lenguaje.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Puede existir una ética universal?</h3>
<p className={body}>Las culturas difieren en muchas normas morales, pero también comparten intuiciones comunes. No sabemos si existe un núcleo ético que toda persona razonable deba aceptar, o si la universalidad es más bien una meta que se construye mediante el diálogo.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Cómo se fundamenta la dignidad humana?</h3>
<p className={body}>¿En la razón, en la capacidad de sufrir, en la relación con Dios, en un acuerdo social? Cada respuesta tiene ventajas y dificultades. Defendemos la dignidad humana con firmeza y como algo incondicional, pero reconocemos que su fundamento último sigue en discusión.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Qué significa vivir una vida buena?</h3>
<p className={body}>¿Placer, virtud, vínculos, sentido, servicio a otros? Probablemente una combinación de ellas, en proporciones que cada persona descubre a lo largo de su vida. No creemos que exista una única forma correcta de vivir bien.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Cómo debemos responder al sufrimiento injusto?</h3>
<p className={body}>Si afirmamos un Dios bueno, el sufrimiento de los inocentes es una objeción seria. No tenemos una explicación que lo resuelva. Sabemos, sí, que la primera respuesta ante el sufrimiento no debe ser una teoría, sino la ayuda.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Qué límites tiene nuestra interpretación de las escrituras?</h3>
<p className={body}>Leemos textos antiguos con ojos contemporáneos. ¿Cuándo una relectura es legítima y cuándo traiciona al texto? ¿Qué autoridad tienen tradiciones interpretativas con siglos de historia frente a nuestra lectura actual? No tenemos un criterio definitivo.</p>
</div>

<div className={item}>
<h3 className={h3}>¿Qué evidencia podría llevarnos a revisar nuestras creencias?</h3>
<p className={body}>Es quizá la pregunta más importante de esta página. Si nada pudiera hacernos cambiar de opinión, nuestras convicciones no serían fruto de la reflexión, sino de la costumbre. Algunas posibles razones de revisión: argumentos que muestren contradicciones internas en nuestras afirmaciones, datos históricos que contradigan nuestras interpretaciones, o consecuencias prácticas de nuestras ideas que resulten dañinas.</p>
</div>
</section>

<p className="font-body-sm text-body-sm text-on-surface-variant italic text-center">Esta página expresa nuestra humildad epistemológica: preferimos reconocer lo que no sabemos antes que aparentar certezas que no tenemos.</p>

</div></div></main>
  );
}
