export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  coverImage?: string;
  coverCaption?: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  institution: string;
  highlight?: string;
  size: "large" | "small";
  link?: string;
};

export const posts: Post[] = [
  {
    slug: "vision-2030",
    title: "Visión 2030: La transformación económica de Arabia Saudita y los límites de un modelo sin reforma institucional",
    excerpt:
      "Arabia Saudita está viviendo una transformación económica profunda, y los avances son verificables en casi todos los frentes que el programa eligió medir. Casi todos, a excepción de uno que nadie quiso medir, y es el más determinante de todos.",
    date: "Mayo 2026",
    readTime: "12 min",
    category: "Medio Oriente",
    featured: true,
    coverImage: "/essay-vision2030-cover.jpg",
    coverCaption: "El skyline de Riad al atardecer desde el Rub' al Khali. La Kingdom Centre Tower domina el horizonte de una ciudad que busca reinventarse antes de que el petróleo deje de definirla.",
    body: `Arabia Saudita construyó durante décadas una de las economías más dependientes del petróleo en el mundo. En 2016, el príncipe heredero Mohammed bin Salmán presentó **Visión 2030**: un programa de transformación económica que busca diversificar la base productiva del reino antes de que diversificarse deje de ser una apuesta estratégica y se convierta en una necesidad sin alternativa.

El programa comparte elementos con otros modelos de desarrollo conducidos por el Estado, desde el Japón de la posguerra hasta Corea del Sur en los años ochenta, aunque opera en un contexto diferente: una monarquía que necesita reinventarse económicamente sin tocar las bases del poder político. A una década de su lanzamiento, los resultados cuantitativos son sorprendentes. Este ensayo los examina, analiza sus contradicciones y argumenta que la sostenibilidad del proyecto depende de reformas institucionales que Arabia Saudita todavía no muestra disposición de realizar.

[IMAGE:/essay-arabia.jpg:El desierto de Arabia Saudita, una de las extensiones áridas más vastas del mundo. El recurso que yace bajo estas dunas definió la historia del reino.]

## La trampa del Estado rentista

Arabia Saudita ilustra con precisión lo que Michael Ross (2012) documentó como la "**maldición de los recursos**": esta teoría sostiene que la abundancia de riqueza natural desincentiva la diversificación, debilita la independencia de las instituciones y crea dependencia de un bien cuyo precio es volátil y cuya relevancia global no está garantizada en el largo plazo.

Antes de 2016, el 70% de los ingresos gubernamentales y más del 80% de las exportaciones dependían del petróleo. Esa concentración no era solo un riesgo financiero. En un contexto internacional marcado por la transición energética, los acuerdos climáticos multilaterales y las tensiones geopolíticas, la pregunta para el reino dejó de ser si debía diversificarse y pasó a ser si podría hacerlo a tiempo. Visión 2030 es la respuesta institucional a esa pregunta. Que sea la respuesta correcta, es lo que los años venideros tendrán que demostrar.

[IMAGE:/essay-riyadh.jpg:Riad, capital del reino. La modernización urbana es la dimensión más visible de Visión 2030, pero no necesariamente la más profunda.]

## Capitalismo de Estado dirigido

Visión 2030 no encaja bien en ninguna categoría ideológica. El Estado es el principal inversor y coordinador del proceso a través del **Fondo de Inversión Pública** (PIF), con una cartera que supera los 909.000 millones de dólares. Al mismo tiempo, el programa apuesta por el crecimiento del sector privado, la atracción de inversión extranjera directa y el desarrollo de pequeñas y medianas empresas. El Estado actúa como arquitecto, el mercado como ejecutor.

Lo que distingue a Visión 2030 de otros intentos similares es más concreto que la ambición o el liderazgo: es el margen fiscal. El PIF puede absorber errores que habrían hundido programas similares en países con menor capital. Pocos programas de esta escala han tenido al mismo tiempo voluntad política, horizonte temporal y recursos suficientes para sostenerse. Eso no garantiza nada, pero explica bastante.

## Lo que los datos sí muestran

El Reporte Anual 2025 indica que el 93% de los 1,290 indicadores están logrados o en camino. El PIB superó por primera vez el billón de dólares y creció un 80% desde 2016. Las actividades no petroleras representan hoy más del 50% del PIB real.

El desempleo cayó del 12,3% al 7,2% entre 2016 y 2025. El turismo superó los 123 millones de visitantes en 2025, cinco años antes de la meta original, lo que llevó a ajustar el objetivo al alza a 150 millones anuales para 2030. La inversión extranjera directa creció un 119% desde 2017. El número de pymes superó los 1,7 millones, generando 8,88 millones de empleos.

El escepticismo ante cifras reportadas por el propio gobierno es una reacción razonable. Pero falsificar de forma coordinada métricas que, aunque no se explican entre sí, tampoco son ajenas —turismo, desempleo, inversión extranjera directa, PIB, número de pymes— sería más complicado que simplemente producir los resultados.

[IMAGE:/essay-neom.jpg:THE LINE en el desierto de Tabuk. El proyecto original contemplaba 9 millones de residentes; las revisiones redujeron esa cifra a 300.000 para 2030.]

## Lo que los datos no capturan

El petróleo sigue siendo el motor fiscal del Estado. El ministro de Finanzas lo reconoció en 2025: no se sentiría cómodo proyectando crecimiento hasta que los mercados energéticos se estabilizaran. Es una declaración que revela algo más que prudencia técnica. Revela que la dependencia del crudo no desapareció con los indicadores de diversificación: se desplazó, se volvió menos visible, pero sigue siendo el punto de referencia desde el que se toman las decisiones presupuestales.

THE LINE, la ciudad lineal de 170 kilómetros que era la imagen más ambiciosa del programa, fue reducida significativamente respecto a sus planes originales. La brecha entre lo anunciado y lo que resultó viable es considerable. Todo ese peso mediático depositado sobre la longitud del proyecto terminó en una reducción que nadie quiso llamar recorte. El programa demostró que puede corregirse, lo cual no es un dato menor. Pero también demostró que el tamaño de la ambición no garantiza la viabilidad de ningún proyecto.

Daron Acemoglu y James Robinson argumentan en Why Nations Fail (2012), con respaldo empírico de decenas de casos históricos, que las transformaciones económicas sostenibles requieren instituciones que funcionen con independencia del poder político: reglas que se apliquen independientemente de quién manda, mecanismos de corrección que operen sin necesidad de que un líder los active. Arabia Saudita diversificó su economía de manera real desde 2016. Sus instituciones políticas, en cambio, siguen siendo prácticamente las mismas que las de hace una década. Esa brecha es el riesgo que ningún indicador captura, porque los sistemas no avisan antes de romperse.

[IMAGE:/essay-aramco.jpg:Saudi Aramco produce aproximadamente el 10% del petróleo mundial y sigue siendo la empresa más rentable del planeta.]

## Conclusión

Por sus propios indicadores, Visión 2030 es el programa de diversificación más exitoso que un **Estado rentista** haya ejecutado en la era contemporánea. Programas similares han fracasado antes, no por falta de ambición, sino por falta de ejecución. Visión 2030, por el contrario, produjo cambios estructurales concretos y medibles en menos de una década.

Para otros países que enfrentan una transición económica similar, la experiencia saudita aporta un caso real, con evidencia de que el Estado puede dirigir una transformación de esta escala cuando tiene capital y decisión política para sostenerla.

El riesgo estructural del modelo no aparece en ninguno de los 1,290 indicadores. La concentración de poder que hizo posible el programa —que permitió tomar decisiones rápidas y mantenerlas sin necesidad de consenso ni negociación— es también lo que vuelve frágil al proyecto de maneras que los datos no reflejan. Un modelo conducido por una sola persona descansa sobre tres supuestos que nadie puede garantizar: que su juicio siempre será el correcto, su voluntad siempre la misma y su permanencia indefinida.

Arabia Saudita construyó aeropuertos, una industria turística y un sector privado donde antes no había nada. Lo que todavía no ha construido son las instituciones que sostengan eso cuando Mohammed bin Salmán ya no esté, cuando el precio del petróleo caiga de forma repentina o cuando la presión social supere lo que la monarquía puede contener.

Arabia Saudita protagoniza la transformación económica más ambiciosa de su historia. El problema es que el hilo del que pende no cuenta con ninguna garantía a largo plazo.

## Referencias

• Acemoglu, D., y Robinson, J. A. (2012). Why nations fail: The origins of power, prosperity, and poverty. Crown Publishers.
• Arab News. (2025, 14 de abril). Saudi Vision 2030 enters third phase with 93% of targets met.
• Asharq Al-Awsat. (2025). Saudi CEDA reviews Vision 2030 progress.
• Ross, M. L. (2012). The oil curse: How petroleum wealth shapes the development of nations. Princeton University Press.
• Travel and Tour World. (2025). Saudi Arabia propels into the final phase of Vision 2030, surpassing expectations with 123 million visitors.
• Vision 2030. (2025). Annual report 2025. Kingdom of Saudi Arabia.`,
  },
  {
    slug: "geopolitica-litio",
    title: "Geopolítica del litio: el mineral que redefine el poder global",
    excerpt:
      "El litio no es solo una commodity. Es la nueva batalla por la influencia global, y América Latina está en el centro del tablero sin una estrategia clara.",
    date: "Próximamente",
    readTime: "10 min",
    category: "Geopolítica",
    body: "",
  },
  {
    slug: "spacex-ipo",
    title: "La OPI de SpaceX: el mercado que no tiene manual para esto",
    excerpt:
      "SpaceX no es Tesla. La eventual salida a bolsa del proyecto espacial de Elon Musk plantea preguntas que los modelos de valoración tradicionales no fueron diseñados para responder.",
    date: "Próximamente",
    readTime: "10 min",
    category: "Finanzas",
    body: "",
  },
];

