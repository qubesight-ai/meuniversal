import { Link } from "@tanstack/react-router";

export function FilosofiaContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
<div className="flex flex-col space-y-2">
<div className="flex items-center gap-space-xs text-secondary">

<span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Tratado Filosófico • Compendio II</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary max-w-4xl tracking-tight">
          Nuestra Filosofía: Razón, Finitud y Trascendencia
        </h1>
</div>

</div>

<div className="p-space-lg rounded-sm bg-surface-container-low flex flex-col md:flex-row gap-space-lg items-center justify-between">
<p className="font-body-lg text-body-lg text-on-surface max-w-3xl leading-relaxed">
        El Monoteísmo Ético Universalista postula que el acto de pensar no es una concesión litúrgica, sino la primera responsabilidad del ser autoconsciente. Despojados de ficciones providenciales que exculpan la negligencia humana, la existencia se afirma en la tensión entre la finitud temporal y el imperativo moral de reparación inmanente.
      </p>
<div className="flex items-center gap-4 shrink-0">

<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Axioma Fundamental</span>
<span className="font-headline-sm text-headline-sm text-primary">Cogito Ergo Reparo</span>
</div>
</div>
</div>
</section>

<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mt-space-md">

<aside className="lg:col-span-4 xl:col-span-3">
<div className="sticky top-28 flex flex-col p-space-md bg-surface-container-lowest rounded-sm space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Tesis Discursivas</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">05 Artículos</span>
</div>
<nav className="flex flex-col space-y-1" id="thesis-nav">
<a className="thesis-link group flex items-start gap-3 p-2.5 rounded transition-all duration-200 bg-surface-container-high text-primary font-semibold" data-target="tesis-01" href="#tesis-01">
<span className="font-label-sm text-label-sm text-secondary mt-0.5 group-hover:text-primary transition-colors">01.</span>
<span className="font-body-sm text-body-sm leading-snug">Primacía de la Razón y el Discernimiento</span>
</a>
<a className="thesis-link group flex items-start gap-3 p-2.5 rounded transition-all duration-200 text-on-surface-variant hover:bg-surface-container hover:text-on-surface" data-target="tesis-02" href="#tesis-02">
<span className="font-label-sm text-label-sm text-secondary mt-0.5 group-hover:text-primary transition-colors">02.</span>
<span className="font-body-sm text-body-sm leading-snug">La Metáfora de la Vasija Fracturada</span>
</a>
<a className="thesis-link group flex items-start gap-3 p-2.5 rounded transition-all duration-200 text-on-surface-variant hover:bg-surface-container hover:text-on-surface" data-target="tesis-03" href="#tesis-03">
<span className="font-label-sm text-label-sm text-secondary mt-0.5 group-hover:text-primary transition-colors">03.</span>
<span className="font-body-sm text-body-sm leading-snug">Finitud Humana y Urgencia Ética</span>
</a>
<a className="thesis-link group flex items-start gap-3 p-2.5 rounded transition-all duration-200 text-on-surface-variant hover:bg-surface-container hover:text-on-surface" data-target="tesis-04" href="#tesis-04">
<span className="font-label-sm text-label-sm text-secondary mt-0.5 group-hover:text-primary transition-colors">04.</span>
<span className="font-body-sm text-body-sm leading-snug">El Demiurgo como Alienación Ideológica</span>
</a>
<a className="thesis-link group flex items-start gap-3 p-2.5 rounded transition-all duration-200 text-on-surface-variant hover:bg-surface-container hover:text-on-surface" data-target="tesis-05" href="#tesis-05">
<span className="font-label-sm text-label-sm text-secondary mt-0.5 group-hover:text-primary transition-colors">05.</span>
<span className="font-body-sm text-body-sm leading-snug">Trascendencia sin Dogma Coercitivo</span>
</a>
</nav>

<div className="p-space-sm rounded-sm bg-surface-container-low text-on-surface flex flex-col space-y-2">
<div className="flex items-center gap-2 text-secondary">

<span className="font-label-sm text-label-sm tracking-wider uppercase">Criterio Hermenéutico</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            «La duda metódica no derriba lo divino; erradica la idolatría de la certeza estéril.»
          </p>
</div>

