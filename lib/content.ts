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

Ese ciclo desembocó en que el negocio principal de toda la empresa ya no sea el cohete, sino el internet satelital. En 2025, Starlink generó 11,400 millones de dólares, el 61% de los 18,700 millones de ingresos totales de la compañía, y obtuvo 4,400 millones de utilidad operativa (Sacra, 2026). La vertiente de cohetes y lanzamientos sigue siendo significativa, unos 4,100 millones en ingresos, sostenida en buena medida por contratos gubernamentales. Pero es Starlink el que define el peso de la compañía y financia las ambiciones más caras. La dominancia de esa constelación es abrumadora: según AEI Space Data Navigator, la empresa opera 10,262 satélites frente a los 632 de OneWeb, el segundo operador del mundo (El CEO, 2026). Ningún competidor juega en la misma liga que Starlink: ni OneWeb, ni Amazon Leo, ni los proyectos estatales chinos.

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

Musk no controlaría una sola empresa de escala extraordinaria, sino dos. Sumadas, ambas superarían el PIB de la mayoría de los países del mundo, y no en sectores secundarios: telecomunicación, inteligencia artificial, energía y defensa. Eso no es solo un riesgo de mercado, es un riesgo de estructura global.

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
  {
    slug: "limites-fed-2026",
    title: "Un instrumento, dos objetivos y un estrecho: los límites de la Fed en 2026",
    excerpt:
      "La Reserva Federal mantuvo su tasa sin cambio. Las condiciones financieras de Estados Unidos se movieron de todas formas, y con fuerza. El detonante no salió de Washington: salió de un estrecho de treinta y tres kilómetros en el Golfo Pérsico. La pregunta ya no es qué hará la Fed. Es qué puede hacer cuando la variable que manda no está en sus manos.",
    date: "Julio 2026",
    readTime: "15 min",
    category: "Finanzas",
    featured: true,
    coverImage: "/essay-fed-cover.jpg",
    coverCaption: "El Estrecho de Ormuz visto desde el aire. Treinta y tres kilómetros de ancho en su punto más angosto: el cuello de botella que en 2026 terminó fijando las condiciones financieras de la economía más grande del mundo.",
    body: `Durante cuatro décadas, la narrativa dominante sobre los bancos centrales fue la de un piloto al mando. Paul Volcker controló la inflación de los setenta llevando la tasa de referencia hasta 20%, a costa de una recesión brutal y de un desempleo que superó el 10%. Alan Greenspan condujo dos décadas de crecimiento con ajustes graduales de tasas, el periodo que se bautizó como **"La gran moderación"**, aunque al crédito barato de sus últimos años se le atribuye hoy parte de la responsabilidad por la burbuja inmobiliaria. Ben Bernanke reaccionó a la crisis financiera de 2008 inundando los mercados de liquidez y comprando deuda a gran escala cuando nadie más quería comprarla; la crisis ocurrió de todos modos, y Estados Unidos perdió cerca de nueve millones de empleos. Jerome Powell respondió al cierre económico de la pandemia llevando las tasas a cero en cuestión de días y garantizando el crédito corporativo, después de que el mercado de bonos del Tesoro, el más líquido del mundo, dejara de funcionar durante varios días de marzo de 2020.

Ninguno de los cuatro evitó el golpe. Lo que hicieron fue amortiguarlo, y en algunos casos sembrar el siguiente. Pero incluso en esa versión menos heroica, la premisa se sostenía: había un volante, alguien lo tenía en las manos, y ese alguien era la Reserva Federal.

El primer semestre de 2026 pone esa lección a prueba. La inflación estadounidense subió y bajó al ritmo del precio del barril de petróleo. Los mercados se movieron con las noticias de un paso marítimo del Golfo Pérsico. Y en torno a la reunión de julio del Comité Federal de Mercado Abierto (**FOMC**) ocurrió algo que ningún manual de política monetaria anticipa: las condiciones financieras de Estados Unidos se aflojaron y se apretaron violentamente, sin que la Reserva Federal moviera un solo instrumento.

Este ensayo argumenta que lo ocurrido no es un accidente pasajero, sino la expresión de un cambio de política monetaria. La herramienta central de la Fed fue diseñada para corregir **desequilibrios de demanda**: situaciones donde los precios suben porque la gente quiere comprar más de lo que la economía alcanza a producir. Contra eso, subir la tasa de interés funciona bien: encarece el crédito, enfría el gasto y los precios ceden. Lo que enfrenta hoy es un **shock de oferta**: una alteración en la disponibilidad o el costo de producir un bien esencial, ajena por completo a la cantidad que los consumidores deseen o puedan comprar. Nadie en Estados Unidos decidió consumir más gasolina en 2026. Simplemente llega menos petróleo al mercado, porque hay un estrecho bloqueado, y eso encarece todo lo que depende de él.

La distinción decide qué puede y qué no puede hacer un banco central. Contra un exceso de demanda, subir tasas ataca la causa directamente: menos crédito, menos gasto, menos presión sobre los precios. Contra una restricción de oferta, subir tasas no toca la causa —el petróleo sigue sin llegar— y solo actúa sobre la víctima, que es la actividad económica. El instrumento no falla por debilidad; falla porque está atacando la causa equivocada. Frente a ese tipo de shock, el banco central no pierde relevancia, pero deja de tener el control. Y hay dos maneras conocidas de equivocarse cuando eso pasa. Ambas ya ocurrieron.

[IMAGE:/essay-fed-intro.jpg:El edificio Marriner S. Eccles, sede de la Reserva Federal en Washington. Durante cuarenta años se asumió que ahí estaba el volante de la economía global.]

## Una palanca, dos direcciones opuestas

En 1952, el economista neerlandés Jan Tinbergen, primer Nobel de Economía compartido en 1969, formuló un principio que hoy se conoce como la **regla de Tinbergen**: para alcanzar un número determinado de objetivos de política económica se necesita, al menos, ese mismo número de instrumentos independientes. Con un solo instrumento no se pueden perseguir dos metas que apunten en direcciones opuestas.

La Reserva Federal opera bajo un **mandato dual**: estabilidad de precios y máximo empleo. En condiciones normales eso no representa un problema, porque los dos objetivos se mueven juntos. Cuando la economía se sobrecalienta, suben los precios y disminuye el desempleo; el banco central sube tasas y ambos se moderan. Cuando la economía se enfría, los precios bajan y el desempleo aumenta; el banco central baja tasas y ambos se reactivan. La misma palanca sirve para las dos metas porque las dos metas se mueven en la misma dirección.

Un shock de oferta rompe esa alineación, y lo hace por una razón mecánica. Cuando el precio de un insumo esencial se dispara por causas ajenas a la economía doméstica (una guerra, un embargo, un bloqueo marítimo), ese encarecimiento actúa a la vez como un impuesto sobre el consumo y como un costo adicional para toda empresa que use ese insumo. Los precios suben y la actividad se contrae al mismo tiempo. Es el fenómeno que en los años setenta se bautizó como **estanflación**: estancamiento con inflación, la combinación que la teoría anterior consideraba imposible. Alan Blinder documentó en 1979 cómo esa mezcla desarmó el instrumental de la época.

Ahí el banco central queda con un instrumento único frente a dos objetivos que ahora se contradicen: si sube tasas para contener los precios en aumento, ahoga el crecimiento económico; si no las sube, cede a la inflación y los precios siguen subiendo. No hay para dónde jalarle. Es una decisión sin respuesta correcta.

Las proyecciones de la propia Fed muestran ese intercambio con claridad. Entre marzo y junio de 2026, el Comité revisó su expectativa de inflación **PCE** (Personal Consumption Expenditures) para el cierre del año de 2.7% a 3.6%, casi un punto porcentual al alza. En el mismo trimestre, bajó su proyección de crecimiento del producto de 2.4% a 2.2%. Precios al alza, actividad a la baja, en la misma actualización. Esa es la firma estadística de un shock de oferta, y es exactamente lo contrario de lo que produce un exceso de demanda.

Cuatro veces al año, cada participante del Comité anota dónde cree que debería estar la tasa al cierre del año. La mediana de esas anotaciones subió de 3.4% en marzo a 3.8% en junio. Como la tasa vigente está en 3.625%, el participante promedio piensa que antes de diciembre habrá que subirla.

Lo interesante aparece cuando se dejan de mirar promedios y se miran las anotaciones individuales. La más baja dice 3.4%, la más alta dice 4.4%. Un punto porcentual completo separa a un extremo del otro, dentro del mismo comité, mirando la misma economía, con los mismos datos sobre la mesa. Las minutas de junio explican por qué: unos ven un escenario donde la inflación cede y permite bajar tasas, otros ven precios que van a forzar a subirlas. No están viendo números distintos. Están interpretando los mismos números en direcciones opuestas, que es lo que ocurre cuando la brújula habitual deja de señalar el norte.

Ese desacuerdo dejó de ser estadístico el 29 de julio. El Comité mantuvo la tasa en 3.50%–3.75% por quinta reunión consecutiva, pero lo hizo con un voto de 9–3: tres de ellos votaron por subir la tasa en 0.25%. Seis semanas antes, la decisión había sido unánime. La dispersión de opiniones se convirtió en fractura pública en una sola reunión. Y la naturaleza del disenso importa: no discutían la magnitud del ajuste, que es la discusión habitual de un banco central; discutían si había que ajustar. Un comité que enfrenta un exceso de demanda debate cuánto apretar; uno que enfrenta un shock de oferta debate si apretar sirve de algo.

Los bancos centrales tampoco improvisan cada decisión. Cuentan con fórmulas de referencia (la más conocida es la **regla de Taylor**) que funcionan como una calculadora: se les introduce la inflación observada y el estado del mercado laboral, y devuelven en qué nivel debería estar la tasa. No son obligatorias, pero sirven de punto de partida y de control de sensatez.

El problema es que esas fórmulas fueron diseñadas suponiendo que la inflación viene de la demanda. Cuando el alza de precios viene de la oferta, la calculadora se contradice: la inflación alta le ordena subir la tasa, mientras la economía debilitada le ordena bajarla. Devuelve dos respuestas incompatibles al mismo tiempo. El Monetary Policy Report de julio lo reconoce con el lenguaje medido de un documento oficial, al advertir que no resulta deseable que el Comité se apegue estrictamente a las prescripciones de ninguna regla en particular. Sus propias fórmulas perdieron relevancia.

[IMAGE:/essay-fed-tinbergen.jpg:Una sola palanca para dos objetivos que apuntan en direcciones opuestas: el problema que Jan Tinbergen formuló en 1952 y que la Fed enfrenta hoy.]

## La inflación que llegó por barco

La afirmación de que la inflación estadounidense de 2026 es un fenómeno de oferta no es una interpretación. Es lo que dicen los datos y, más notablemente, lo que dice la Fed cuando le explica al Congreso qué está pasando.

El Monetary Policy Report enumera tres factores detrás del alza de precios: las alzas arancelarias que encarecieron bienes importados, el salto en los precios de la energía por las restricciones al suministro de petróleo tras el inicio del conflicto en Medio Oriente, y el aumento de demanda de productos de alta tecnología asociados a la inteligencia artificial. Aranceles, guerra y semiconductores. Ninguno de los tres responde a la Reserva Federal.

La evidencia estadística es todavía más nítida. Durante el primer semestre de 2026, el índice general de precios al consumidor (**CPI**) de Estados Unidos replicó el movimiento del componente energético casi mes con mes. En marzo, la energía subió 10.9% mensual y el índice general 0.9%. En junio, la energía cayó 5.7% (la mayor caída en un mes desde abril de 2020) y el índice general cayó 0.4%. Entre esos dos extremos, la **inflación subyacente**, que excluye los productos más volátiles como alimentos y energía, no se movió más de cuatro décimas en todo el semestre. Cerró junio en 2.6%, seis décimas por encima de la meta de 2% del Comité.

El dato más revelador, sin embargo, es uno que casi nadie cita. El Banco de la Reserva Federal de Dallas publica una media truncada del índice PCE: en lugar de promediar los cambios de precio de todos los bienes y servicios, los ordena, descarta los que se movieron de forma anómala (la gasolina que trepa 27% en un año, el huevo que salta 4% en un mes, el seguro de auto que cae 2%) y promedia lo que queda en medio. Lo que sobrevive al filtro es la tendencia de fondo: cómo se comportan los precios cuando ningún sector está viviendo un episodio excepcional. Mientras el PCE total saltaba a 4.1% en los doce meses a mayo, esa media truncada bajó de 2.6% a 2.4%.

Ese número no anticipa una contracción: el producto creció 2.1% anualizado en el primer trimestre y el desempleo se mantiene estable en 4.2%. Dice algo más preciso. La media truncada es la mejor aproximación disponible a cómo se vería la inflación si se descontara el shock energético, y bajo ese supuesto la Reserva Federal ya habría cumplido su objetivo: 2.4% frente a una meta de 2% es, en términos históricos, una victoria. La Fed ganó la batalla que sabía pelear y perdió la que no está en sus manos. Donde el golpe sí se siente es en el consumidor, cuyo gasto creció apenas 1.3% anualizado en los primeros cinco meses del año mientras la gasolina subía 26.7%. Y ese golpe no lo revierte una tasa de interés: encarecer el crédito enfría la inversión y modera la contratación, pero no abre un estrecho bloqueado.

Los comunicados oficiales confirman esa lectura, y lo hacen con las palabras de la propia institución. Comparado palabra por palabra, el comunicado del FOMC del 29 de julio apenas registra un cambio de fondo respecto al del 17 de junio: donde antes se leía que el Comité "reafirmó" su política de mantener reservas amplias en el sistema bancario, ahora dice que la "continúa". Nada más. Y lo que no cambió resulta más elocuente que lo que cambió, porque las dos frases centrales aparecen intactas en ambos documentos. La actividad económica, dice el Comité, se expande a paso sólido "pese a la elevada incertidumbre que se debe, en parte, al conflicto en Medio Oriente". Y la inflación permanece elevada respecto a la meta de 2% "reflejando en parte shocks de oferta que han impulsado aumentos de precios en ciertos sectores, incluida la energía". Por segunda reunión consecutiva, el conflicto se menciona antes que la inflación. La Reserva Federal sostiene, en su documento más formal, el mismo diagnóstico que este ensayo: su problema se origina a más de 10,000 kilómetros, y no depende del banco central resolverlo.

[IMAGE:/essay-fed-ormuz.jpg:Un buque petrolero cruzando el Estrecho de Ormuz. La inflación estadounidense de 2026 no se decidió en Washington: llegó por mar.]

## De la Fed al Golfo Pérsico

Kevin Warsh tomó protesta como presidente de la Reserva Federal el 22 de mayo de 2026 y presidió su primera reunión en junio. Sus primeras decisiones no fueron sobre tasas, sino sobre cómo comunica la institución, y merecen atención porque revelan una apuesta.

Warsh eliminó el **forward guidance**: la práctica, consolidada durante las presidencias de Bernanke y Powell, de que el Comité oriente al mercado sobre la trayectoria futura de las tasas. Reescribió el comunicado del FOMC hasta dejarlo en unos pocos párrafos, despojado del lenguaje heredado. Y creó cinco grupos de trabajo independientes para revisar la comunicación de la institución, la política de hoja de balance, la calidad de las fuentes de datos, la productividad y el empleo, y, el más significativo, los marcos para analizar los impulsores de la inflación.

Ese último punto no es menor. Que un banco central convoque a un grupo de trabajo para revisar cómo entiende las causas de la inflación es, en lenguaje institucional, la admisión de que no está seguro de entenderlas. Es una señal de honestidad intelectual y, al mismo tiempo, de la profundidad del desconcierto.

La eliminación del forward guidance encierra una paradoja. El forward guidance existe precisamente para gestionar expectativas cuando el banco central no puede o no quiere mover tasas: es la herramienta que permite influir sobre las condiciones financieras sin tocar el instrumento principal. Warsh la retiró en el momento de mayor incertidumbre externa de la última década. La apuesta es coherente con su discurso de "cambio de régimen": recuperar credibilidad por la vía de los hechos y no de las promesas. El costo es dejar al mercado adivinando reunión por reunión, en medio de una guerra.

En la conferencia de prensa de julio, Warsh explicó esa apuesta con una franqueza que vale registrar. Reiteró que "no hay meta de inflación blanda, no hay meta implícita blanda: hay solo una meta, y es 2 por ciento", y desestimó el buen dato de inflación de junio con una frase que merece retenerse: cinco años de inflación por encima de la meta "no se curan en nueve semanas, ni con un solo mes de descensos modestos de precios". Pero el pasaje decisivo fue otro. Al señalar que los rendimientos nominales y reales del Tesoro habían subido de forma material desde la reunión anterior (con movimientos que ubicó entre los más significativos de las últimas dos décadas), Warsh se hizo en voz alta la pregunta que sostiene este ensayo: "Pero si el Comité no cambió su tasa de política, ¿qué pasó?"

Su respuesta fue que el mercado se había concentrado en datos y desarrollos económicos reales, que los participantes "están aprendiendo a jugarle a la pelota, no al árbitro", y que la reducción del forward guidance pudo haber contribuido a ello. Lo presentó como una mejora. Y cerró la idea con una frase que merece leerse dos veces:

"Después de todo, el banco central no necesita ser siempre y en todo lugar el centro de atención."

Es el presidente de la Reserva Federal describiendo el desplazamiento de su propia institución respecto del centro de la escena, y calificándolo de virtud. Puede leerse como humildad institucional o como la racionalización de un hecho consumado; probablemente sea ambas cosas. En cualquier caso, es la tesis de este ensayo enunciada por su protagonista.

Warsh reveló además las cuatro preguntas que ocuparon la discusión del Comité, y la segunda es, literalmente, el problema de Tinbergen: "Consideramos los shocks económicos de años recientes: cadenas de suministro tensionadas, conflictos militares, disrupciones de suministro energético, aumentos sustanciales de aranceles y el auge de inversión en inteligencia artificial. Difieren en sus fuentes; ¿difieren también en sus efectos sobre el producto y el empleo?" Un banco central que dedica su deliberación a preguntarse si sus herramientas funcionan igual frente a shocks de distinta naturaleza es un banco central que ya sospecha la respuesta.

El banco central más influyente del mundo declaró que ya no puede anticipar su propio camino. Eso no es un detalle de comunicación. Es la definición operativa de haber perdido el volante.

[IMAGE:/essay-fed-warsh.jpg:El podio vacío de la sala de prensa de la Reserva Federal. Kevin Warsh eliminó el forward guidance en el momento de mayor incertidumbre externa de la última década.]

## La autodestrucción del oro

Si el precio del petróleo, y no la decisión del Comité, es lo que termina fijando las condiciones monetarias, debería existir evidencia en los precios de los activos. La hay, y viene del más antiguo de todos.

El oro alcanzó su máximo histórico entre finales de enero y finales de febrero de 2026. Su cierre semanal más alto, 5,230 dólares la onza, ocurrió en la semana del 23 de febrero, prácticamente al mismo tiempo que estallaba el conflicto en Medio Oriente. Desde entonces, con la guerra en curso y el Estrecho de Ormuz bloqueado, el oro cayó 23%.

El oro es, antes que un metal, un **activo de resguardo de valor**: la gente no lo compra esperando que produzca algo, sino para preservar poder de compra cuando desconfía de las alternativas. Esa ventaja se evapora en cuanto otro activo empieza a conservar valor y además pagar por hacerlo. Por eso la relación histórica del oro no es con el miedo, sino con el rendimiento real de los bonos: entre 2003 y 2021, ambos se movieron de forma casi sistemáticamente opuesta.

Con eso a la mano, la caída se explica sola. La guerra bloqueó Ormuz; el bloqueo disparó los precios de la energía (el componente energético del PCE subió 24% interanual); esa alza empujó la inflación a 4.1%; la inflación instaló en el mercado la expectativa de que la Fed tendría que endurecer su postura; y esa expectativa elevó los rendimientos del Tesoro, que dejaron al oro sin argumento. Nótese que la Fed no tuvo que mover la tasa para que el mecanismo operara: bastó con que el mercado anticipara que tendría que hacerlo. La peor semana del metal en todo el periodo, con una caída de 9.5%, fue la del 16 de marzo: la semana en que sesionó el FOMC.

Lo que justificaba al oro como activo refugio era la incertidumbre. Pero una vez que el riesgo se materializa, la Fed se ve obligada a subir las tasas, y entonces refugiarse en bonos tiene más sentido que refugiarse en oro. El mismo hecho contra el que uno se estaba protegiendo es el que desencadena la reacción que destruye el valor de la protección. La guerra que le dio valor al oro fue la que se lo quitó.

[IMAGE:/essay-fed-oro.jpg:Lingotes de oro apilados en una bóveda. El metal alcanzó su máximo histórico justo cuando estalló el conflicto, y perdió 23% mientras la guerra seguía en curso.]

## Política monetaria estadounidense con impacto global

Hasta aquí el problema es estadounidense. Pero la política monetaria de la Reserva Federal nunca es solo estadounidense.

En 2013, la economista Hélène Rey presentó en el simposio de Jackson Hole un argumento que reformuló la manera de entender la autonomía monetaria. La teoría clásica sostenía un **trilema**: un país puede elegir dos de tres opciones: tipo de cambio fijo, libre movilidad de capitales y política monetaria independiente, pero nunca las tres a la vez.

La razón es mecánica. Supongamos que México promete mantener el peso fijo en 17 unidades por dólar y a la vez permite que el capital entre y salga sin restricciones. Si la Reserva Federal sube su tasa a 5% y Banxico quiere dejar la suya en 3% porque su economía doméstica no necesita más, cualquier inversionista hace la cuenta obvia: vende pesos, compra dólares y gana dos puntos sin correr riesgo. Ese movimiento presiona al peso a depreciarse. Pero México prometió 17. Para defender esa promesa, Banxico tiene que subir su tasa hasta igualar el atractivo del dólar, o quemar reservas hasta agotarlas. En el instante en que sube la tasa para defender el tipo de cambio, dejó de usarla para su economía: perdió la independencia monetaria. Cualquier combinación de dos exige renunciar a la tercera.

Rey mostró que en la práctica la disyuntiva es aún más estrecha. El capital global no se mueve país por país evaluando los méritos de cada uno: se mueve en oleadas. Hay periodos en que los inversionistas del mundo entero quieren riesgo y compran activos de mercados emergentes al mismo tiempo, y periodos en que se asustan y venden todo al mismo tiempo, sin distinguir entre un país bien administrado y uno mal administrado. Rey llamó a eso el **ciclo financiero global**, y demostró que quien más influye sobre su ritmo es la Reserva Federal: cuando el dinero en dólares se abarata, la ola sube; cuando se encarece, la ola se retira. Bajo ese ciclo, dejar flotar el tipo de cambio ya no garantiza independencia, porque el capital se va de todos modos. México, que efectivamente tiene un tipo de cambio flotante, es el caso que lo demuestra.

El trilema se degrada entonces a un **dilema**. Cuando la Fed endurece su política, el capital global se repliega hacia el dólar sin importar qué esté haciendo cada país. A un banco central emergente le quedan dos salidas, ambas caras. La primera es seguir a la Fed: subir su propia tasa para retener el capital, aunque su economía doméstica no lo necesite y aunque eso frene su crecimiento. La segunda es cerrar la cuenta de capital, es decir, imponer controles que restrinjan la entrada y salida de dinero del país, lo que preserva la autonomía monetaria a costa de ahuyentar la inversión extranjera y quedar aislado de los mercados internacionales. No hay una tercera puerta. La independencia monetaria plena, con mercados abiertos, dejó de existir.

Los datos actuales muestran ese dilema con crudeza. México mantiene su tasa de referencia en 6.50%, decidida por unanimidad el 25 de junio, con una inflación general de 3.1% en la primera quincena de julio, la más baja desde 2020. Eso implica una tasa real cercana a 3.4%. La tasa de referencia de la Fed está en 3.625% con una inflación general de 3.5%, lo que arroja una tasa real de aproximadamente 0.1%.

México tiene la inflación más baja y paga la tasa real más alta, por un margen de más de tres puntos porcentuales. Esa diferencia no refleja una economía más recalentada ni un banco central menos competente. Refleja el precio que cobra el mercado por no ser el emisor de la moneda de reserva mundial.

Cuando un extranjero le presta dinero a un país emergente comprando sus bonos, eso constituye **deuda de cartera**, y su naturaleza es distinta de la inversión directa en una planta o una fábrica: se liquida en un día y sin costo de salida. El Fondo Monetario Internacional advierte que esa deuda de cartera promedia hoy cerca del 15% del producto en los mercados emergentes, frente a un 9% en 2006. Los países deben cada vez más dinero del tipo que puede irse rápido.

Peor aún es quién presta ese dinero. El 80% proviene de entidades no bancarias: fondos de inversión, fondos de cobertura y aseguradoras. Es el doble de la proporción de hace dos décadas. La diferencia importa porque un banco que presta a diez años tiende a quedarse; un fondo de inversión responde a sus propios clientes, y si esos clientes piden su dinero de vuelta, el fondo vende lo que tenga sin importar la situación del país emisor. Es dinero más nervioso y volátil.

El Fondo le pone número a lo que ocurre cuando ese dinero se asusta. Cada vez que sube de forma abrupta la **aversión global al riesgo**, los mercados emergentes pierden capital equivalente a alrededor del 1% de su producto trimestral: en una economía del tamaño de la mexicana, miles de millones de dólares que sostenían el tipo de cambio y financiaban al gobierno, en el plazo de un trimestre. El efecto es mayor donde la deuda pública es más alta y las reservas internacionales más escasas, porque esos países tienen menos colchón para absorber la salida. Y la advertencia del Fondo es explícita en cuanto al detonante: un dólar más fuerte o un endurecimiento adicional de la Reserva Federal podrían disparar la siguiente ola. Nótese quién no aparece en esa lista de causas: el país que sufre la salida.

El contraejemplo existe. El peso mexicano se apreció cerca de 7% frente al dólar en los últimos doce meses y cotiza alrededor de 17.44 unidades; la disciplina de Banxico junto con el diferencial de tasas explican buena parte de ese comportamiento. El dilema de Rey no es una condena automática: un país con instituciones sólidas, reservas suficientes y credibilidad monetaria puede administrarlo, e incluso salir fortalecido de un ciclo adverso.

Pero administrarlo no es gratis, y la factura se puede leer. Esa brecha de más de tres puntos porcentuales de tasa real que México sostiene frente a Estados Unidos no es una cifra abstracta: es dinero que sale del presupuesto público cada año en pago de intereses, crédito que las empresas mexicanas no toman porque cuesta demasiado, e inversión productiva que simplemente no ocurre. Nada de eso responde a un desequilibrio mexicano. Es lo que cuesta jugar en un mercado global cuya moneda la imprime alguien más.

[IMAGE:/essay-fed-mexico.jpg:El edificio del Banco de México en el Centro Histórico de la Ciudad de México. México paga la tasa real más alta con la inflación más baja: el precio de no emitir la moneda de reserva mundial.]

## Apretar hacia dentro o apretar hacia afuera

La historia ofrece dos precedentes de bancos centrales que enfrentaron shocks de oferta de origen geopolítico. Son opuestos entre sí, y ambos son advertencias.

El primero es Arthur Burns. En octubre de 1973, tras la Guerra de Yom Kipur, la Organización de Países Árabes Exportadores de Petróleo impuso un embargo a Estados Unidos. Burns, entonces presidente de la Fed, describió el momento con exactitud: la manipulación de precios y suministros por parte de los exportadores llegó cuando los precios industriales ya subían a más de 10% anual y la industria operaba a plena capacidad. Burns respondió al alza del petróleo con restricción monetaria. El resultado fue convertir una recesión leve en la peor desde 1937, hasta llevar el desempleo a 8.8% en el segundo trimestre de 1975. El error fue tratar un problema de oferta con la herramienta de la demanda.

El segundo es Paul Volcker. Entre 1979 y 1981 llevó la tasa de fondos federales de un promedio de 11.2% a un pico de 20%. Funcionó: la inflación estadounidense bajó de 14.8% a menos de 4% en 1983. Pero las tasas de corto plazo en dólares, sobre las que estaba estructurada buena parte de la deuda externa latinoamericana, pasaron de 9.5% en agosto de 1979 a más de 16% en mayo de 1981. En agosto de 1982, México suspendió pagos. No lo hizo por una decisión mexicana ni por un desequilibrio doméstico repentino: lo hizo porque el costo de su deuda se duplicó por una decisión tomada en Washington. La suspensión detonó el colapso crediticio regional y la década perdida.

Burns ilustra el costo de sobrerreaccionar a un shock de oferta. Volcker ilustra el costo de hacer lo correcto para Estados Unidos sin considerar el exterior. La Fed de 2026 está exactamente entre esos dos precedentes, y la lección conjunta no es que exista una salida elegante. Es que hay dos maneras conocidas de equivocarse, y que ambas dejaron cicatrices que tardaron años en cerrar.

[IMAGE:/essay-fed-historia.jpg:Una fila de autos ante una gasolinera durante el embargo petrolero de 1973. Burns apretó contra un shock de oferta; Volcker apretó sin mirar al exterior. Las dos maneras conocidas de equivocarse.]

## La reunión de julio ofreció algo que un ensayo rara vez consigue: la comprobación de su propio argumento en el mismo momento en que se escribía.

La reacción de los mercados el día de la decisión hay que leerla no como crónica, sino como medición. Con la tasa de referencia inmóvil, el Dow Jones perdió 2.19% (1,153 puntos), el S&P 500 cedió 1.52%, el Nasdaq 1.74%, y el índice de volatilidad **VIX** saltó 13.45% hasta 20.66. El bono del Tesoro a diez años subió a 4.62% y el de treinta años cerró en 5.14%, su nivel más alto desde 2006, antes de la crisis financiera de 2008. El Brent, mientras tanto, avanzó 7.80% hasta 90.65 dólares por barril.

Lo relevante de esas cifras no es su magnitud, sino su origen. Ninguna responde a una acción de la Reserva Federal, porque no ejecutó ninguna. En el transcurso de una sola semana, los mercados pasaron de descontar una desescalada en el Golfo Pérsico (con una caída del Brent de más de 11% en una sesión cuando avanzaron las negociaciones sobre el tránsito de buques) a descontar su ruptura. El precio oficial del dinero fue idéntico en ambos extremos de ese recorrido. Las condiciones financieras efectivas de la economía más grande del mundo se aflojaron y se apretaron con violencia sin que el instrumento del banco central más importante se moviera un solo punto base.

Ese es el fenómeno que este ensayo describe, y no requiere pronosticar nada. Basta observar que lo que movió los mercados no se decidió en Washington.

La conclusión no es que los bancos centrales se hayan vuelto irrelevantes. Siguen fijando el precio del dinero y siguen custodiando algo que ningún otro actor puede custodiar: la creencia colectiva de que la inflación volverá a su meta. Si un sindicato deja de creerlo, negocia aumentos de 6% anticipando el alza; si una empresa deja de creerlo, sube precios antes de que suban sus costos. La expectativa termina produciendo el resultado que anticipaba: una profecía autocumplida. Por eso el marco de referencia del Comité advierte que actuará "contundentemente" para mantener ancladas las expectativas de largo plazo, y por eso el verdadero disparador de un alza de tasas no será el nivel que alcance la inflación, sino el día en que la gente deje de creer que va a bajar.

Lo incómodo aparece al juntar las dos piezas teóricas. Tinbergen dice que un instrumento no puede servir a dos objetivos que un shock separa: la Fed ya no puede cumplir su mandato dual. Rey dice que el resto del mundo solo puede someterse al ciclo que fija el centro: nadie más puede decidir por sí mismo. Sumadas, aparece una jerarquía de dependencias. México depende de la Fed. La Fed depende del petróleo. Y el petróleo depende de si una negociación en el Golfo Pérsico aguanta hasta que abra la bolsa un lunes por la mañana.

El centro ya no es el centro. La Reserva Federal sigue fijando las condiciones financieras del planeta, pero alguien más está fijando las de la Reserva Federal, y ese alguien no es un banco, ni un mercado, ni un solo gobierno. Es un estrecho de treinta y tres kilómetros y una tregua sin firmar. La cadena que termina en la tasa de interés de un crédito hipotecario de una familia en Veracruz, México, empieza en si un buque petrolero puede cruzar o no un estrecho.

[IMAGE:/essay-fed-conclusion.jpg:La cadena completa: de un estrecho de treinta y tres kilómetros a la tasa de un crédito hipotecario. Durante cuarenta años dimos por sentado que la economía global tenía un piloto.]

Warsh tiene razón cuando dice que el banco central no necesita ser siempre el centro de atención, y probablemente sea sano que no lo sea. Lo que su frase no aclara es si dejó de serlo por decisión propia. Durante cuarenta años dimos por sentado que la economía global tenía un piloto. Es posible que siempre haya tenido dos, y que solo uno de ellos publique actas.

## Referencias

• Banco de México. (2026, 25 de junio). Anuncio de política monetaria.
• Blinder, A. S. (1979). Economic policy and the great stagflation. Academic Press.
• Bureau of Labor Statistics. (2026, 14 de julio). Consumer Price Index — June 2026 (USDL-26-1191). https://www.bls.gov/news.release/cpi.nr0.htm
• Federal Reserve Board. (2026, 22 de mayo). Kevin Warsh takes oath of office as chairman. https://www.federalreserve.gov/newsevents/pressreleases/other20260522a.htm
• Federal Reserve Board. (2026, 17 de junio). FOMC statement. https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm
• Federal Reserve Board. (2026, 17 de junio). Summary of economic projections. https://www.federalreserve.gov/monetarypolicy/files/fomcprojtabl20260617.pdf
• Federal Reserve Board. (2026, 10 de julio). Monetary policy report. https://www.federalreserve.gov/monetarypolicy/files/20260710_mprfullreport.pdf
• Federal Reserve Board. (2026, 29 de julio). FOMC statement. https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm
• Federal Reserve Board. (2026, 29 de julio). Transcript of Chairman Warsh's press conference opening statement. https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260729.pdf
• Federal Reserve History. (s.f.). Oil shock of 1973-74. https://www.federalreservehistory.org/essays/oil-shock-of-1973-74
• Fondo Monetario Internacional. (2001). Silent revolution: The International Monetary Fund 1979–1989, cap. 8. https://www.imf.org/external/pubs/ft/history/2001/ch08.pdf
• Fondo Monetario Internacional. (2026, abril). Global financial stability report, cap. 1. https://www.imf.org/-/media/files/publications/gfsr/2026/april/english/ch1.pdf
• Rey, H. (2013). Dilemma not trilemma: The global financial cycle and monetary policy independence. Jackson Hole Economic Policy Symposium, Federal Reserve Bank of Kansas City.
• Tinbergen, J. (1952). On the theory of economic policy. North-Holland.`,
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
    slug: "limites-fed-proyecto",
    title: "Los límites de la Fed",
    subtitle: "Finanzas · Julio 2026",
    description:
      "La Reserva Federal no movió su tasa y las condiciones financieras de Estados Unidos se dispararon igual. Un instrumento, dos objetivos que un shock de oferta separó, y un estrecho de treinta y tres kilómetros decidiendo por todos.",
    tags: ["Finanzas", "Política Monetaria", "Geopolítica"],
    year: "2026",
    institution: "Problematica Internacional · IBERO",
    highlight: "15 min de lectura · Julio 2026",
    size: "small",
    link: "/blog/limites-fed-2026",
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
