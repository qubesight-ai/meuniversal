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
    title: "1. Educación y pensamiento crítico",
    fundamento: "La libertad de conciencia necesita personas capaces de pensar por sí mismas. Sin acceso al conocimiento y sin herramientas para evaluarlo, la libertad se vuelve frágil.",
    problema: "La desinformación, la falta de acceso a una educación de calidad y la dificultad para dialogar con quien piensa distinto.",
    acciones: [
      "Compartir lo que uno sabe: enseñar una habilidad, acompañar a alguien en sus estudios, apoyar la alfabetización de personas adultas.",
      "Verificar antes de compartir una información, y explicar a otros cómo hacerlo.",
      "Organizar o participar en espacios de lectura y conversación donde se escuchen posturas diferentes.",
      "Revisar periódicamente las propias opiniones a la luz de argumentos contrarios.",
    ],
    preguntas: [
      "¿Cuándo cambié de opinión por última vez gracias a un buen argumento?",
      "¿Con quién me cuesta dialogar, y por qué?",
    ],
  },
  {
    title: "2. Justicia social",
    fundamento: "Si todas las personas tienen igual dignidad, las desigualdades que dependen de circunstancias no elegidas exigen respuesta.",
    problema: "La exclusión por origen, género, condición económica, discapacidad, creencia u otras razones, y la falta de oportunidades reales para muchas personas.",
    acciones: [
      "Tratar con igual respeto a todas las personas en el trato cotidiano y profesional.",
      "Informarse sobre las desigualdades del propio entorno antes de opinar sobre ellas.",
      "Apoyar, con tiempo o recursos, iniciativas locales serias que amplíen oportunidades.",
      "Ejercer los derechos cívicos —votar, participar, denunciar abusos— de forma informada.",
    ],
    preguntas: [
      "¿Qué ventajas tengo que no elegí?",
      "¿A quién no estoy viendo en mi entorno?",
    ],
  },
  {
    title: "3. Solidaridad y acompañamiento",
    fundamento: "La compasión no se demuestra con declaraciones, sino con presencia. Ayudar a quien sufre es un deber que no depende de sus creencias ni de las nuestras.",
    problema: "La soledad, la enfermedad, la pobreza, la migración forzada y otras situaciones de vulnerabilidad.",
    acciones: [
      "Acompañar a personas mayores, enfermas o solas de nuestro entorno.",
      "Ofrecer ayuda concreta —tiempo, escucha, apoyo práctico— a quien atraviesa una crisis.",
      "Colaborar con iniciativas de ayuda existentes en la propia comunidad, verificando antes su seriedad.",
      "Ayudar sin pedir nada a cambio, y nunca como forma de proselitismo.",
    ],
    preguntas: [
      "¿Quién de mi entorno necesita compañía y no la pide?",
      "¿Ayudo esperando reconocimiento?",
    ],
  },
  {
    title: "4. Naturaleza y responsabilidad ambiental",
    fundamento: "Somos responsables de las consecuencias de nuestras acciones, también de las que afectarán a quienes aún no han nacido. La vida que valoramos depende de ecosistemas que podemos dañar o proteger.",
    problema: "La degradación ambiental, la pérdida de biodiversidad y el cambio climático, que afectan con mayor dureza a las personas más vulnerables.",
    acciones: [
      "Reducir el consumo innecesario y el desperdicio.",
      "Informarse con fuentes científicas fiables sobre los problemas ambientales.",
      "Cuidar los espacios naturales cercanos y participar en su protección.",
      "Tener en cuenta el impacto ambiental en las decisiones personales y profesionales.",
    ],
    preguntas: [
      "¿Qué mundo estoy dejando a quienes vendrán?",
      "¿Qué hábito podría cambiar este mes?",
    ],
  },
  {
    title: "5. Reconciliación y reconstrucción humana",
    fundamento: "Toda persona es responsable del daño que causa. Pero ninguna se reduce a sus peores actos. La justicia que defendemos busca reparar a las víctimas y, cuando es posible, permitir que quien causó daño se transforme y se reintegre.",
    precision: "Ninguna víctima tiene obligación de perdonar, reconciliarse ni mantener contacto con quien le causó daño. La dignidad, la seguridad y la autonomía de las víctimas tienen siempre prioridad sobre cualquier proceso de reconciliación. Pedir perdón es responsabilidad de quien dañó; concederlo es una decisión libre de quien sufrió el daño, y nadie puede exigírsela.",
    problema: "El daño entre personas y comunidades, la falta de reparación para las víctimas, y la exclusión permanente de quienes han cometido errores aunque hayan asumido su responsabilidad.",
    acciones: [
      "Reconocer el daño que uno mismo ha causado y procurar repararlo.",
      "Escuchar a quienes han sido dañados antes de hablar de perdón.",
      "Evitar reducir a las personas a sus errores pasados en el trato cotidiano.",
      "Informarse sobre prácticas de justicia restaurativa y su aplicación responsable.",
    ],
    preguntas: [
      "¿Hay algún daño que causé y aún no he reparado?",
      "¿A quién sigo juzgando solo por lo peor que hizo?",
    ],
  },
];

export function AccionEticaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[800px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col space-y-space-xl">

<header className="flex flex-col space-y-space-md">
<h1 className={h1}>Reparar el mundo: de la reflexión a la acción</h1>
<p className={intro}>Cómo el MEU propone traducir sus principios en compromisos concretos. Todo lo que sigue son propuestas, no logros realizados ni programas existentes.</p>
<p className={lead}>Una filosofía que no cambia nada en la vida de las personas corre el riesgo de quedarse en palabras. El Tikkun Olam —la reparación del mundo— es para el MEU el puente entre la reflexión y la acción.</p>
<p className={body}>No hace falta pertenecer a ninguna organización para practicarlo. La mayoría de las acciones que proponemos están al alcance de cualquier persona, en su casa, su trabajo o su barrio. Ninguna exige compartir nuestras creencias, y ninguna debe usarse para atraer adhesiones.</p>
</header>

{AREAS.map((a) => (
<section key={a.title} className={section}>
<h2 className={h2}>{a.title}</h2>
<p className={body}><strong className={label}>Fundamento ético.</strong> {a.fundamento}</p>
{a.precision && (
<div className="p-space-md bg-surface-container-high rounded-sm">
<p className={body}><strong className={label}>Una precisión esencial.</strong> {a.precision}</p>
</div>
)}
<p className={body}><strong className={label}>Problema humano.</strong> {a.problema}</p>
<div className="flex flex-col space-y-1">
<p className={body}><strong className={label}>Acciones posibles.</strong></p>
<ul className="list-disc pl-6 flex flex-col space-y-1">
{a.acciones.map((x) => <li key={x} className={body}>{x}</li>)}
</ul>
</div>
<div className="flex flex-col space-y-1">
<p className={body}><strong className={label}>Preguntas de reflexión.</strong></p>
<ul className="list-disc pl-6 flex flex-col space-y-1">
{a.preguntas.map((x) => <li key={x} className={body}>{x}</li>)}
</ul>
</div>
</section>
))}

<section className={section}>
<h2 className={h2}>Una nota sobre los límites</h2>
<p className={body}>Estas propuestas no sustituyen la acción de las instituciones ni la de profesionales. Tampoco pretenden que una persona sola pueda reparar el mundo. Proponen algo más modesto: que cada uno haga lo que esté a su alcance, con honestidad y sin esperar recompensa.</p>
</section>

<blockquote className={quote}>
<p className={aphorism}>«No hacemos el bien para merecer otra vida. Hacemos el bien porque esta vida importa».</p>
</blockquote>

</div></div></main>
  );
}
