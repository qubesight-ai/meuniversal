import { Link } from "@tanstack/react-router";

export function PreguntasContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-space-xs text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Tratado VI • Dialéctica & Hermenéutica</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Preguntas Frecuentes</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant italic mt-1">Una filosofía que no teme ser cuestionada.</p>
</div>
<div className="flex flex-col md:items-end text-left md:text-right">
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">Codex Quaestiones</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">13 Disputaciones Fundamentales</span>
</div>
</div>

<div className="w-full h-[1px] bg-outline-variant/30 my-space-xs" />
</section>

<section className="w-full mb-space-xl">
<div className="relative overflow-hidden rounded-xl bg-surface-container shadow-md p-space-lg md:p-space-xl flex flex-col md:flex-row gap-space-lg items-center">
<div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
<div className="w-full md:w-1/3 shrink-0 h-56 rounded-lg overflow-hidden relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close-up of ancient scholarly parchment and illuminated manuscript folios under warm candlelight, quill pen with brass inkwell resting on weathered dark oak desk, classical scriptorium atmosphere in deep indigo, antique gold and vellum tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7CHJ4oHnGLPzekC1AOOW4oMVhTi1VSFBdpvfaG2LlGUgnGSu5FSDYIV5rRAwYJQp5JO7918RIMBQhmBdsE60ijO3jChoveSwUEm9sHI3w5xRTJ9QUKS-UzyrjNJkrtUl3KKvFs0fXPOjDW0g4-8yTTqCXh5jlf__6T4Jb2f5VHEeY3LjrHEu4c88tR1ETwNBF0l8cs69W8y3ZBIfLa51d_2jLBHCMdaas9VUQErI" />
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
</div>
<div className="flex flex-col md:w-2/3 space-y-3 z-10">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary" />
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Premisa Epistémica</span>
</div>
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          «Preguntar también es una forma de sabiduría. Quien interroga con honradez no profana el misterio; lo habita con la dignidad de la razón concedida.»
        </p>
<p className="font-body-md text-body-md text-on-surface-variant pt-2">
          El Monoteísmo Ético Universalista (MEU) no impone dogmas cerrados ni exige la abdicación del intelecto. Aquí reunimos las disputaciones esenciales que abordan nuestra postura ante las religiones históricas, la teología racional, el problema del demiurgo y la responsabilidad terrenal sin promesas ultraterrenas.
        </p>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col md:flex-row gap-space-md items-center justify-between">
<div className="relative w-full md:w-1/2">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:ring-1 focus:ring-secondary shadow-sm transition-all" id="faq-search" placeholder="Buscar por concepto: Tikkun, Demiurgo, fe, ética..." type="text" />
</div>
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0" id="filter-buttons">
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-primary text-on-primary shadow-sm" data-filter="all">
          Todas (13)
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t1">
          Tratado I: Identidad
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t2">
          Tratado II: Teología
        </button>
<button className="filter-btn px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 bg-surface-container-high hover:bg-surface-variant text-on-surface" data-filter="t3">
          Tratado III: Ética & Finitud
        </button>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-space-xl items-start">

<div className="lg:col-span-6 flex flex-col space-y-space-md" id="col-tratado-1">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm bg-secondary/15 text-secondary px-2.5 py-1 rounded uppercase tracking-wider">Tratado I</span>
<h2 className="font-headline-md text-headline-md text-primary">Identidad y Convivencia</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">6 Artículos</span>
</div>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué es el Monoteísmo Ético Universalista (MEU)?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            El MEU es una corriente filosófico-teológica que concibe a la Divinidad Primordial como una Causa Primera infinita, inmaterial, indivisible y trascendente. No se estructura como un credo clerical ni promete salvaciones mágicas; postula que el único puente legítimo entre el ser humano y el Infinito es el ejercicio inquebrantable de la justicia moral, la racionalidad crítica y la compasión universal.
          </p>