export const projects: Project[] = [
  {
    slug: "vision-2030-proyecto",
    title: "Visión 2030",
    subtitle: "Análisis Geopolítico",
    description:
      "Análisis de la transformación económica de Arabia Saudita y las contradicciones estructurales entre el modelo rentista y la diversificación prometida por el plan del príncipe heredero Mohammed bin Salman.",
    tags: ["Geopolítica", "Medio Oriente", "Análisis"],
    year: "2026",
    institution: "Problematica Internacional · IBERO",
    highlight: "12 min de lectura · Mayo 2026",
    size: "large",
    link: "/blog/vision-2030",
  },
  {
    slug: "spacex-ipo-proyecto",
    title: "La OPI de SpaceX",
    subtitle: "Finanzas · Próximamente",
    description:
      "SpaceX no es Tesla. La eventual salida a bolsa plantea preguntas que los modelos de valoración tradicionales no fueron diseñados para responder.",
    tags: ["Finanzas", "Tecnología", "Mercados"],
    year: "2026",
    institution: "Próximo ensayo",
    size: "small",
  },
  {
    slug: "litio-proyecto",
    title: "Geopolítica del Litio",
    subtitle: "Geopolítica · Próximamente",
    description:
      "El litio no es solo una commodity. Es la nueva batalla por la influencia global, y América Latina está en el centro del tablero sin una estrategia clara.",
    tags: ["Geopolítica", "América Latina", "Energía"],
    year: "2026",
    institution: "Próximo ensayo",
    size: "small",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
