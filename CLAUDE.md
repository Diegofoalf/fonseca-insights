@AGENTS.md

# Fonseca Insights

Blog profesional de análisis internacional. Ensayos sobre geopolítica, economía y finanzas escritos por Diego Fonseca Alfonso, estudiante de Negocios Internacionales en la Universidad Iberoamericana Puebla.

## Stack

- **Framework**: Next.js 16 + React 19 + TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Motion v12 (`motion/react`) — ya instalado y en uso
- **Iconos**: `@phosphor-icons/react`
- **Deploy**: Vercel

## Estructura del proyecto

```
app/
  page.tsx          — Home (hero, ensayo destacado, about, posts recientes, proyectos)
  blog/
    page.tsx        — Lista de todos los ensayos
    [slug]/
      page.tsx      — Página individual de cada ensayo
  proyectos/
    page.tsx        — Lista de proyectos
components/
  Nav.tsx           — Navbar fijo, acepta prop `dark` para versión oscura
  Footer.tsx        — Footer global
  Container.tsx     — Wrapper de ancho máximo con padding horizontal
  AnimateIn.tsx     — Componente de entrada animada al hacer scroll
lib/
  content.ts        — Fuente de verdad: posts y proyectos hardcodeados aquí
public/             — Imágenes estáticas de los ensayos
```

## Paleta de colores

| Uso | Hex |
|---|---|
| Fondo oscuro principal | `#141210` |
| Fondo oscuro secundario | `#1A1814` |
| Fondo claro | `#F5F2EC` |
| Acento (marrón) | `#8B4513` |
| Acento hover | `#C4845A` |
| Texto principal claro | `#ffffff` |
| Texto secundario claro | `#a8a09a` |
| Texto principal oscuro | `#1A1814` |
| Texto secundario oscuro | `#6B645C` |
| Bordes | `#E2DDD5` |
| Divisores oscuros | `#2A2520` |

No agregar colores nuevos sin justificación. La paleta es intencional y coherente.

## Tipografías

- **`var(--font-playfair)`** — Playfair Display. Títulos, headings, nombre del autor
- **`var(--font-dm-mono)`** — DM Mono. Etiquetas, categorías, metadatos, fechas

## Convenciones de código

- Preferir Tailwind CSS sobre estilos inline cuando sea posible
- Las animaciones usan Motion v12 (`motion/react`), no framer-motion
- El easing estándar del proyecto es `[0.22, 0.61, 0.36, 1]`
- `AnimateIn` para animaciones de scroll, `motion.*` para animaciones de entrada en hero
- Todos los posts y proyectos viven en `lib/content.ts` — no hay archivos MDX
- Las imágenes de ensayos se referencian desde `/public/` con la sintaxis `[IMAGE:/archivo.jpg:descripción]` dentro del campo `body` del post

## Comandos

```bash
npm run dev      # servidor local en localhost:3000
npm run build    # build de producción
npm run lint     # linter
```

## Cómo agregar un ensayo nuevo

1. Abrir `lib/content.ts` y agregar un nuevo objeto al array `posts`:

```ts
{
  slug: "nombre-url-del-ensayo",       // URL: /blog/nombre-url-del-ensayo
  title: "Título completo del ensayo",
  excerpt: "Resumen de 2-3 oraciones que aparece en las tarjetas y en el header",
  date: "Mes Año",                     // Ej: "Junio 2026"
  readTime: "10 min",
  category: "Geopolítica",            // Ej: Geopolítica, Finanzas, Medio Oriente
  featured: true,                     // Solo un post puede ser featured a la vez
  coverImage: "/nombre-cover.jpg",    // Imagen de portada opcional (aparece bajo el header)
  body: `...`,                        // Contenido del ensayo (ver sintaxis abajo)
}
```

2. Escribir el `body` usando esta sintaxis:

```
## Título de sección

Párrafo de texto. El primer párrafo del ensayo recibe drop-cap automáticamente.
Las palabras en **negrita** en el documento original deben escribirse con **doble asterisco**.

[IMAGE:/nombre-imagen.jpg:Descripción de la imagen para accesibilidad]

## Siguiente sección

• Elemento de lista con **palabra en negrita** si aplica
• Otro elemento
```

Las negritas del documento original siempre deben preservarse usando `**texto**`. El sitio las renderiza como `<strong>` automáticamente.

3. Generar las imágenes (ver sección Imágenes en ensayos)

4. Guardar las imágenes en `public/` con nombres descriptivos: `essay-[tema]-[seccion].jpg`

5. Si el ensayo es `featured: true`, quitar ese campo del ensayo anterior que lo tenía

6. Si el ensayo está en proceso, dejar `body: ""` — el sitio muestra "Este ensayo está en proceso" automáticamente

## Imágenes en ensayos

Cada ensayo debe tener exactamente **una imagen por sección** — incluyendo introducción y conclusión. Las imágenes se insertan en el campo `body` del post en `lib/content.ts` con esta sintaxis:

```
[IMAGE:/nombre-archivo.jpg:descripción alt]
```

### Cómo agregar imágenes a un ensayo

1. Identificar cada sección del ensayo (introducción, cada subtítulo `##`, conclusión)
2. Para cada sección, generar un prompt para que el usuario lo use en ChatGPT Image Generation
3. El prompt debe:
   - Describir visualmente lo más importante de esa sección
   - Ser geográfica y visualmente preciso al sujeto real: si se habla de Riad, referenciar landmarks reales (Kingdom Centre Tower, KAFD, Rey Khalid Airport); si se habla del desierto de Tabuk, describir su terreno rocoso y basáltico específico; si se habla de Saudi Aramco, referenciar instalaciones reales como Ras Tanura; si se habla del Rub' al Khali, describir sus dunas características. Aplicar este nivel de precisión a todos los ensayos futuros
   - Ser específico: estilo editorial, fotorrealista o ilustración según el tono
   - Incluir siempre al final: `"Imagen original, sin logos visibles, sin personas identificables, estilo libre de regalías"`
   - Incluir siempre las dimensiones exactas al final del prompt
4. El usuario genera la imagen en ChatGPT y la guarda en `public/`
5. Insertar la referencia `[IMAGE:...]` al inicio de cada sección en el `body`

### Ejemplo de prompt

> *"Aerial view of the Atacama Desert salt flats in Chile, vast white lithium brine extraction pools stretching to the horizon, minimal industrial equipment, editorial photography style, golden hour light. Original image, no copyrighted elements, no logos, no recognizable brands or people, royalty-free style."*

## Hilo de X al publicar un ensayo

Al terminar de editar y subir un ensayo nuevo al blog, redactar un hilo de X listo para que Diego lo copie y pegue. El hilo debe:

- **Tweet 1**: gancho directo con la tesis central del ensayo — sin contexto innecesario, entra fuerte
- **Tweets 2-4**: los 2-3 argumentos o datos más impactantes del ensayo, uno por tweet
- **Tweet 5**: la conclusión o el dato que más sorprende — el cierre que genera reacción
- **Tweet final**: link al ensayo en fonseca-insights.vercel.app con una línea de invitación a leerlo completo

Reglas del hilo:
- Tono directo, sin academicismos — es X, no un abstract
- Máximo 280 caracteres por tweet
- Sin hashtags innecesarios — máximo 2 si aplican
- Cada tweet debe poder leerse solo y generar curiosidad por el siguiente
- Numerar los tweets: 1/, 2/, 3/...

## Tono visual

Minimalista, serio, académico. No añadir elementos decorativos innecesarios. La legibilidad del texto es la prioridad. Las animaciones deben ser sutiles — nunca distractoras.
