# Roadmap

Trabajo comprometido: lo que sí se va a hacer. Código `RM-###` (nunca se reutiliza).
Al terminar una tarea se mueve al changelog y se borra de aquí.

**Formato de cada entrada:**
- **Objetivo:** qué se quiere lograr.
- **Hecho cuando:** criterio claro de finalización.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [RM-007] Rediseño de UI "Torneo" (deportivo-broadcast)
- **Objetivo:** Reemplazar el look genérico (Inter en todo, cards sobre gris, rojo en todo, columna simétrica) por el lenguaje de una transmisión deportiva. Tokens: tinta `#16130F` + papel `#FBFAF7` + rojo UTP `#D50032` + oro `#E8B04B` (con plata/bronce para top-3); tipos Archivo (display) / Hanken Grotesk (body) / IBM Plex Mono (datos). Firma: marcador oscuro full-bleed con top-3 medallado. Mantiene una sola página.
- **Hecho cuando:** `base.css` (tokens + fuentes) y el CSS por sección aplican la dirección; el hero, las bandas alternadas y el marcador oscuro están montados; responsive y focus visibles; verificado en el navegador.
- **Fecha:** 2026-07-03 · **Estado:** Abierto (pendiente de confirmar dirección)

## [RM-004] Actualizar Word y PPT con lo implementado
- **Objetivo:** Reflejar en `docs/OlimpiaPeru_Avance*.docx` y `docs/OlimpiaPeru_Presentacion.pptx` las nuevas funciones JS (validación, tabla dinámica, sorteo) con capturas actuales, para que la documentación coincida con el producto entregado. Los docentes califican la coherencia doc↔producto.
- **Hecho cuando:** Word y PPT mencionan/muestran las features JS con capturas actualizadas y sin referencias desfasadas.
- **Fecha:** 2026-07-03 · **Estado:** Abierto
