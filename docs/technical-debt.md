# Deuda Técnica

Registro de atajos, decisiones pendientes y riesgos a futuro de este proyecto.

**Formato de cada entrada:**
- **Ubicación:** `archivo:línea` afectado.
- **Riesgo:** del 1 al 10 (1-3 cosmético · 4-6 ralentiza/moderado · 7-9 bug latente o seguridad · 10 crítico).
- **Problema:** qué está mal, sintetizado.
- **Impacto futuro:** qué puede causar si no se atiende.
- **Fecha** y **Estado** (Abierto / Resuelto).

---

## [TD-001] Dependencias externas (CDN) sin respaldo local
- **Ubicación:** `index.html` (Font Awesome, YouTube iframe, audio SoundHelix, imágenes picsum.photos) y `style.css` (@import Google Fonts, imagen de fondo del hero).
- **Riesgo:** 5/10
- **Problema:** Íconos, tipografía, imágenes, video y audio se cargan desde servicios externos; sin conexión a internet el sitio se ve degradado (sin íconos, sin fuente Inter, sin imágenes ni multimedia).
- **Impacto futuro:** Durante la exposición, si la sala no tiene internet estable, varios elementos requeridos no se mostrarán. Conviene descargar copias locales (fuentes, íconos, imágenes y un audio/video propios) en una carpeta `assets/` antes de presentar.
- **Fecha:** 2026-05-30 · **Estado:** Abierto