<div className="p-space-sm bg-surface-container-low rounded-lg text-primary text-body-sm font-body-sm italic">
            «La fe que anula la razón es fanatismo; la razón que desprecia el asombro es esterilidad.»
          </div>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Es el MEU una religión nueva o una secta?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Categóricamente no. El MEU carece de dogmas de obediencia ciega, clero sacerdotal, diezmos preceptivos o líderes mesiánicos infalibles. Se comprende a sí mismo como una **escuela de pensamiento y una hermandad ética**. No busca fundar una institución que compita por feligreses, sino articular una síntesis depurada donde la razón ilustrada y el monoteísmo radical convergen.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Debo abandonar mi religión actual para abrazar el MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No se exige renuncia administrativa ni apostasía pública. Muchos simpatizantes participan del MEU como marco hermenéutico crítico dentro de sus propias tradiciones (judía, cristiana liberal, deísta o humanista). Lo único incompatible con el MEU son aquellas prácticas o doctrinas que cosifican a Dios, promueven el odio tribal, la idolatría ciega o el desprecio de los derechos humanos inalienables.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.IV</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Buscan convertir activamente a otros credos?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Rechazamos el proselitismo agresivo y cualquier forma de coerción espiritual. La convicción auténtica brota del discernimiento personal y la madurez ética, no de la persuasión oratoria ni del temor al castigo eterno. Nuestra vocación es la claridad testimonial y el diálogo dialéctico abierto para quien busca voluntariamente esta senda.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.V</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué tipo de autoridad tiene el fundador o redactor del MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Únicamente una autoridad magisterial y facilitadora: la de un escriba o compilador dialéctico. Nadie en el MEU posee facultades sacerdotales de absolución, mediación o infalibilidad exegética. La verdad de cualquier afirmación reside en su consistencia ética y su rigor racional, nunca en la investidura de quien la pronuncie.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t1">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">I.VI</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Tienen cabida las personas ateas o agnósticas en el MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Completamente. Quien rechaza las representaciones antropomórficas, mitológicas o tiránicas de las deidades históricas se encuentra muy próximo al núcleo purificador del MEU. Valoramos infinitamente más la rectitud del acto moral y la compasión hacia el prójimo que la suscripción nominal a una fórmula metafísica. En el MEU, el compromiso con el bien común antecede a la profesión ontológica.
          </p>
</div>
</article>
</div>

<div className="lg:col-span-6 flex flex-col space-y-space-md" id="col-tratado-2-3">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm bg-secondary/15 text-secondary px-2.5 py-1 rounded uppercase tracking-wider">Tratados II & III</span>
<h2 className="font-headline-md text-headline-md text-primary">Teología, Símbolos y Finitud</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">7 Artículos</span>
</div>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Quién tiene autoridad para interpretar a Hashem?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Ningún pontífice ni asamblea privada tiene el monopolio de lo Inefable. La interpretación de Hashem (el Nombre Supremo indivisible) es una tarea mancomunada de la conciencia humana orientada por la justicia, la razón y el estudio filológico. Afirmar que un grupo humano posee la voz exclusiva de Dios es, en sí mismo, la antesala de la idolatría teológica.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Consideran a Jesús como Dios encarnado?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No. Para el monoteísmo estricto del MEU, la Causa Primera no se encarna, no se subdivide ni adquiere corporalidad biológica. Consideramos a Jesús de Nazaret como un insigne maestro ético y profético de su pueblo, profundamente comprometido con los desposeídos y la dignidad moral, cuya posterior deificación responde a sincretismos helenísticos e imperiales que desdibujaron la unicidad radical del Creador.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué es el "Demiurgo" en la perspectiva del MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            No sostenemos una entidad mítica literal de corte gnóstico arcaico, sino que empleamos el término como una **metáfora crítica**: el «demiurgo» encarna todos los ídolos creados por la ambición humana (el poder despótico, la codicia material, las estructuras eclesiales opresoras) que se hacen pasar por Dios exigiendo sacrificios. Desmontar al demiurgo es liberar a la conciencia de las proyecciones idolátricas de los hombres.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t2">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">II.IV</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué significa el concepto de Gnosis en este marco?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            En el MEU, *gnosis* no es un conocimiento secreto o elitista reservado a iniciados, sino el despertar lúcido de la autoconciencia moral. Es el acto reflexivo mediante el cual el ser humano reconoce la huella de la Fuente Universal en su propia capacidad de juicio, despojándose de mitologías adormecedoras para asumir su adultez ética.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.I</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Hay vida después de la muerte según el MEU?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Mantenemos una sobria abstinencia dogmática. La vida física es un don finito y seguro; el más allá, un misterio insondable. No especulamos con cielos voluptuosos ni infiernos de tortura. Quien obra rectamente esperando una compensación post-mortem actúa por codicia de gloria; quien hace el bien aquí y ahora, por reverencia al prójimo, cumple el designio de la vida sin necesidad de promesas mercenarias.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.II</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Por qué hacer el bien si no existe premio ni castigo eterno?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            Porque la bondad es la máxima afirmación del orden cósmico y de la dignidad del ser. La ética autónoma no necesita del soborno del paraíso ni del chantaje del abismo; encuentra su validez intrínseca en aliviar el dolor ajeno, ennoblecer la existencia y preservar el tejido del mundo para las generaciones venideras.
          </p>
