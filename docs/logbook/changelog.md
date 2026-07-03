# Changelog

Registro permanente de todo el trabajo terminado. Indexado por código de tarea
(`TD-`, `RM-`, `WL-`). Orden inverso: lo más nuevo arriba.

**Formato de cada entrada:**

```
## [CÓDIGO] Título (YYYY-MM-DD HH:MM)
Resumen en ≤2 líneas de lo que se hizo.
```

---

## [RM-005] Menú responsivo controlado por JavaScript (2026-07-03 13:27)
Hamburguesa migrada de checkbox+label (CSS puro) a `<button>` + `js/menu.js`: `classList.toggle("open")`, ícono ☰/✕, `aria-expanded`, y cierre al elegir opción. Corregido un `transition: max-height` mal formado en `responsive.css`.

## [RM-003] Sorteo automático de series + ventana flotante (2026-07-03 13:16)
`js/sorteo.js`: lee equipos del DOM, pide nº de series con `prompt`, confirma con `confirm`, mezcla (Fisher-Yates) y reparte round-robin; valida bordes con `alert`. Resultado en modal (`css/modal.css`) que cierra con botón, click-fuera o Escape.

## [RM-006] Separar script.js por funcionalidad (2026-07-03 13:08)
`script.js` monolítico → `js/slider.js`, `js/himno.js`, `js/formulario.js`, `js/tabla.js` (espeja la estructura de `css/`). Cuatro `<script>` planos en `index.html`, sin bundler ni módulos.

## [RM-002] Tabla de posiciones dinámica (2026-07-03 13:02)
Los equipos pasan a un arreglo JS; `render()` ordena con `sort()` por puntos (`g*3+e`) y pinta el DOM. Controles para registrar resultado (Ganó/Empató/Perdió) y agregar equipo, con re-render y renumeración automática.

## [RM-001] Validación del formulario con JavaScript (2026-07-03 12:54)
Validación por DOM en `script.js`: bloquea el envío, muestra mensaje inline por campo inválido (nombre, código UTP, correo @utp.edu.pe, contraseña, categoría, disciplina, términos) y banner de éxito. `novalidate` en el form y estilos `.error-msg`/`.form-success` en CSS.