<div className="pt-2 flex flex-col space-y-1">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Avance del Tratado</span>
<span className="font-label-sm text-label-sm font-mono text-secondary" id="reading-progress-percent">20%</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-sm overflow-hidden">
<div className="h-full bg-secondary transition-all duration-300 w-1/5" id="reading-progress-bar" />
</div>
</div>
</div>
</aside>

<main className="lg:col-span-8 xl:col-span-9 flex flex-col space-y-space-xl">

<article className="thesis-section scroll-mt-28 flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm" id="tesis-01">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase font-mono">Tesis I • Epistemología Moral</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Art. 1.1</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          01. Primacía de la Razón y el Discernimiento
        </h2>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
          El cosmos no demanda capitulación intelectual. Lejos de concebir la fe como un salto en el vacío o una renuncia a la facultad reflexiva, el MEU sostiene que el don primario conferido a la humanidad es la lucidez crítica. Sin discernimiento analítico, la compasión deviene en sentimentalismo voluble y la justicia en arbitrariedad litúrgica.
        </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          La mente humana no es un receptáculo pasivo de revelaciones inmutables, sino un interlocutor dialéctico. Toda prescripción ética que reclame legitimidad cósmica debe ser susceptible de examen riguroso frente al sufrimiento tangible de los seres vulnerables. Aquello que no resista el fuego de la pregunta compasiva no proviene de la Trascendencia, sino de la conveniencia de los poderes terrestres.
        </p>

<blockquote className="my-space-sm pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
            «La devoción que exige apagar el intelecto es la antesala de la tiranía. Honramos la Causa Primera únicamente cuando afilamos la razón para aliviar el dolor del prójimo.»
          </p>
<footer className="mt-2 font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">
            — Glosa del Canciller • Archivo Central MEU
          </footer>
</blockquote>

<div className="flex items-start gap-3 p-3 bg-surface-container-high rounded text-on-surface-variant">

<p className="font-body-sm text-body-sm leading-relaxed">
<strong className="font-semibold text-primary">Nota Hermenéutica 1.A:</strong> El rechazo del obscurantismo teológico se formaliza en el <em>Tratado de la Claridad</em>, prohibiendo cualquier exégesis que subordine el valor incondicional de la vida humana a prerrogativas dogmáticas.
          </p>
</div>
</article>

<article className="thesis-section scroll-mt-28 flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm" id="tesis-02">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase font-mono">Tesis II • Cosmogonía Ética</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Art. 1.2</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          02. La Metáfora de la Vasija Fracturada
        </h2>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
          Heredera de la tradición del quebranto primordial (<em>Shevirat ha-Kelim</em>), nuestra cosmología rehúye el optimismo ingenuo. El mundo empírico no es un paraíso clausurado ni un jardín impecable; es una vasija rota cuya luz original yace dispersa entre fragmentos de dolor, injusticia y contingencia física.
        </p>

<div className="my-space-md p-space-lg bg-surface-container rounded-sm flex flex-col items-center">
<div className="w-full flex justify-between items-center mb-4">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Esquema Arquetípico 02 • Dialéctica de la Vasija</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">FIG. I</span>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-lg mt-2">
            La reparación (<em className="text-primary">Tikkún</em>) no borra la cicatriz; la consagra como testimonio del compromiso ético de la conciencia humana en la materia.
          </p>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
          Esta condición de quebranto exonera a Dios de la tiranía moral: no es un arquitecto negligente que complace el dolor de sus criaturas, sino la Inmensidad cuya emanación confirió al hombre la co-responsabilidad suprema de soldar lo roto con cada acto de equidad, compasión y ciencia.
        </p>

<div className="my-space-sm overflow-hidden rounded-sm bg-surface-container relative group">

<div className="p-space-md bg-surface-container-low flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Restauración y memoria: el testimonio material de la fractura asumida.</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-mono">Práctica Inmanente</span>
</div>
</div>
</article>

<article className="thesis-section scroll-mt-28 flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm" id="tesis-03">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase font-mono">Tesis III • Antropología Filosófica</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Art. 1.3</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          03. Finitud Humana y Urgencia Ética
        </h2>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
          Nuestra existencia temporal no es un ensayo general para una eternidad hedonista, sino el único escenario vinculante donde la justicia puede ser ejercida. Es precisamente la certidumbre de la finitud biológica la que otorga a cada gesto compasivo una dignidad infinita e insustituible.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-sm">
