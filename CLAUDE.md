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
   - Ser específico: estilo editorial, fotorrealista o ilustración según el tono
   - Incluir siempre al final: `"original image, no copyrighted elements, no logos, no recognizable brands or people, royalty-free style"`
4. El usuario genera la imagen en ChatGPT y la guarda en `public/`
5. Insertar la referencia `[IMAGE:...]` al inicio de cada sección en el `body`

### Ejemplo de prompt

> *"Aerial view of the Atacama Desert salt flats in Chile, vast white lithium brine extraction pools stretching to the horizon, minimal industrial equipment, editorial photography style, golden hour light. Original image, no copyrighted elements, no logos, no recognizable brands or people, royalty-free style."*

## Tono visual

Minimalista, serio, académico. No añadir elementos decorativos innecesarios. La legibilidad del texto es la prioridad. Las animaciones deben ser sutiles — nunca distractoras.
