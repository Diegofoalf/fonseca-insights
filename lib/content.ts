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
    title: "SpaceX y la OPI de $1.8 billones: disrupción real, valuación especulativa",
    excerpt:
      "La empresa más disruptiva del espacio está a punto de debutar en bolsa con la mayor oferta pública inicial en la historia de los mercados. SpaceX no compitió con la industria espacial: la está volviendo obsoleta. Sus logros son reales. Sus números, cuestionables. La pregunta no es si la empresa es extraordinaria. La pregunta es a qué precio deja de serlo.",
    date: "Junio 2026",
    readTime: "13 min",
    category: "Finanzas",
    featured: true,
    coverImage: "/essay-spacex-cover.jpg",
    coverCaption: "El Falcon 9 de SpaceX despega desde el Kennedy Space Center. El mismo propulsor que redefinió la economía del espacio ahora apunta a la mayor salida a bolsa de la historia.",
    body: `Durante medio siglo, llegar al espacio fue un privilegio de Estados y un puñado de contratistas que cobraban cientos de millones de dólares por cada lanzamiento. El cohete se construía, volaba una vez y se destruía. Ese modelo convirtió al espacio en un recurso escaso y carísimo, reservado a gobiernos y a grandes operadores de satélites. **SpaceX** rompió esa lógica al tratar el cohete como un activo recuperable en lugar de un desechable, y con ello abarató el acceso a la órbita hasta redefinir la economía de toda una industria.

Hoy, esa empresa se prepara para la mayor salida a bolsa de la historia, con una valuación objetivo cercana a los 1.8 billones de dólares, logro que merece reconocimiento y escepticismo. Reescribió la economía del espacio y construyó con Starlink una posición de mercado que ningún rival se acerca a disputar. Sin embargo, la valuación a la que apunta su salida a bolsa no encuentra respaldo en sus estados financieros actuales. Esa combinación convierte a la inversión en su debut en una apuesta de riesgo elevado y, de validarse la valuación, en una concentración de poder y riqueza que trasciende lo bursátil.

[IMAGE:/essay-spacex-intro.jpg:El mismo propulsor que despega vuelve a aterrizar. Esa imagen, antes impensable, convirtió el cohete de consumible a activo — y con ello derrumbó la estructura de costos de toda una industria.]

## Destruir para construir: el modelo que volvió obsoleta a una industria

Joseph Schumpeter (1942) describió el capitalismo como un proceso de **destrucción creativa**: la innovación no compite dentro de un mercado, lo vuelve obsoleto y construye uno distinto sobre sus ruinas. Blockbuster no cerró porque alguien abriera mejores videotiendas, quebró porque ir por un DVD dejó de tener sentido. SpaceX es el ejemplo más claro. No le arrebató cuota de mercado a sus competidores: los está expulsando del mercado. No llegó a negociar mejores precios dentro del modelo existente; llegó con un modelo distinto que convirtió los costos de sus competidores en una desventaja estructural. No jugó con las reglas del juego. Llegó a imponer las suyas.

El rival histórico es United Launch Alliance (ULA), la empresa conjunta creada en 2006 por Boeing y Lockheed Martin que durante años fue proveedor casi monopólico de los lanzamientos de seguridad nacional de Estados Unidos. Su modelo dependía de cohetes desechables fabricados sobre una cadena de más de 1,200 subcontratistas, con misiones que llegaban a costar 400 millones de dólares. SpaceX redujo ese costo a 62 millones por lanzamiento para clientes externos con el Falcon 9 y a 15 millones en misiones propias gracias a la reutilización. Lo que lo hace posible es que el mismo propulsor puede volar hasta 29 veces, algo que el modelo anterior hacía impensable porque nadie necesitaba que un cohete sobreviviera al lanzamiento (Sacra, 2026). En 2025, la empresa realizó 165 lanzamientos orbitales —su sexto récord anual consecutivo— y concentró cerca del 85% de los lanzamientos orbitales en Estados Unidos (Sacra, 2026).

No es una diferencia de capacidad, es de incentivos. El contratista tradicional operaba bajo contratos de costo más margen (**cost-plus contracts**), donde el gobierno reembolsa los gastos y añade una ganancia calculada sobre ellos; cuanto más gasta el contratista, más gana, y nadie tiene razón para abaratar. SpaceX trabaja mayoritariamente a precio fijo: cada dólar que ahorra es ganancia propia, y cada sobrecosto lo absorbe ella. Ese reordenamiento de incentivos, más que cualquier mejora tecnológica, explica por qué un actor nuevo logró desplomar costos que la industria llevaba décadas inflando. La destrucción creativa, en este caso, fue tanto financiera como de ingeniería.

[IMAGE:/essay-spacex-destruccion.jpg:Instalaciones de United Launch Alliance, el rival histórico desplazado por el modelo de cohete reutilizable de SpaceX.]

## El flywheel que convirtió las explosiones en ventaja competitiva

El verdadero motor de SpaceX no es un cohete, sino un ciclo que se retroalimenta. En física, un **flywheel** —volante de inercia— es una rueda pesada que, una vez en movimiento, acumula energía con cada giro: arrancarla cuesta trabajo, pero mantenerla girando cuesta cada vez menos. En los negocios, la lógica es la misma: un ciclo donde cada elemento refuerza al siguiente hasta que el sistema genera su propio impulso. Los ingresos por lanzamiento financian la investigación y el desarrollo; ese desarrollo abarata el acceso al espacio; el acceso barato hizo viable desplegar una constelación de miles de satélites; y esa constelación genera el ingreso recurrente que sostiene la siguiente apuesta. Es el mismo patrón que Musk aplicó en Tesla, y es probablemente lo que mejor hace: construir economías de escala en industrias donde nadie había considerado que fueran posibles.

El motor de ese ciclo es una metodología de I+D que ningún contratista convencional se atrevió a hacer. El desarrollo de Starship avanza a base de pruebas destructivas: se construye un prototipo, se vuela, se observa cómo falla y se corrige. Los vuelos 7 y 8 de 2025 terminaron con la etapa superior desintegrada durante la reentrada, pero cada fallo alimentó el rediseño del escudo térmico que dio origen a la versión mejorada de la nave (Space.com, 2025). Lo que para la industria tradicional sería un desastre público e irrepetible, para SpaceX es un dato de aprendizaje barato, porque su manufactura en serie hace asequible el siguiente prototipo. Las explosiones, en sentido literal, son parte del costo de investigación y desarrollo.

Ese ciclo desembocó en que el negocio principal de toda la empresa ya no sea el cohete, sino el internet satelital. En 2025, Starlink generó 11,400 millones de dólares, el 61% de los 18,700 millones de ingresos totales de la compañía, y obtuvo 4,400 millones de utilidad operativa (Sacra, 2026). La vertiente de cohetes y lanzamientos sigue siendo significativa, unos 4,100 millones en ingresos, sostenida en buena medida por contratos gubernamentales. Pero es Starlink el que define el peso de la compañía y financia las ambiciones más caras. La dominancia de esa constelación es abrumadora: según AEI Space Data Navigator, la empresa opera 10,262 satélites frente a los 632 de OneWeb, el segundo operador del mundo (El CEO, 2026). Ningún competidor juega en la misma liga que Starlink: ni OneWeb, ni Amazon Kuiper, ni los proyectos estatales chinos.

[IMAGE:/essay-spacex-starlink.jpg:Constelación de satélites Starlink en órbita baja terrestre, el negocio que hoy genera el 61% de los ingresos de SpaceX.]

## Fortaleza y vulnerabilidad se escriben igual

Esa dominancia descansa sobre dos variables que la empresa no controla del todo. La primera es su relación con el gobierno de Estados Unidos. Una parte sustancial de sus ingresos por lanzamiento proviene de contratos con la NASA y el Departamento de Defensa; programas como Golden Dome y la división Starshield profundizan esa dependencia en lugar de reducirla. Esa dependencia es fortaleza y vulnerabilidad al mismo tiempo: un cambio en las prioridades presupuestales, en la política de contratación o en la voluntad de mantener a SpaceX como proveedor preferente alteraría su base de ingresos más estable.

La otra variable es Elon Musk. Su liderazgo explica la visión, la cultura de iteración rápida y la capacidad de levantar capital, pero también concentra en una sola persona el riesgo reputacional, estratégico y de gobernanza de toda la empresa. Si el gobierno reduce su apoyo o si Musk deja de estar al frente, SpaceX queda expuesta de una forma que su valuación de 1.8 billones no contempla. Asumir continuidad indefinida en ambos frentes no es optimismo: es fe.

[IMAGE:/essay-spacex-gobierno.jpg:El Pentágono y la NASA, las dos instituciones de las que SpaceX depende para una parte sustancial de sus contratos de lanzamiento.]

## La OPI que hará historia sin utilidades

SpaceX presentó su solicitud de salida a bolsa ante la **SEC** (Securities and Exchange Commission) apuntando a una valuación de entre 1.8 y 2 billones de dólares, con la intención de recaudar hasta 75 mil millones, lo que la convertiría en la mayor oferta pública inicial de la historia (Gurufocus, 2026; Bloomberg, 2026). El problema es la distancia entre esa cifra y los fundamentales de la empresa.

Con ingresos de 18,700 millones de dólares, una valuación de 1.8 billones implica un **P/S ratio** (Precio-Ventas) de 96 veces sus ingresos, es decir, por cada dólar que la compañía vende, el inversor estaría pagando 96 dólares. En comparación, las grandes tecnológicas suelen cotizar entre 5 y 15 veces sus ventas (Sacra, 2026). Y los dos indicadores más importantes en valuación bursátil son aún más preocupantes. El primero es el **EPS** (Ganancia por Acción), que mide cuánto gana la empresa por cada acción emitida: se obtiene dividiendo la utilidad neta entre el número total de acciones. Con ese dato se calcula el segundo, el **P/E ratio** (Precio-Beneficio), que mide cuánto paga el mercado por cada dólar de ganancia. El problema es que SpaceX reportó una pérdida neta de 4,900 millones en 2025: su EPS es negativo, y sin ganancia no hay P/E que calcular. Los dos indicadores más importantes de cualquier inversión, sencillamente, no existen. La empresa pediría a los inversores pagar uno de los múltiplos más altos del mercado por una compañía que, bajo las normas contables formales, todavía pierde dinero.

De los 75 mil millones proyectados a recaudar, la mayoría nunca llegará a SpaceX. El 78%, unos 58,500 millones, ya está comprometido para cubrir deudas y obligaciones financieras con X, xAI y EchoStar (Fortune, 2026). Quedan menos de 17 mil millones para el crecimiento real de la empresa. La absorción de xAI, lejos de mejorar el panorama económico, lo empeoró: trasladó sus pérdidas a los estados financieros de SpaceX y sumó 17 mil millones en quema de caja (CNBC, 2026; Sacra, 2026). La mayor oferta pública inicial de la historia no financia el futuro de la empresa, financia el ecosistema empresarial de su fundador.

A una valuación de 1.8 billones, SpaceX se ubicaría entre las diez empresas más valiosas del mundo, por debajo de Nvidia, Alphabet, Apple, Microsoft, Amazon y Saudi Aramco, pero por encima de Meta y Tesla (The Motley Fool, 2026). Todas esas compañías generan utilidades sólidas y sostenidas. SpaceX no. Las grandes OPI de los últimos veinte años no tuvieron un inicio favorable: Meta, Aramco y Uber terminaron por debajo de su precio de salida en el primer año. A pesar del precedente, SpaceX llega con múltiplos que ninguna de ellas se atrevió a pedir.

[IMAGE:/essay-spacex-opi.jpg:Pantallas del NYSE mostrando datos bursátiles, representando el debut en bolsa más esperado de la década.]

## Narrativas cobradas por adelantado

Si los fundamentales presentes no sostienen la valuación, ¿qué la sostiene? La respuesta es una narrativa de futuro seductora, pero todavía especulativa. La apuesta más llamativa es llevar centros de datos de inteligencia artificial al espacio, aprovechando la energía solar prácticamente ininterrumpida en órbita y el enfriamiento natural del vacío para superar las limitaciones de agua y energía que estrangulan a los centros de datos terrestres. Como concepto es innovador y coherente con la integración vertical de la empresa. Como negocio, está lejos de ser viable en el corto plazo: los cohetes no vuelan con la frecuencia necesaria, los chips que requieren aún no se fabrican y nadie ha probado que el modelo sea rentable.

Lo mismo ocurre con la misión fundacional de colonizar Marte que, con los avances y presupuesto actual, sigue siendo un horizonte lejano. La fusión con Tesla tampoco está más cerca. Resulta inviable al menos en el corto y mediano plazo: las estructuras accionarias de ambas empresas son incompatibles y una combinación entre dos compañías controladas por la misma persona invita a litigios por conflicto de interés (CNBC, 2026). En los tres casos, son apuestas a futuro que el mercado paga como certezas.

[IMAGE:/essay-spacex-marte.jpg:Marte, los data centers orbitales, la fusión con Tesla: tres apuestas a futuro que el mercado ya cotiza como certezas. Ninguna tiene fecha de rentabilidad.]

## El riesgo que no aparece en ningún balance

La operación tiene también una implicación que los múltiplos no capturan. Si la salida a bolsa valida la valuación objetivo, la participación cercana al 42% de Musk en la empresa combinada SpaceX-xAI lo convertiría en el primer billonario de la historia —lo que en inglés se denomina **trillionaire**—, una categoría que nunca había existido (Fortune, 2026). Lo impactante es lo que ese capital representa en términos de poder real sobre decisiones que afectan a millones de personas.

Musk no controlaría una sola empresa de escala extraordinaria, sino dos. Sumadas, ambas superarían el PIB de la mayoría de los países del mundo, y no en sectores secundarios: telecomunicaciones, inteligencia artificial, energía y defensa. Eso no es solo un riesgo de mercado, es un riesgo de estructura global.

[IMAGE:/essay-spacex-poder.jpg:Telecomunicaciones, inteligencia artificial, energía y defensa: no son sectores secundarios. Concentrarlos bajo una sola persona no es solo un riesgo financiero.]

SpaceX merece el reconocimiento y el escepticismo con los que abre este ensayo. La tecnología es real, la ventaja competitiva es genuina y Starlink es un negocio que ningún rival está cerca de replicar.

El problema es el precio que se pide por todo eso. La OPI no financia el futuro de la empresa: financia las deudas del presente y las apuestas de su fundador. Los números que justificarían una valuación de 1.8 billones aún no existen, y las narrativas que la sostienen —inteligencia artificial orbital, Marte, la fusión con Tesla— siguen siendo exactamente eso: narrativas.

Lo que está en juego no es solo si la acción sube o baja el día del debut. Es si el mercado está dispuesto a validar una concentración de riqueza y poder sin precedente histórico, en manos de una sola persona, sobre industrias que no son periféricas. Invertir en SpaceX es una decisión financiera. Pero también es una decisión sobre qué tipo de arquitectura de poder global se está dispuesto a normalizar.

## Referencias

• Bloomberg. (2026). How SpaceX's dream of a record-breaking IPO stacks up. https://www.bloomberg.com/graphics/2026-spacex-ipo-stock-market-nasdaq-listings/
• CNBC. (2026, 3 de febrero). Musk's xAI, SpaceX combo is the biggest merger of all time, valued at $1.25 trillion. https://www.cnbc.com/2026/02/03/musk-xai-spacex-biggest-merger-ever.html
• El CEO. (2026). Los operadores con más satélites en el mundo [Infografía, datos de AEI Space Data Navigator]. https://elceo.com
• Fortune. (2026, 28 de mayo). SpaceX's $80 billion IPO has a catch: 78% of the money is already spoken for. https://fortune.com/2026/05/28/spacex-elon-musk-ipo-money/
• Gurufocus. (2026). SpaceX aims for $1.8 trillion IPO valuation, plans to raise $75 billion. https://www.gurufocus.com/news/8891478/
• Sacra. (2026). SpaceX revenue, valuation & funding. https://sacra.com/c/spacex/
• Schumpeter, J. A. (1942). *Capitalism, socialism and democracy*. Harper & Brothers.
• Space.com. (2025). SpaceX gets FAA approval for 25 Starship launches per year. https://www.space.com/space-exploration/private-spaceflight/spacex-gets-faa-approval-for-25-starship-launches-per-year
• The Motley Fool. (2026). Largest companies by market cap in 2026. https://www.fool.com/research/largest-companies-by-market-cap/`,
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
    subtitle: "Finanzas · Junio 2026",
    description:
      "SpaceX reescribió la economía del espacio. Lo que no reescribió son sus estados financieros: la mayor OPI de la historia llega con pérdidas reales y múltiplos que ninguna empresa rentable del mundo alcanza.",
    tags: ["Finanzas", "Tecnología", "Mercados"],
    year: "2026",
    institution: "Problematica Internacional · IBERO",
    highlight: "13 min de lectura · Junio 2026",
    size: "small",
    link: "/blog/spacex-ipo",
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