</div>
</article>

<article className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md" data-category="t3">
<button className="faq-trigger w-full flex items-start justify-between text-left gap-4 focus:outline-none">
<div className="flex items-start gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1 shrink-0">III.III</span>
<span className="font-headline-sm text-headline-sm text-primary leading-snug">¿Qué significa el principio de Tikkún Olám en la práctica diaria?</span>
</div>
<span className="material-symbols-outlined faq-icon text-secondary transition-transform duration-300 shrink-0 mt-1">expand_more</span>
</button>
<div className="faq-content hidden pt-space-sm pl-7 text-on-surface-variant font-body-md text-body-md space-y-3">
<p>
            *Tikkún Olám* («Reparación del Mundo») es el eje rector del MEU. Implica que el cosmos no fue creado como una obra inerte y perfecta, sino como un proyecto en curso entregado a la responsabilidad humana. En lo cotidiano, se traduce en justicia restaurativa, cuidado ecológico, mitigación de la miseria y defensa valiente de la verdad frente a la calumnia o la tiranía.
          </p>
</div>
</article>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="w-full h-48 md:h-64 rounded-xl overflow-hidden relative shadow-md">
<img className="w-full h-full object-cover" data-alt="An expansive classical library archival reading hall with towering cedar bookshelves, marble bust pedestals, sunlight streaming through arched clerestory windows, dust motes dancing in golden air, scholars in contemplation, aesthetic of intellectual quietude in deep prussian blue and warm sand tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDbHJmjpYIRNB1R6apvRlgQsD6GRxuHMDYUNjfKK-L35rQVb1nDiask0eLHU0JJx7YWC7eIyFJJi6BcBj6yNa-AgFEp4Hrk5lvWx9S-zvFzIZXv91CQWA9cQvscPhdEcL8U3sO77W7Sot2h4m7FGHI1iJShinKSoXN17ryKzF94GHm990SYtfnvTctJZHeonGZ9UlqNHofx6bM6JI3wSwbHO8d09Q6kzX2CYHT_1k" />
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent flex items-center p-space-lg md:p-space-xl">
<div className="max-w-lg text-on-primary space-y-2">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.2em] uppercase font-semibold">Exégesis Continua</span>
<p className="font-headline-md text-headline-md font-normal leading-snug">«Las respuestas son puertos temporales; la interrogación ética es el océano perpetuo.»</p>
</div>
</div>
</div>
</section>

<section className="w-full relative overflow-hidden rounded-xl bg-surface-container p-space-lg md:p-space-xl shadow-md mb-space-lg">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-space-md">

<div className="w-20 h-20 text-secondary flex items-center justify-center shrink-0">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 100 100">

<path d="M 50 10 A 40 40 0 1 1 20 25" strokeDasharray="4 2" />
<circle cx="20" cy="25" fill="currentColor" r="3" />

<line strokeWidth="1.8" x1="50" x2="50" y1="28" y2="72" />
<line strokeWidth="1.8" x1="28" x2="72" y1="50" y2="50" />

<polygon fill="currentColor" points="50,22 53,25 50,28 47,25" stroke="none" />
<polygon fill="currentColor" points="50,72 53,75 50,78 47,75" stroke="none" />
<polygon fill="currentColor" points="25,50 28,53 25,56 22,53" stroke="none" />
<polygon fill="currentColor" points="75,50 78,53 75,56 72,53" stroke="none" />
</svg>
</div>
<div className="space-y-2">
<span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">Síntesis Dialéctica</span>
<h3 className="font-display-md text-display-md text-primary">El Círculo de la Razón Dialógica</h3>
</div>
<blockquote className="px-space-md py-space-sm bg-surface-container-high/60 rounded-lg max-w-2xl">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
          «La verdad no teme a la pregunta; teme al censor que prohíbe formularla.»
        </p>
</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
        Si alguna duda persiste o desea profundizar en los fundamentos ontológicos, le invitamos a examinar nuestros ensayos monográficos y tratados completos en la Biblioteca de Reflexiones.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-2">
<Link to="/reflexiones" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm">
<span>Ir a la Biblioteca de Reflexiones</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link to="/nuestro-compromiso" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-surface-container-highest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container font-label-md text-label-md uppercase tracking-wider transition-colors">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Pacto de Compromiso</span>
</Link>
</div>
</div>
</section>


</div></div></main>
  );
}
