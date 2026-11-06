import { Link } from "@tanstack/react-router";

export function TeologiaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<header className="relative mb-space-xl">
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Tratado Doctrinal y Teológico • Compendio III</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface">Manuscrito Canónico</span>
<span>•</span>
<span>Revisión MMXXIV</span>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-md pb-space-md">
<div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Lo que afirmamos: Nuestra Teología</h1>
<p className="font-headline-sm text-headline-sm text-secondary font-normal mt-space-xs max-w-3xl">
          La ontología del Uno indivisible, la soberanía de la conciencia moral y la sacralidad irrevocable del presente.
        </p>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px] text-secondary">history_edu</span>
<span>Lectura estimada: 18 min</span>
</div>
</div>
</header>

<section className="mb-space-xl bg-surface-container-high rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="absolute -right-8 -bottom-10 w-48 h-48 rounded-full bg-secondary/10 pointer-events-none blur-2xl" />
<div className="flex flex-col md:flex-row items-start gap-space-md relative z-10">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-[26px]">balance</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Criterio de Intencionalidad Hermenéutica</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
          Estas posiciones constituyen nuestra propia síntesis filosófico-teológica. No pretendemos hablar en nombre de toda la tradición judía, ni del monoteísmo histórico en sus múltiples ramas, ni cancelamos el valor del debate secular. Lo que aquí se expone es el pacto de principios que sostiene nuestra comunidad: una teología racional, radicalmente ética, universalista y desprovista de aparatos punitivos ultramundanos.
        </p>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<aside className="lg:col-span-4 sticky top-28 self-start">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low p-space-sm rounded">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Sumario Dogmático</span>
<span className="material-symbols-outlined text-[16px] text-secondary">explore</span>
</div>
<nav className="flex flex-col space-y-1" id="theology-nav">
<a className="nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 bg-surface-container text-primary font-semibold" href="#hashem">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">I.</span>
<span className="font-body-md text-body-md">Hashem</span>
</div>
<span className="material-symbols-outlined text-[18px] text-secondary">arrow_right</span>
</a>
<a className="nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 hover:bg-surface-container text-on-surface-variant hover:text-primary" href="#demiurgo">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">II.</span>
<span className="font-body-md text-body-md">El Demiurgo Simbólico</span>
</div>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-secondary transition-opacity">arrow_right</span>
</a>
<a className="nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 hover:bg-surface-container text-on-surface-variant hover:text-primary" href="#jesus">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">III.</span>
<span className="font-body-md text-body-md">Jesús de Nazaret</span>
</div>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-secondary transition-opacity">arrow_right</span>
</a>
<a className="nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 hover:bg-surface-container text-on-surface-variant hover:text-primary" href="#muerte-alma">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">IV.</span>
<span className="font-body-md text-body-md">Muerte y Alma</span>
</div>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-secondary transition-opacity">arrow_right</span>
</a>
<a className="nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 hover:bg-surface-container text-on-surface-variant hover:text-primary" href="#proposito">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">V.</span>
<span className="font-body-md text-body-md">Propósito de la Creación</span>
</div>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-secondary transition-opacity">arrow_right</span>
</a>
<a className="nav-item group flex items-center justify-between p-space-sm rounded transition-all duration-200 hover:bg-surface-container text-on-surface-variant hover:text-primary" href="#universalidad">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary group-hover:text-primary">VI.</span>
<span className="font-body-md text-body-md">Universalidad Divina</span>
</div>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-secondary transition-opacity">arrow_right</span>
</a>
</nav>

<div className="mt-space-lg p-space-md rounded-lg bg-surface-container-low text-on-surface-variant">
<div className="flex items-center gap-space-xs text-secondary mb-2">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Axioma Fundamental</span>
</div>
<p className="font-body-sm text-body-sm leading-relaxed">
            «La trascendencia no compite con el universo físico; lo sostiene en su inteligibilidad y reclama de nosotros la acción reparadora.»
          </p>
</div>

<div className="mt-space-md pt-space-sm px-space-sm flex flex-col gap-1">
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Progreso doctrinal</span>
<span className="text-secondary font-semibold" id="scroll-percentage">0%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-secondary transition-all duration-150" id="scroll-bar" style={{"width": "0%"}} />
</div>
</div>
</div>
</aside>

<main className="lg:col-span-8 flex flex-col space-y-space-xl">

<article className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm relative" id="hashem">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Tratado I • Ontología Primaria</span>

