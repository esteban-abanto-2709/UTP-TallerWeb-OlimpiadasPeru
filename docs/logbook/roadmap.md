# Roadmap

Trabajo comprometido: lo que sí se va a hacer. Código `RM-###` (nunca se reutiliza).
Al terminar una tarea se mueve al changelog y se borra de aquí.

**Formato de cada entrada:**
- **Objetivo:** qué se quiere lograr.
- **Hecho cuando:** criterio claro de finalización.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [RM-005] Menú responsivo controlado por JavaScript
- **Objetivo:** La semana 14 pide "menú responsivo con HTML, CSS **y JS**", pero el menú actual (`index.html:40-41`) es CSS puro (checkbox + label). Manejar la apertura/cierre del hamburguesa con JS (`classList.toggle` al hacer click, cerrar al elegir una opción). Cubre explícitamente el tema de S14.
- **Hecho cuando:** el menú abre/cierra por un evento JS (no solo por el checkbox), verificado en móvil/DevTools.
- **Fecha:** 2026-07-03 · **Estado:** Abierto

## [RM-004] Actualizar Word y PPT con lo implementado
- **Objetivo:** Reflejar en `docs/OlimpiaPeru_Avance*.docx` y `docs/OlimpiaPeru_Presentacion.pptx` las nuevas funciones JS (validación, tabla dinámica, sorteo) con capturas actuales, para que la documentación coincida con el producto entregado. Los docentes califican la coherencia doc↔producto.
- **Hecho cuando:** Word y PPT mencionan/muestran las features JS con capturas actualizadas y sin referencias desfasadas.
- **Fecha:** 2026-07-03 · **Estado:** Abierto
