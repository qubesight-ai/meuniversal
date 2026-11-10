import { Link } from "@tanstack/react-router";

export function PreguntasContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-space-xs text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Diálogo</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Preguntas Frecuentes</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant italic mt-1">Una filosofía que no teme ser cuestionada.</p>
</div>
<div className="flex flex-col md:items-end text-left md:text-right">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">13 preguntas</span>
</div>
</div>


</section>

<section className="w-full mb-space-xl">
<div className="relative overflow-hidden rounded-sm bg-surface-container p-space-lg md:p-space-xl flex flex-col md:flex-row gap-space-lg items-center">


<div className="flex flex-col md:w-2/3 space-y-3 z-10">
<div className="flex items-center gap-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Antes de empezar</span>
</div>
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          «Preguntar también es una forma de sabiduría.»
        </p>
<p className="font-body-md text-body-md text-on-surface-variant pt-2">
          El Monoteísmo Ético Universalista (MEU) no impone dogmas cerrados ni exige la abdicación del intelecto. Distingue el conocimiento empírico de las convicciones metafísicas: la fe no invalida descubrimientos científicos, y las afirmaciones comprobables se someten a evidencia. Aquí respondemos las preguntas más habituales sobre nuestra relación con otras religiones, nuestra teología, el Demiurgo simbólico y la ética.
        </p>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col md:flex-row gap-space-md items-center justify-between">
<div className="relative w-full md:w-1/2">

<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-sm font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all" id="faq-search" placeholder="Buscar por concepto: Tikkun, Demiurgo, fe, ética..." type="text" />
</div>
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0" id="filter-buttons">
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-primary text-on-primary" data-filter="all">
          Todas (13)
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t1">
          Identidad
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t2">
          Teología
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t3">
          Ética y finitud
        </button>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-space-xl items-start">

<div className="lg:col-span-6 flex flex-col space-y-space-md" id="col-tratado-1">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-primary">Identidad y Convivencia</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">6 preguntas</span>
</div>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué es el Monoteísmo Ético Universalista (MEU)?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            El MEU es una propuesta filosófica contemporánea que afirma la fe en un único Dios universal e indivisible —el Dios de Abraham—, entendido como principio trascendente y fundamento de la existencia, cuya esencia supera nuestra comprensión. Esta es una convicción de fe, no una demostración científica. Se organiza alrededor de seis principios: humildad epistemológica, gnosis crítica, ética universal racional, libertad de conciencia, valor intrínseco de la vida finita y Tikkun Olam. No tiene clero ni promete salvación.
          </p>
<div className="p-space-sm bg-surface-container-low rounded-sm text-primary text-body-sm font-body-sm italic">
            «La fe que anula la razón es fanatismo; la razón que desprecia el asombro es esterilidad.»
          </div>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Es el MEU una religión nueva o una secta?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            El MEU se entiende como una propuesta filosófica y ética, no como una secta: no exige obediencia, no tiene clero, no pide contribuciones obligatorias y no reconoce líderes infalibles. Incluye convicciones de fe, pero no busca competir con otras religiones por miembros.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Debo abandonar mi religión actual para abrazar el MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No se exige renuncia administrativa ni apostasía pública. Muchos simpatizantes participan del MEU como marco hermenéutico crítico dentro de sus propias tradiciones (judía, cristiana liberal, deísta o humanista). Lo único incompatible con el MEU son aquellas prácticas o doctrinas que cosifican a Dios, promueven el odio tribal, la idolatría ciega o el desprecio de los derechos humanos inalienables. Las personas LGBTQ+ participan en igualdad de condiciones; su orientación sexual, identidad de género y relaciones afectivas, incluidos los matrimonios entre personas del mismo sexo, no constituyen pecado ni inferioridad espiritual. Rechazamos la discriminación y las prácticas de conversión. La participación intelectual y comunitaria no exige adhesión a todas las convicciones teológicas del MEU.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.IV</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Buscan convertir activamente a otros credos?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Rechazamos el proselitismo agresivo y cualquier forma de coerción espiritual. La convicción auténtica brota del discernimiento personal y la madurez ética, no de la persuasión oratoria ni del temor al castigo eterno. El bienestar psicológico que pueda acompañar una creencia no demuestra, por sí solo, que sea verdadera. Nuestra vocación es la claridad testimonial y el diálogo dialéctico abierto para quien busca voluntariamente esta senda. Compartimos nuestras enseñanzas mediante la educación, el diálogo y el ejemplo, sin considerar necesaria la conversión de nadie: toda adhesión es libre, consciente y reversible.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.V</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué tipo de autoridad tiene el fundador o redactor del MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Ninguna autoridad espiritual. El fundador es el autor de una propuesta filosófica falible: no es profeta, mediador divino ni autoridad magisterial incuestionable. Sus enseñanzas pueden ser examinadas, cuestionadas o rechazadas; ninguna doctrina es inmune a la crítica. Una idea vale por sus razones, no por quien la propone.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.VI</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Tienen cabida las personas ateas o agnósticas en el MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Sí. El MEU afirma la fe en Dios, pero no exige compartirla para dialogar o colaborar. Personas ateas y agnósticas pueden encontrar afinidad en su ética, su pensamiento crítico y su compromiso con la reparación del mundo, y su desacuerdo teológico es respetado.
          </p>