<div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shadow-sm" title="Emblema de Hashem: Círculos Concéntricos">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" strokeDasharray="3 3" />
<circle cx="24" cy="24" r="14" />
<circle cx="24" cy="24" r="8" />
<circle cx="24" cy="24" fill="currentColor" r="2.5" />
</svg>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">I. Hashem: El Uno Indivisible y Trascendente</h2>
<div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
            Afirmamos a <em>Hashem</em> como la Realidad Última, la Causa Primera incausada, absoluta e infinitamente simple. Dios no es una entidad entre otras dentro de la bóveda cósmica, ni un gobernante antropomórfico sometido a las pasiones del tiempo. Dios es la Existencia misma que permite que exista lo que existe, absolutamente indivisible, sin multiplicidad de personas, formas ni fragmentaciones ontológicas.
          </p>
<p>
            Rechazamos de plano cualquier postulación de hipóstasis, trinidad o emanatismo jerárquico que diluya la unicidad radical (*Tawhid*, *Shemá*). Dios no encarna, porque lo Infinito no cabe en el receptáculo finito de la carne sin destruir la propia noción de infinitud o degradar la soberanía de lo Creador frente a lo creado.
          </p>
</div>

<blockquote className="my-space-lg bg-primary-container text-on-primary-container p-space-lg rounded-xl shadow-md relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 opacity-10 text-secondary pointer-events-none">
<span className="material-symbols-outlined text-[140px]">all_inclusive</span>
</div>
<p className="font-aphorism text-aphorism text-secondary-fixed italic leading-relaxed mb-space-xs relative z-10">
            «Dios no tiene partes, no tiene intermediarios necesarios y no exige la humillación de la razón para ser discernido. El Uno se manifiesta en el orden moral del cosmos.»
          </p>
<cite className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] not-italic relative z-10">
            — Tesis sobre la Simplicidad Divina, Tratado Primero
          </cite>
</blockquote>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-sm">
<div className="p-space-md rounded-lg bg-surface-container-low">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Racionalismo Teológico</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Inspirados en Maimónides y Spinoza en su vertiente crítica: Dios es aprehensible a través del intelecto y el discernimiento de las leyes naturales que rigen el cosmos.
            </p>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Negación de la Imagen</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Toda representación física, pictórica o conceptual que asigne contorno humano al Creador es idolatría hermenéutica que achica la infinitud divina.
            </p>
</div>
</div>
</article>

<article className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm relative" id="demiurgo">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Tratado II • Crítica Antropológica</span>

<div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shadow-sm" title="Emblema del Demiurgo: Triángulo Interceptado">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
<polygon points="24,6 42,38 6,38" />
<line x1="12" x2="36" y1="26" y2="26" />
<circle cx="24" cy="20" fill="currentColor" r="3" />
</svg>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">II. El Demiurgo Simbólico: La Deconstrucción del Dios Punitivo</h2>
<div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
            En nuestra hermenéutica, la figura del «Demiurgo» no es un dios secundario real de tipo platónico o gnóstico sustancialista, sino una <em>categoría simbólica y psicológica</em>: representa la proyección humana de un poder autoritario, tribal, caprichoso y sediento de sacrificios de sangre.
          </p>
<p>
            Durante milenios, los pueblos han confundido a Hashem con este arquetipo represor —el déspota celestial que premia la sumisión ciega y castiga el libre pensamiento—. Denunciamos esa concepción como una aberración de la idolatría estatal y sacerdotal. Dios no gobierna con el látigo del terror escatológico ni necesita halagos rituales para apaciguar su vanidad.
          </p>
</div>
<div className="my-space-md p-space-md rounded-lg bg-surface-container-high">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">psychology_alt</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">El Demiurgo como Ilusión Colectiva</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
                Cuando los textos antiguos describen a un dios celoso de la inteligencia humana, vengativo o ejecutor de genocidios tribales, identificamos en ellos la impronta arcaica del demiurgo psicológico: la moralidad primitiva de la época proyectada sobre el manto de la eternidad. La tarea del monoteísmo ético es purificar la noción divina de toda barbarie humana.
              </p>
</div>
</div>
</div>
</article>

<article className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm relative" id="jesus">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Tratado III • Hermenéutica Histórica</span>

<div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shadow-sm" title="Emblema del Olivo: Jesús Jajam y Tzadik">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
<path d="M24,42 C24,32 18,24 10,20 C18,20 24,14 24,6 C24,14 30,20 38,20 C30,24 24,32 24,42 Z" />
<circle cx="16" cy="14" fill="currentColor" r="3" />
<circle cx="32" cy="14" fill="currentColor" r="3" />
</svg>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">III. Jesús de Nazaret: Maestro, Sabio y Justo</h2>
<div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
            Reconocemos a Jesús de Nazaret (<em>Yeshúa</em>) en su riguroso contexto histórico y teológico: un profeta moral, un <em>Jajam</em> (sabio fariseo de la escuela ética de Hillel) y un <em>Tzadik</em> (justo) dedicado a proclamar el Reino de los Cielos como una realidad ética inmanente entre los seres humanos.
          </p>
