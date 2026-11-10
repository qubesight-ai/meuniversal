import { Link } from "@tanstack/react-router";

export function RaicesContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-space-md">
<div className="flex flex-col max-w-3xl">

<h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-none mb-space-sm">Nuestras Raíces</h1>
<p className="font-headline-md text-headline-md text-secondary italic font-serif">Tradiciones con las que dialogamos, leídas con rigor histórico.</p>
</div>
<div className="flex flex-col items-start md:items-end text-left md:text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Lectura histórico-crítica</span>
</div>
</div>

<div className="relative w-full rounded-sm overflow-hidden mt-space-sm">

<div className="flex items-end p-space-lg">
<div className="max-w-2xl">
<p className="font-aphorism text-aphorism italic text-on-surface">No partimos de cero: dialogamos con tradiciones antiguas y modernas, sin atribuirles ideas que no sostuvieron.</p>
</div>
</div>
</div>
</section>

<section className="w-full mt-space-md mb-space-xl">
<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col lg:flex-row items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm max-w-2xl">

<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">Tres niveles de lectura</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            En cada tradición distinguimos: lo que las fuentes históricas permiten afirmar, lo que es interpretación académica discutida y lo que el MEU adopta o reinterpreta como propuesta contemporánea. Estas tradiciones son interlocutoras, no autoridades.
          </p>
</div>
</div>

<div className="flex items-center gap-2 bg-surface-container-high p-1.5 rounded-sm shrink-0">
<button className="px-3.5 py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200" id="btn-view-all" data-root-filter="all">
          Todas
        </button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200" id="btn-view-prophetic" data-root-filter="antiguedad">
          Raíz Bíblica
        </button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200" id="btn-view-modern" data-root-filter="critica">
          Convergencia Crítica
        </button>
</div>
</div>
</section>