<div className="p-space-md bg-surface-container-low rounded-sm flex flex-col space-y-2">
<div className="flex items-center gap-2 text-primary font-semibold">

<span className="font-headline-sm text-headline-sm">La Trampa Escatológica</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Posponer la justicia hacia ultratumba consuela al opresor y desampara a la víctima. Quien espera recompensas celestes para actuar rectamente degrada el deber moral a un cálculo mercantil.
            </p>
</div>
<div className="p-space-md bg-surface-container-high rounded-sm flex flex-col space-y-2">
<div className="flex items-center gap-2 text-primary font-semibold">

<span className="font-headline-sm text-headline-sm">El Imperativo Aquí y Ahora</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Cada segundo es una puerta estrecha por la que puede ingresar la reparación. La brevedad de los días no suscita desaliento, sino un celo inquebrantable por no dejar una sola injusticia sin respuesta.
            </p>
</div>
</div>
<blockquote className="pl-space-md border-l-4 border-l-secondary bg-surface-container-low/60 p-space-md rounded-r-lg">
<p className="font-aphorism text-aphorism text-primary italic leading-relaxed">
            «Quien pospone el socorro al hambriento prometiéndole maná celestial no es un hombre piadoso, sino un cómplice del hambre.»
          </p>
<footer className="mt-2 font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">
            — Diálogo de los Siete Filósofos • Libro IV
          </footer>
</blockquote>
</article>

<article className="thesis-section scroll-mt-28 flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm" id="tesis-04">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase font-mono">Tesis IV • Crítica Ideológica</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Art. 1.4</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          04. El Demiurgo como Alienación Ideológica
        </h2>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
          Históricamente, los imperios y las castas sacerdotales concibieron a Dios a imagen de sus propios soberanos: colérico, necesitado de adulación, celoso de sacrificios y presto a repartir favores a cambio de sumisión. En el MEU denominamos a esta caricatura idólatra «el Demiurgo».
        </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          El Demiurgo es una proyección del egoísmo humano institucionalizado: sacraliza las jerarquías de clase, condena la emancipación de la mujer y legitima la violencia bélica bajo el estandarte de guerras santas. La tarea fundamental de nuestra filosofía es la iconoclastia radical frente a este ídolo burocrático.
        </p>

<div className="my-space-md rounded-sm overflow-hidden bg-surface-container-low">
<div className="p-space-md text-on-surface flex justify-between items-center border-y border-outline-variant">
<span className="font-headline-sm text-headline-sm">Cuadro Dialéctico Comparativo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-mono">Tratado II • Síntesis</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0">

<div className="p-space-lg bg-surface-container-high flex flex-col space-y-space-sm">
<div className="flex items-center gap-2 text-error">

<span className="font-label-md text-label-md tracking-wider uppercase font-semibold">Fideísmo Ciego / Demiúrgico</span>
</div>
<ul className="flex flex-col space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="text-error font-bold">•</span>
<span><strong>Dogma Inmutable:</strong> La verdad se considera revelada de una vez y para siempre; interrogarla es anatema.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-error font-bold">•</span>
<span><strong>Moral Heternóma:</strong> Lo bueno es bueno únicamente porque una autoridad omnipotente lo ordena bajo pena de castigo.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-error font-bold">•</span>
<span><strong>Alienación Terrenal:</strong> Desprecio del presente biológico en favor de promesas ultramundanas y resignación pasiva.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-error font-bold">•</span>
<span><strong>Exclusión Sectaria:</strong> Fragmentación de la humanidad en elegidos y réprobos merecedores de expulsión.</span>
</li>
</ul>
</div>

<div className="p-space-lg bg-surface-container-lowest flex flex-col space-y-space-sm">
<div className="flex items-center gap-2 text-secondary">