<p>
            Rechazamos taxativamente su deificación posterior: Jesús no fue Dios encarnado, ni la segunda persona de una divinidad tripartita, ni una víctima propiciatoria para calmar la supuesta ira divina. Considerar su ejecución imperial romana como un «sacrificio de expiación» es retrotraer la teología a los cultos mistéricos helénicos de sustitución sacrificial, que la ética bíblica vino expresamente a erradicar.
          </p>
</div>

<blockquote className="my-space-lg bg-primary-container text-on-primary-container p-space-lg rounded-xl shadow-md relative overflow-hidden">
<p className="font-aphorism text-aphorism text-secondary-fixed italic leading-relaxed mb-space-xs relative z-10">
            «Honramos al rabino de la compasión y del perdón al no cometer con él la injusticia de convertirlo en el ídolo que sus propios labios censuraron.»
          </p>
<cite className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] not-italic relative z-10">
            — Comentario al Sermón del Monte y la Ética de los Sabios
          </cite>
</blockquote>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
<div className="p-space-sm rounded bg-surface-container-high text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">Como Jajam</span>
<span className="font-body-sm text-body-sm text-on-surface">Intérprete radical de la Torá centrada en el amor al prójimo.</span>
</div>
<div className="p-space-sm rounded bg-surface-container-high text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">Como Tzadik</span>
<span className="font-body-sm text-body-sm text-on-surface">Testigo vivo de la coherencia entre la palabra y la justicia social.</span>
</div>
<div className="p-space-sm rounded bg-surface-container-high text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">Como Hermano</span>
<span className="font-body-sm text-body-sm text-on-surface">Hijo de la humanidad que llama a todos a ser colaboradores del Creador.</span>
</div>
</div>
</article>

<article className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm relative" id="muerte-alma">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Tratado IV • Escatología y Finitud</span>

<div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shadow-sm" title="Emblema del Horizonte Saduceo: Finitud Sagrada">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
<line x1="4" x2="44" y1="28" y2="28" />
<path d="M12,28 C12,18 20,12 24,12 C28,12 36,18 36,28" strokeDasharray="2 2" />
<line x1="24" x2="24" y1="28" y2="40" />
<line x1="16" x2="32" y1="36" y2="36" />
</svg>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">IV. Muerte y Alma: La Serenidad de la Finitud</h2>
<div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
            Adoptamos una postura escatológica sobria y profundamente arraigada en el estrato primordial de la sabiduría bíblica (el horizonte del Tanaj primitivo y la honestidad de la tradición saducea). El <em>néfesh</em> es el aliento de vida que anima nuestra materia; cuando el cuerpo expira, el soplo retorna a la fuente inmensa de donde provino.
          </p>
<p>
            Rechazamos las mitologías medievales del infierno de tormentos eternos y del purgatorio tarifado: son dispositivos de control moral forjados por el miedo humano. Dios no tortura almas finitas por equivocaciones cronológicas. Tampoco subordinamos la rectitud moral a la promesa de palacios celestes o reencarnaciones mercantiles.
          </p>
</div>

<div className="my-space-lg p-space-lg lg:p-space-xl bg-surface-container-high rounded-xl relative overflow-hidden shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-space-md">
<div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[36px]">hourglass_bottom</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-primary leading-snug font-semibold">
                «No hacemos el bien para merecer otra vida. Hacemos el bien porque esta vida importa.»
              </p>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
                La muerte confiere urgencia, peso ético y belleza insustituible a cada decisión. Quien vive con la obsesión del más allá abdica de su deber supremo en el aquí y el ahora.
              </p>
</div>
</div>
</div>
</article>

<article className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm relative" id="proposito">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Tratado V • Teleología del Tikkún</span>

<div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shadow-sm" title="Emblema de la Vasija Abierta: Tikkún Olam">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
<path d="M10,12 C10,28 14,38 24,38 C34,38 38,28 38,12" />
<line x1="6" x2="42" y1="12" y2="12" />
<path d="M20,22 L24,18 L28,22" strokeLinecap="round" />
<path d="M24,18 L24,30" strokeLinecap="round" />
</svg>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">V. Propósito de la Creación: El Templo de la Responsabilidad</h2>
<div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
            ¿Por qué existe el universo? No para servir de escenario teatral al ego divino, sino como un cosmos deliberadamente abierto e incompleto. La creación no fue un acto sellado en el pasado mítico; es un devenir continuo donde la criatura humana está investida con el rango de <em>socia y co-creadora</em>.
          </p>
<p>
            Este principio se resume en el <strong>Tikkún Olám</strong> (la reparación del orden fracturado). El mal no es una substancia demoníaca autónoma, sino la ausencia de luz ética, la inercia del egoísmo y el daño evitable no corregido. Dios no interviene con rayos taumatúrgicos para ahorrarle al humano su responsabilidad civil: las manos de Dios en el mundo son las manos de quienes defienden al débil, amparan al huérfano y custodian la biosfera.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md">