<section className="w-full flex flex-col gap-space-lg mb-space-xl">

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">I</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo II a.e.c. – siglo I e.c.</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Los saduceos</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Época del Segundo Templo</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Grupo judío vinculado a la élite sacerdotal del Templo de Jerusalén. Las fuentes antiguas —Flavio Josefo y el Nuevo Testamento— coinciden en que no aceptaban la resurrección de los muertos. No conservamos escritos propios de los saduceos, por lo que buena parte de su pensamiento se conoce solo a través de autores que no eran de su grupo y sigue siendo objeto de discusión académica.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Fuentes: Flavio Josefo, Antigüedades judías XVIII; Marcos 12:18; Hechos 23:8.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              El MEU se inspira parcialmente en esta actitud para formular una posición contemporánea: no afirmar la inmortalidad individual, la resurrección ni recompensas o castigos tras la muerte. Es una reinterpretación propia, no una reconstrucción de lo que creían los saduceos.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Inspiración parcial, no identidad
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">II</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglos VIII–VI a.e.c.</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Profetas de Israel</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-medium">Justicia social</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Los libros atribuidos a Amós, Isaías y Miqueas critican un culto separado de la justicia y reclaman protección para el huérfano, la viuda y el extranjero. La datación y composición de estos libros es objeto de estudio académico; muchos textos se formaron a lo largo de varias generaciones.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            «¿Qué pide de ti el Señor sino hacer justicia, amar la misericordia y caminar humildemente?» (Miqueas 6:8)
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Tomamos de esta tradición una idea central: la vida espiritual no puede separarse de la justicia hacia las personas vulnerables. El ritual tiene valor para quien lo practica, pero no sustituye la responsabilidad ética.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            La ética en el centro
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">III</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo I e.c.</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Jesús de Nazaret</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Sabio judío</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Los historiadores coinciden en que Jesús fue un judío de Galilea del siglo I, que enseñó y fue ejecutado por las autoridades romanas. Los evangelios lo muestran debatiendo sobre la Ley con otros maestros judíos y cercano a los marginados. Su relación precisa con fariseos, la escuela de Hillel u otras corrientes es discutida, y no puede afirmarse como hecho establecido.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            «El sábado fue hecho por causa del hombre, y no el hombre por causa del sábado» (Marcos 2:27)
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              El MEU lo considera un sabio y justo judío, plenamente humano, valioso por sus enseñanzas éticas. Según nuestra interpretación no es Dios, Mesías ni profeta. Respetamos que otras tradiciones lo comprendan de otro modo.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Maestro ético, no divino
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">IV</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Tradición rabínica</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Noajismo y la Alianza Universal</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Universalismo</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              La literatura rabínica formula siete leyes para toda la humanidad (<em className="italic">Sheva Mitzvot Bnei Noaj</em>). En esa tradición, las personas no judías que las cumplen son consideradas justas sin necesidad de convertirse al judaísmo. Su alcance e interpretación han variado entre autores y épocas.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Talmud Babli: Sanedrín 56a; Maimónides, Hiljot Melajim 8:11.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Nos inspira la idea de que la rectitud no depende de pertenecer a un pueblo o religión determinados. El MEU no adopta el sistema noájida como norma propia; recoge su intuición universalista.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Rectitud sin conversión
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">V</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglos II–IV e.c.</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Gnosticismo y gnosis crítica</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Autocrítica</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Bajo el nombre de «gnosticismo» se agrupan corrientes muy diversas de los primeros siglos. Varios de sus textos, conservados entre otros en Nag Hammadi, describen un Demiurgo inferior distinto del Dios supremo. El propio término «gnosticismo» es hoy discutido por los especialistas, por agrupar movimientos heterogéneos.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Fuentes: códices de Nag Hammadi; estudio de referencia: Hans Jonas, La religión gnóstica.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              El MEU no adopta la cosmología gnóstica ni su visión negativa de la materia. Reinterpreta el Demiurgo como símbolo de nuestra tendencia a absolutizar interpretaciones propias, y la gnosis como autoconocimiento crítico. Es una relectura contemporánea, no una continuidad histórica.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Relectura simbólica
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">VI</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo XVI – actualidad</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Tikkun Olam</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-medium">Reparación del mundo</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              La expresión aparece en fuentes rabínicas antiguas con un sentido jurídico y social. En la Cábala de Isaac Luria (Safed, siglo XVI) se asoció a la «ruptura de las vasijas» (<em className="italic">Shevirat ha-Kelim</em>) y a la reparación cósmica. En el siglo XX, sobre todo en el judaísmo liberal, pasó a designar el compromiso con la justicia social.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Estudio de referencia: Gershom Scholem, Las grandes tendencias de la mística judía.
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              El MEU entiende Tikkun Olam como reparación práctica del mundo: justicia social, educación, solidaridad y cuidado ambiental. La imagen luriánica de las vasijas rotas puede servir como metáfora, pero no es la cosmología oficial del MEU.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Compromiso práctico
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-sm p-space-lg md:p-space-xl transition-all duration-300" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">VII</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglos XIX–XXI</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Judaísmo reformista</h2>
</div>
</div>
<span className="px-3 py-1 rounded-sm bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Tradición en diálogo</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Fuentes y debate académico</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Surgido en la Alemania del siglo XIX, con figuras como Abraham Geiger, el judaísmo reformista entendió la tradición como algo que evoluciona históricamente. La Plataforma de Pittsburgh (1885) destacó la dimensión ética del judaísmo frente a ciertas normas rituales. Sus posiciones han cambiado notablemente con el tiempo, y no representa a todo el judaísmo.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Fuentes: Plataformas de Pittsburgh (1885) y Columbus (1937).
          </div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Propuesta del MEU</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Valoramos su idea de que la tradición puede ser leída críticamente y en diálogo con la ciencia y los derechos humanos. El MEU no forma parte del judaísmo reformista ni habla en su nombre.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
            Interlocutor moderno
          </div>