<span className="font-label-md text-label-md tracking-wider uppercase font-semibold">Racionalismo Crítico MEU</span>
</div>
<ul className="flex flex-col space-y-3 font-body-sm text-body-sm text-on-surface">
<li className="flex items-start gap-2">
<span className="text-secondary font-bold">•</span>
<span><strong>Evolución Dialéctica:</strong> La comprensión humana se expande con el progreso moral, científico y deliberativo.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-bold">•</span>
<span><strong>Ética Inmanente:</strong> El bien se fundamenta en el deber incondicional de preservar y dignificar la vida autoconsciente.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-bold">•</span>
<span><strong>Responsabilidad Primordial:</strong> El dolor del mundo exige reparación activa, técnica y fraterna aquí y ahora.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-bold">•</span>
<span><strong>Universalismo Fraterno:</strong> Toda persona porta la misma dignidad indivisible; no existen pueblos ni almas de segunda clase.</span>
</li>
</ul>
</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-surface-container rounded text-on-surface-variant">

<p className="font-body-sm text-body-sm leading-relaxed">
<strong className="font-semibold text-primary">Nota Hermenéutica 1.B:</strong> Deconstruir al Demiurgo no equivale a profesar el ateísmo mecanicista, sino a despejar el espacio mental para acceder a lo Verdaderamente Santo: la Unidad Indivisible que trasciende los caprichos del poder.
          </p>
</div>
</article>

<article className="thesis-section scroll-mt-28 flex flex-col space-y-space-md p-space-xl bg-surface-container-lowest rounded-sm" id="tesis-05">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary tracking-[0.25em] uppercase font-mono">Tesis V • Trascendencia Abierta</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Art. 1.5</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          05. Trascendencia sin Dogma Coercitivo
        </h2>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
          Dios, en la concepción del Monoteísmo Ético Universalista, no requiere defensores enfurecidos ni inquisidores de la fe. Lo Divino es el Fundamento de la Existencia, la Fuente Inagotable de la Ley Moral y la Causa Primera que suscita el asombro del universo ordenado. No es un objeto entre los objetos, ni un ente susceptible de ser manipulado mediante conjuros, votos de exclusividad o castigos civiles.
        </p>

<div className="my-space-sm p-space-lg bg-surface-container-low rounded-sm flex flex-col md:flex-row items-center gap-space-lg">

<div className="w-full md:w-1/2 flex flex-col space-y-3">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Topología de lo Sagrado</span>
<h3 className="font-headline-sm text-headline-sm text-primary">El Dios sin Fronteras</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              La Trascendencia no posee geografía privilegiada ni idioma predilecto. Se hace patente dondequiera que un ser humano detenga el abuso de poder, alivie el dolor ajeno o busque la verdad sin miedo a las consecuencias.
            </p>
<div className="flex items-center gap-2 pt-2">

<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">Principio de No-Apropiación Divina</span>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
          Por tanto, nuestra comunidad no busca la conversión forzosa de las conciencias ni el anatema contra el librepensador. Proclamamos un horizonte donde el monoteísmo se purifica de todo chantaje soteriológico: no creemos para no ser condenados; actuamos justamente porque la justicia es el espejo diáfano de lo Infinito.
        </p>
</article>

<section className="mt-space-xl p-space-xl rounded-sm text-on-surface relative overflow-hidden border-y border-outline-variant">


<div className="relative z-10 flex flex-col space-y-space-md">
<div className="flex items-center gap-2 text-secondary-fixed">

<span className="font-label-sm text-label-sm tracking-[0.25em] uppercase font-semibold">Puente Teológico • Siguiente Tratado</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="flex flex-col space-y-2 max-w-2xl">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-mono">Compendio III</span>
<h2 className="font-display-md text-display-md text-on-surface-variant tracking-tight">
                Nuestra Teología: La Unicidad Indivisible y el Nombre Impronunciable
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2">
                Habiendo sentado las bases racionales del deber ético y derribado la idolatría del Demiurgo, nos adentramos en el misterio ontológico de la Trascendencia pura.
              </p>
</div>
<Link to="/nuestra-teologia" className="shrink-0 px-6 py-3.5 rounded bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 font-label-md text-label-md uppercase tracking-wider flex items-center gap-3 group">
<span>Continuar al Tratado III</span>

</Link>
</div>

<div className="pt-space-md flex flex-wrap items-center gap-space-lg text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<div className="flex items-center gap-2">

<span>Tiempo de Lectura Estimado: 18 min</span>
</div>
<div className="flex items-center gap-2">

<span>7 Artículos Teológicos Vinculantes</span>
</div>

</div>
</div>
</section>
</main>
</div>
</div>
</div></main>
  );
}