<div className="p-space-md rounded bg-surface-container-low">
<div className="flex items-center gap-space-xs text-secondary mb-1">
<span className="material-symbols-outlined text-[20px]">architecture</span>
<span className="font-label-sm text-label-sm uppercase">Autonomía Moral</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              No esperamos redenciones pasivas que desciendan de las nubes. La redención se construye día a día a través de instituciones justas, solidaridad real y rigor intelectual.
            </p>
</div>
<div className="p-space-md rounded bg-surface-container-low">
<div className="flex items-center gap-space-xs text-secondary mb-1">
<span className="material-symbols-outlined text-[20px]">eco</span>
<span className="font-label-sm text-label-sm uppercase">Bioética Planetaria</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              La naturaleza no es un botín a saquear, sino la casa común confiada a nuestra mayordomía ética ante la posteridad y la Realidad Trascendente.
            </p>
</div>
</div>
</article>

<article className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm relative" id="universalidad">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Tratado VI • Ciudadanía Cósmica</span>

<div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shadow-sm" title="Emblema de la Constelación: Universalidad">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
<circle cx="24" cy="8" fill="currentColor" r="2.5" />
<circle cx="38" cy="20" fill="currentColor" r="2.5" />
<circle cx="34" cy="38" fill="currentColor" r="2.5" />
<circle cx="14" cy="38" fill="currentColor" r="2.5" />
<circle cx="10" cy="20" fill="currentColor" r="2.5" />
<line strokeDasharray="2 2" x1="24" x2="38" y1="8" y2="20" />
<line strokeDasharray="2 2" x1="38" x2="34" y1="20" y2="38" />
<line strokeDasharray="2 2" x1="34" x2="14" y1="38" y2="38" />
<line strokeDasharray="2 2" x1="14" x2="10" y1="38" y2="20" />
<line strokeDasharray="2 2" x1="10" x2="24" y1="20" y2="8" />
<circle cx="24" cy="24" r="5" />
</svg>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">VI. Universalidad Divina: La Alianza Sin Fronteras</h2>
<div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
<p>
            Si Dios es Uno, la humanidad es una sola familia sagrada. Rechazamos cualquier concepción teológica que establezca privilegios ontológicos, predilecciones étnicas absolutas o pasaportes exclusivos hacia la bondad divina. El pacto primordial es universal: abarca a todo ser humano que practique la rectitud, el cuidado del prójimo y el respeto por la vida.
          </p>
<p>
            El universalismo ético significa que la verdad y la piedad no son monopolio de una sola religión histórica, texto canónico o linaje sanguíneo. Las diversas tradiciones espirituales son tentativas culturales de aproximación al mismo Misterio Insondable. Dondequiera que haya compasión, justicia desinteresada y discernimiento racional, allí mora la presencia del Uno.
          </p>
</div>

<blockquote className="my-space-lg bg-primary-container text-on-primary-container p-space-lg rounded-xl shadow-md relative overflow-hidden">
<div className="absolute -left-6 -top-6 opacity-10 text-secondary pointer-events-none">
<span className="material-symbols-outlined text-[140px]">public</span>
</div>
<p className="font-aphorism text-aphorism text-secondary-fixed italic leading-relaxed mb-space-xs relative z-10">
            «Los justos de todas las naciones del mundo, de todas las filosofías y de todos los tiempos, tienen porción plena en la dignidad de la vida eterna que hoy construimos.»
          </p>
<cite className="block font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] not-italic relative z-10">
            — Declaración del Pacto Moral Universal, MEU
          </cite>
</blockquote>
<div className="p-space-md rounded-lg bg-surface-container-high flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[28px]">handshake</span>
<div>
<span className="font-headline-sm text-headline-sm text-primary block">La Alianza Noáquida Universal</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Siete leyes de equidad civil como piso ético para la convivencia entre todas las culturas.</span>
</div>
</div>
</div>
</article>

<section className="mt-space-xl p-space-xl rounded-xl bg-surface-container-low shadow-sm">
<div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="space-y-space-xs max-w-xl">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span className="font-label-sm text-label-sm uppercase tracking-[0.2em]">Siguiente Tratado Canónico</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Nuestras Raíces: El Linaje Histórico</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Descubra las corrientes proféticas, el racionalismo andalusí, los humanismos del Renacimiento y la Ilustración que confluyen en la arquitectura del Monoteísmo Ético Universalista.
            </p>
</div>
<Link to="/nuestras-raices" className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm flex-shrink-0 group">
<span>Avanzar al Compendio IV</span>
<span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</Link>
</div>
</section>
</main>
</div>
</div>
</div></main>
  );
}