</div>
</div>
</article>
</section>

<section className="w-full bg-surface-container-high rounded-sm p-space-lg md:p-space-xl mb-space-xl">
<div className="max-w-3xl mb-space-lg">
<h3 className="font-display-md text-display-md text-primary tracking-tight">Lo que conservamos y lo que no compartimos</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
        Una síntesis de lo que el MEU toma de estas tradiciones y de lo que, por convicción propia, deja de lado. Es nuestra lectura, no un juicio sobre quienes piensan distinto.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="bg-surface-container-lowest rounded-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 pb-space-sm mb-space-md">

<h4 className="font-headline-sm text-headline-sm text-primary">Lo que conservamos y honramos</h4>
</div>
<ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">La fe en un único Dios:</strong> universal e indivisible, cuya esencia supera nuestra comprensión.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">La reparación del mundo:</strong> el compromiso práctico con la justicia, la educación, la solidaridad y el cuidado ambiental.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El estudio y el diálogo:</strong> la deliberación horizontal y el desacuerdo respetuoso.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El cuidado de los vulnerables:</strong> la herencia profética que pone a quien sufre en el centro del deber ético.
              </div>
</li>
</ul>
</div>
<div className="mt-space-lg pt-space-sm">

</div>
</div>

<div className="bg-surface-container-low rounded-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 pb-space-sm mb-space-md">

<h4 className="font-headline-sm text-headline-sm text-primary">Lo que no compartimos</h4>
</div>
<ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">La exclusión por pertenencia:</strong> la idea de que la dignidad o la rectitud dependen del origen, el linaje o la religión.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">La moral basada en el miedo:</strong> obrar bien por temor a castigos o por deseo de recompensas tras la muerte.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">La lectura literal e infalible de los textos:</strong> leerlos sin atender a su contexto histórico ni a la conciencia ética.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">Las autoridades espirituales infalibles:</strong> nadie posee autoridad espiritual sobre la conciencia de otra persona.
              </div>
</li>
</ul>
</div>
<div className="mt-space-lg pt-space-sm">

</div>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest rounded-sm p-space-md flex flex-col justify-between">
<div className="w-full h-44 rounded-sm overflow-hidden mb-space-sm relative">


</div>
<div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">El judaísmo del siglo I</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          La investigación histórica muestra un judaísmo diverso, con corrientes que debatían entre sí. Entender ese contexto ayuda a leer a Jesús sin anacronismos.
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">


</div>
</div>

<div className="bg-surface-container-lowest rounded-sm p-space-md flex flex-col justify-between">
<div className="w-full h-44 rounded-sm overflow-hidden mb-space-sm relative">


</div>
<div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">Maimónides & Spinoza</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Dos pensadores que, con conclusiones muy distintas entre sí, criticaron las imágenes antropomórficas de Dios. Los leemos como interlocutores, no como autoridades.
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">


</div>
</div>

<div className="text-on-surface rounded-sm p-space-md flex flex-col justify-between border-y border-outline-variant">
<div>
<div className="flex items-center justify-between mb-space-xs">


</div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Una propuesta contemporánea</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          El MEU no pretende ser la continuación histórica de ninguna de estas tradiciones. Es una propuesta filosófica actual, falible, que dialoga con ellas.
        </p>


</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary">

</div>
</div>
</section>

<section className="w-full bg-surface-container-low rounded-sm p-space-lg md:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-2 text-secondary mb-space-xs">

<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Siguiente página</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">Reflexiones</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
        Textos de reflexión del MEU sobre la razón, la finitud y la reparación del mundo.
      </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<Link to="/reflexiones" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary-container transition-colors duration-200">
<span>Leer reflexiones</span>

</Link>
<Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md tracking-wider uppercase transition-colors duration-200">
<span>Inicio</span>
</Link>
</div>
</section>
</div>
</div></main>
  );
}
