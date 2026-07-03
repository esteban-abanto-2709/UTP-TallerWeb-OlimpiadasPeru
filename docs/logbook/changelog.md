# Changelog

Registro permanente de todo el trabajo terminado. Indexado por código de tarea
(`TD-`, `RM-`, `WL-`). Orden inverso: lo más nuevo arriba.

**Formato de cada entrada:**

```
## [CÓDIGO] Título (YYYY-MM-DD HH:MM)
Resumen en ≤2 líneas de lo que se hizo.
```

---

## [RM-002] Tabla de posiciones dinámica (2026-07-03 13:02)
Los equipos pasan a un arreglo JS; `render()` ordena con `sort()` por puntos (`g*3+e`) y pinta el DOM. Controles para registrar resultado (Ganó/Empató/Perdió) y agregar equipo, con re-render y renumeración automática.

## [RM-001] Validación del formulario con JavaScript (2026-07-03 12:54)
Validación por DOM en `script.js`: bloquea el envío, muestra mensaje inline por campo inválido (nombre, código UTP, correo @utp.edu.pe, contraseña, categoría, disciplina, términos) y banner de éxito. `novalidate` en el form y estilos `.error-msg`/`.form-success` en CSS.