</div>
</article>
</div>

<div className="lg:col-span-6 flex flex-col space-y-space-md" id="col-tratado-2-3">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-primary">Teología, Símbolos y Finitud</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">7 preguntas</span>
</div>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Quién tiene autoridad para interpretar la voluntad del Dios de Abraham?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Nadie tiene el monopolio de la voluntad de Dios. Reconocemos exclusivamente al Dios de Abraham como autoridad divina; ninguna persona, fundador, maestro, interpretación de las escrituras o institución posee el monopolio de su voluntad. Comprender a Dios es una búsqueda humana compartida, siempre limitada. Por eso desconfiamos de cualquier grupo —incluido el nuestro— que pretenda hablar con la voz exclusiva de Dios.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Consideran a Jesús como Dios encarnado?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No. Consideramos a Jesús de Nazaret un sabio y justo judío, plenamente humano, excepcionalmente valioso por sus enseñanzas éticas. Según nuestra interpretación no es Dios, ni Mesías, ni profeta. No descartamos que haya tenido inspiración divina, pero eso no implicaría infalibilidad. Respetamos que el cristianismo y otras tradiciones lo comprendan de otra manera.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué es el "Demiurgo" en la perspectiva del MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No existe un segundo dios creador. Usamos el término como símbolo de nuestra tendencia humana a absolutizar interpretaciones propias y a confundirlas con la voluntad de Dios. Es una herramienta de autocrítica que aplicamos primero a nosotros mismos, no una etiqueta para desacreditar otras religiones.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.IV</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué significa el concepto de Gnosis en este marco?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            En el MEU, la gnosis no es un conocimiento secreto reservado a iniciados, sino autoconocimiento crítico: revisar los propios prejuicios y cuestionar las representaciones de Dios que hemos absolutizado. No adoptamos la cosmología de los antiguos movimientos gnósticos.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Hay vida después de la muerte según el MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Sostenemos una posición contemporánea, inspirada parcialmente en los saduceos, que no afirma la inmortalidad individual, la resurrección, un juicio final ni recompensas o castigos tras la muerte. No la presentamos como reconstrucción histórica definitiva ni como certeza absoluta. Lo que sí afirmamos es que esta vida tiene valor en sí misma. Si usamos la palabra «alma», lo hacemos poéticamente, sin afirmar la existencia de un alma inmortal.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Por qué hacer el bien si no existe premio ni castigo eterno?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Porque las personas y el mundo importan por sí mismos. La ética no necesita la promesa de un premio ni la amenaza de un castigo: encuentra su sentido en aliviar el sufrimiento, cuidar la vida y dejar un mundo mejor a quienes vendrán.
          </p>
</div>
</article>

<article className="faq-item rounded-sm bg-surface-container-lowest p-space-md transition-all duration-300" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué significa el principio de Tikkún Olám en la práctica diaria?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Tikkun Olam significa «reparación del mundo». Para el MEU es un compromiso práctico: justicia social, educación, solidaridad y cuidado ambiental. La expresión tiene una larga historia en la tradición judía, pero no adoptamos ninguna cosmología como obligatoria.
          </p>
</div>
</article>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="w-full h-48 rounded-sm overflow-hidden relative">

<div className="absolute inset-0 flex items-center p-space-lg md:p-space-xl">
<div className="max-w-lg text-on-primary space-y-2">
<p className="font-headline-md text-headline-md font-normal leading-snug">Las respuestas son provisionales; la pregunta sigue abierta.</p>
</div>
</div>
</div>
</section>

<section className="w-full relative overflow-hidden rounded-sm bg-surface-container p-space-lg md:p-space-xl mb-space-lg">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-space-md">


<div className="space-y-2">
<h3 className="font-display-md text-display-md text-primary">Seguir pensando</h3>
</div>
<blockquote className="px-space-md py-space-sm bg-surface-container-high/60 rounded-sm max-w-2xl">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          «La verdad no teme a la pregunta; teme al censor que prohíbe formularla.»
        </p>
</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
        Si alguna duda persiste, puede leer nuestras reflexiones o revisar nuestro compromiso de convivencia.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-2">
<Link to="/reflexiones" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors">
<span>Ir a Reflexiones</span>

</Link>
<Link to="/nuestro-compromiso" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-surface-container-highest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container font-label-md text-label-md uppercase tracking-wider transition-colors">

<span>Nuestro Compromiso</span>
</Link>
</div>
</div>
</section>


</div></div></main>
  );
}
