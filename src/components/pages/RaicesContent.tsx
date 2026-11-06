import { Link } from "@tanstack/react-router";

export function RaicesContent() {
  return (
<main className="w-full pt-24 min-h-screen bg-surface"><div className="max-w-[1200px] mx-auto px-margin md:px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<section className="relative w-full pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-space-md">
<div className="flex flex-col max-w-3xl">
<div className="flex items-center gap-3 mb-space-xs">
<span className="px-2.5 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-widest">Compendio IV</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary" />
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Historia de las Ideas</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-none mb-space-sm">Nuestras Raíces</h1>
<p className="font-headline-md text-headline-md text-secondary italic font-serif">Genealogía del pensamiento: linaje hermenéutico y convergencia ética.</p>
</div>
<div className="flex flex-col items-start md:items-end text-left md:text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Metodología Histórico-Crítica</span>
<span className="font-body-sm text-body-sm text-secondary font-mono mt-0.5">FILIACIÓN NO-DOGMÁTICA • 7 CORPUS</span>
</div>
</div>

<div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md mt-space-sm">
<div className="w-full h-full bg-cover bg-center" data-alt="Close up photography of antique parchment manuscript fragments with Hebrew and Greek scholastic glosses resting on an ancient library cedar table in warm atmospheric natural morning light, featuring muted amber tones, scholarly ink marks, and deep archival shadows." style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2O4DRTG99r0Y90BHnfxR4WTnGAKlsmJIYg3v4z8EWln1N0MwfAc0kA0aWPxjjNuC4I4BTCwxHv1WrmJUurLGlRD0lxurfdAihM2nFnBmhCQNaD-7W1aiN0RTRHxArOLw4YNjjbpisbohxfRXqCfqaDlkNDYAYbWz4DHsIGrJSorjO9eJhalQs6iIM1UFIj9k8-oAHZL0GTRm4EzUSQvku1tXOlKL74MaFUsNqt_o')"}} />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-space-lg">
<div className="max-w-2xl text-on-primary">
<p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed mb-1">Premisa Epistemológica</p>
<p className="font-aphorism text-aphorism italic text-surface-container-lowest">«No construimos ex nihilo; destilamos el fulgor ético disperso a través de los siglos, desgajando la superstición tribal del imperativo de justicia universal.»</p>
</div>
</div>
</div>
</section>

<section className="w-full mt-space-md mb-space-xl">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm max-w-2xl">
<div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">account_tree</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">Advertencia de Exégesis Racional</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Las corrientes aquí descritas no son profesadas como dogmas infalibles, sino convocadas en calidad de interlocutores dialécticos. El MEU asume la herencia humanista con discernimiento laico y rigor axiológico.
          </p>
</div>
</div>

<div className="flex items-center gap-2 bg-surface-container-high p-1.5 rounded-lg shrink-0">
<button className="px-3.5 py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200 shadow-sm" id="btn-view-all" data-root-filter="all">
          Los 7 Tratados
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

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">I</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo II a.e.c. • Finitud Radical</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Judaísmo Bíblico Saduceo</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Inmanencia Pura</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Rechazo estricto de la escatología ultramundana, de la resurrección física y del mundo venidero (<em className="italic">Olam Ha-Ba</em>). Su cosmovisión se confinaba al pacto terrenal, la soberanía de la Torá escrita y la caducidad inevitable del individuo en el Seol.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Fuente Histórica: Flavio Josefo, Antigüedades Judías XVIII.
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              Recuperación de la sobriedad terrenal: el ser humano no debe obrar por recompensas celestes diferidas ni por terror a la condenación póstuma. La rectitud moral agota su gloria en la carne presente y en la vigilia del prójimo aquí y ahora.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Santidad sin Ultra-tumba
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">II</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo VIII a.e.c. • Primacía Ética</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Profetas de Israel</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-medium">Justicia Cívica</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Invectiva radical contra los sacrificios vacíos, el formalismo litúrgico y la connivencia sacerdotal con las élites expoliadoras. El clamor de Amós, Isaías y Miqueas desplaza la eficacia mágica del culto hacia la restitución del derecho del huérfano, la viuda y el extranjero.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            «¿Qué pide de ti el Señor sino hacer justicia, amar la misericordia y caminar humildemente?» (Miqueas 6:8)
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              El culto no sustituye la justicia distributiva. La única devoción admisible ante lo Incondicionado es el desmantelamiento de la opresión estructural. No existe piedad desligada de la defensa inquebrantable de la dignidad de los vulnerables.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Primacía de la Ética sobre el Ritual
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="antiguedad">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">III</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo I • Sabiduría Judía & Subversión Moral</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Jesús de Nazaret: Maestro y Tzadik</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Hillelismo Vital</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              El Nazareno histórico como reformador jasídico de Galilea, inserto de lleno en el debate farisaico liberal cercano a la escuela de Hillel: supremacía del amor al prójimo sobre el rigor legalista del sábado, comensalía radical con los marginados y condena de la hipocresía ostentosa.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            «El sábado fue hecho por causa del hombre, y no el hombre por causa del sábado» (Marcos 2:27)
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              Desmitificación de la cristología trinitaria e imperial de Nicea. Honramos a Jesús no como una deidad encarnada en monopolio soteriológico, sino como un gigante moral judío cuya desobediencia civil y compasión radical inspiran la objeción de conciencia contra el poder idolátrico.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Fraternidad sin Deificación
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">IV</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Tradición Rabínica Clásica • Tratado Sanedrín</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Noajismo y la Alianza Universal</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Universalismo Ético</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Las Siete Leyes de los Hijos de Noé (<em className="italic">Sheva Mitzvot Bnei Noaj</em>). Doctrina del Talmud que estipula que los gentiles piadosos que viven conforme a un orden moral justo tienen parte garantizada en el mundo venidero sin precisar conversión formal a Israel.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Talmud Babli: Sanedrín 56a; Maimónides, Hiljot Melajim 8:11.
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              Fundamento del pluralismo de conciencia: la comunión con la Divinidad indivisible no exige uniformidad étnica, litúrgica ni institucional. Cualquier ser humano que sostenga la justicia, preserve la vida y rechace la tiranía idolátrica es un cooperador pleno del pacto cósmico.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Ciudadanía Moral Irrestricta
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">V</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglos II–III / Modernidad Filosófica • Desmitificación</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Gnosis Crítica Reinterpretada</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Sospecha Epistémica</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Intuición gnóstica de que el gobernante visible del mundo terrenal (el Demiurgo) es a menudo un tirano usurpador celoso y ciego, confundido con la Fuente Suprema. La auténtica iluminación requiere distinguir al Absoluto verdadero de las autoridades clericales que exigen vasallaje ciego.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Textos de Nag Hammadi / Hans Jonas, La Religión Gnóstica.
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              Purga de la fantasía mitológica y el desprecio dualista a la materia. El MEU asume la gnosis en su clave racional: desmontar los dioses falsos del nacionalismo, el mercado y el fundamentalismo doctrinario. Reconocer a Dios exige derribar primero a los demiurgos de la opresión ideológica.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Iconoclasia del Pensamiento
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">VI</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglo XVI • Cábala Luriánica & Ética Contemporánea</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Tikkun Olam: Reparación Cósmica</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-medium">Praxis Transformadora</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Doctrina de Isaac Luria sobre la rotura de los recipientes primordiales (<em className="italic">Shevirat Ha-Kelim</em>): chispas divinas de luz inmaculada cayeron cautivas en la tosquedad de la creación material. Cada mandamiento y acto de santidad rescata estas centellas para reordenar el cosmos.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Escuela de Safed • Gershom Scholem, Las Grandes Corrientes de la Mística Judía.
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              El mundo no es una obra consumada por un monarca distante: es un proyecto inconcluso que requiere colaboradores activos. Toda labor médica, restitución ecológica, reforma legal o auxilio de la criatura herida es un acto de redención ontológica. La divinidad aguarda ser rescatada en la carne sufriente.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Co-creación y Sanación Activa
          </div>
</div>
</div>
</article>

<article className="genealogy-node bg-surface-container-lowest rounded-xl shadow-sm p-space-lg md:p-space-xl transition-all duration-300 hover:shadow-md" data-category="critica">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-serif">VII</span>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Siglos XIX–XXI • Hermenéutica Crítica e Ilustración</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Judaísmo Reformista & Libre Conciencia</h2>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Autonomía Moral</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tradición Fuente</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Desde la Conferencia de Pittsburgh (1885) y Abraham Geiger: reconocimiento de la Torá como un proceso evolutivo y contextual. Rechazo de aquellas normas ceremoniales anacrónicas que no eleven la condición ética del individuo, afirmando la plena igualdad de género y los derechos civiles.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-mono text-body-sm opacity-80">
            Plataformas de Pittsburgh (1885) y Columbus (1937) • Rabinato Progresista.
          </div>
</div>

<div className="bg-primary text-on-primary rounded-lg p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary-fixed mb-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Reinterpretación MEU</span>
</div>
<p className="font-body-md text-body-md text-surface-container-highest">
              Nuestro interlocutor moderno por excelencia: la tradición tiene voz deliberativa, pero jamás poder de veto. La revelación divina no es un dictado petrificado en piedra, sino un diálogo perpetuo con la ciencia, los derechos humanos universales y la sensibilidad moral contemporánea.
            </p>
</div>
<div className="mt-space-sm pt-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            Axioma: Revelación Progresiva y Soberanía Racional
          </div>
</div>
</div>
</article>
</section>

<section className="w-full bg-surface-container-high rounded-xl p-space-lg md:p-space-xl shadow-sm mb-space-xl">
<div className="max-w-3xl mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">Criterio de Discernimiento</span>
<h3 className="font-display-md text-display-md text-primary tracking-tight">Tabla Sinóptica de Contrastes</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
        La fidelidad a la luz primordial nos exige un deslinde explícito. No acumulamos ruinas dogmáticas; preservamos la savia viva y despojamos la cáscara del miedo y la coacción.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 pb-space-sm mb-space-md">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Lo que conservamos y honramos</h4>
</div>
<ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Monoteísmo de la Unidad Indivisible:</strong> Un principio ontológico fontanal no fragmentado por mitologías intermedias o jerarquías celestiales.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Mandato de Reparación Terrenal:</strong> La consagración absoluta de la vida biológica e histórica como el único templo donde la justicia se verifica.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">La Memoria Comunitaria y el Estudio Dialéctico:</strong> La deliberación horizontal, el desacuerdo fecundo y la cultura letrada como culto de la mente.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-secondary font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Cuidado Incondicional del Débil:</strong> La herencia profética indeleble que sitúa al empobrecido y marginado en el centro del deber ético.
              </div>
</li>
</ul>
</div>
<div className="mt-space-lg pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-mono">HERENCIA VIVA • CONTINUIDAD DEL ESPÍRITU</span>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 pb-space-sm mb-space-md">
<div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">block</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Lo que dejamos atrás</h4>
</div>
<ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Tribalismo Exclusivista:</strong> Todo reclamo de elección metafísica privilegiada por linaje de sangre, casta o geografía nacional.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Terror Escatológico:</strong> La especulación amenazante del infierno, la expiación vicaria violenta y el comercio de salvaciones ultraterrenas.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Literalismo Bíblico Inerrante:</strong> La canonización acrítica de textos arcaicos marcados por el patriarcado bélico o prejuicios biológicos superados.
              </div>
</li>
<li className="flex items-start gap-3">
<span className="text-error font-bold select-none">•</span>
<div>
<strong className="text-primary font-semibold">El Clericalismo Jerárquico:</strong> Mediadores sacramentales que imponen peajes de sumisión entre la conciencia libre y lo Infinito.
              </div>
</li>
</ul>
</div>
<div className="mt-space-lg pt-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block font-mono">RUPTURA EMANCIPADORA • SUPERACIÓN CRÍTICA</span>
</div>
</div>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="w-full h-44 rounded-lg overflow-hidden mb-space-sm relative">
<div className="w-full h-full bg-cover bg-center" data-alt="Stone ruins of an ancient Galilean synagogue with carved basalt pillars and olive branches bathed in afternoon golden sun, conveying architectural memory and Mediterranean contemplation with rich textured stonework." style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnV4dkT417-JhESA0GsnS8Onq6HqTRBiuK127f7dURzU4u7m53lBoHE-r03ps7uNyNy-gFfNQwMQNuE_VwtQDiRWcGcyq4R7k22UOJayoz9kk_xf1SBy7d2oYH_-bkQxtYHF40aGL-_v9nxJ38OFEDnRJ_eZLh6B6yWAMBEAMApH8qmStxRVeVKwBYMlYbDmP2oQN_MzR3Wa7oxOJYFBjuB8au-H1cr6Uiag-AN3c')"}} />
<span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase">Arqueología Moral</span>
</div>
<div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">El Diálogo en la Galilea</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          El retorno al medioambiente semítico del siglo I descubre una fe judía apasionadamente pluralista donde el bien humano prevalecía ante el templo de piedra.
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">TRATADO III / APÉNDICE A</span>
<span className="material-symbols-outlined text-[18px] text-secondary">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="w-full h-44 rounded-lg overflow-hidden mb-space-sm relative">
<div className="w-full h-full bg-cover bg-center" data-alt="A classical scholar desk at twilight with open leather-bound books of Maimonides and Spinoza, antique brass magnifying glass, handwritten notes, and soft candlelight reflection." style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6u6eoeV5zzert3VQ4oPad8B-NSMiyn1e2UNezMmAFG1YwhPfDqhvCEkfvabHOv9BFu2pCrFctQPKnLiNTg8ASFjIFDSeUrvpusSDfwU89srICkj7pnH78pUfErGMoBFW4TG87-2LMP1kv0TxAgtb0pW-f-Tin0V9XlHA9D6Ktefdh5_AxeXTOStJGXr1S6zM24u4SqIxRAUDT_dpXIxd_Ikm52MoIfBcrMIOk2qQ')"}} />
<span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase">La Razón en Vela</span>
</div>
<div>
<h5 className="font-headline-sm text-headline-sm text-primary mb-1">Maimónides & Spinoza</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          De la Guía de los Perplejos al Tratado Teológico-Político: la purificación de los antropomorfismos infantiles hacia la ley cósmica inmutable.
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">TRATADO V / COROLARIO B</span>
<span className="material-symbols-outlined text-[18px] text-secondary">arrow_forward</span>
</div>
</div>

<div className="bg-primary text-on-primary rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest">Convergencia Histórica</span>
<span className="material-symbols-outlined text-secondary-fixed text-[20px]">hub</span>
</div>
<h5 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-xs">La Síntesis MEU</h5>
<p className="font-body-sm text-body-sm text-surface-container-highest mb-space-md">
          Integración no sincrética sino dialéctica de los afluentes hacia la sola verdad del cuidado del ser.
        </p>

<div className="w-full h-32 flex items-center justify-center bg-primary-container/60 rounded-lg p-2">
<svg className="w-full h-full" fill="none" viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg">

<path className="text-outline/40" d="M 20 20 C 100 20, 140 55, 230 55" stroke="currentColor" strokeWidth="1.5" />
<path className="text-outline/40" d="M 20 55 C 100 55, 140 55, 230 55" stroke="currentColor" strokeWidth="1.5" />
<path className="text-outline/40" d="M 20 90 C 100 90, 140 55, 230 55" stroke="currentColor" strokeWidth="1.5" />

<circle className="fill-secondary-fixed" cx="20" cy="20" r="4" />
<text className="fill-surface-container-lowest font-mono" fontSize="8" x="32" y="24">SADUCEOS / PROFETAS</text>
<circle className="fill-secondary-fixed" cx="20" cy="55" r="4" />
<text className="fill-surface-container-lowest font-mono" fontSize="8" x="32" y="59">NOAJISMO / TZADIK</text>
<circle className="fill-secondary-fixed" cx="20" cy="90" r="4" />
<text className="fill-surface-container-lowest font-mono" fontSize="8" x="32" y="94">TIKKUN / REFORMA</text>

<circle className="fill-secondary-container" cx="250" cy="55" r="14" />
<circle className="text-secondary-fixed/50" cx="250" cy="55" r="18" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" />
<text className="fill-on-secondary-container font-serif font-bold text-center" fontSize="10" textAnchor="middle" x="250" y="58">MEU</text>
</svg>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary-fixed">
<span className="font-label-sm text-label-sm uppercase tracking-widest">Unidad • Ética • Acción</span>
<span className="font-mono text-body-sm">100% INMANENTE</span>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-2 text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[20px]">menu_book</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Continuidad del Canon</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">Hacia las Reflexiones: Biblioteca de Ensayos</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
        Profundice en los tratados exegéticos, los monográficos sobre la finitud radical y las aplicaciones del <em className="italic">Tikkun</em> a los dilemas bioéticos y de justicia económica de nuestro tiempo.
      </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<Link to="/reflexiones" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-label-md text-label-md tracking-wider uppercase shadow hover:bg-primary-container transition-colors duration-200">
<span>Explorar Ensayos</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md tracking-wider uppercase transition-colors duration-200">
<span>Compendio General</span>
</Link>
</div>
</section>
</div>
</div></main>
  );
}
