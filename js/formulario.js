/* formulario.js · Validación del formulario de inscripción con JS (manipulación del DOM) */
(function () {
  const form = document.getElementById("form-inscripcion");
  if (!form) return;

  const codigoUTP = /^[Uu]\d{8}$/;              // U + 8 dígitos
  const correoUTP = /^[^\s@]+@utp\.edu\.pe$/i;  // termina en @utp.edu.pe

  // Recorre los campos y devuelve la lista de errores encontrados
  function validar() {
    const errores = [];

    const nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
      errores.push({ campo: nombre, msg: "Ingresa tus nombres completos." });
    }

    const codigo = document.getElementById("codigo");
    if (!codigoUTP.test(codigo.value.trim())) {
      errores.push({ campo: codigo, msg: "Código inválido. Formato: U + 8 dígitos (ej. U20234567)." });
    }

    const correo = document.getElementById("correo");
    if (!correoUTP.test(correo.value.trim())) {
      errores.push({ campo: correo, msg: "Usa tu correo institucional @utp.edu.pe." });
    }

    const clave = document.getElementById("clave");
    if (clave.value.length < 6) {
      errores.push({ campo: clave, msg: "La contraseña debe tener al menos 6 caracteres." });
    }

    if (!form.querySelector('input[name="categoria"]:checked')) {
      const grupo = form.querySelector('input[name="categoria"]').closest(".form-group");
      errores.push({ grupo: grupo, msg: "Selecciona una categoría." });
    }

    const deporte = document.getElementById("deporte");
    if (deporte.value === "") {
      errores.push({ campo: deporte, msg: "Elige una disciplina." });
    }

    const terminos = form.querySelector('input[name="terminos"]');
    if (!terminos.checked) {
      errores.push({ grupo: terminos.closest(".form-group"), msg: "Debes aceptar los términos y condiciones." });
    }

    return errores;
  }

  // Borra marcas y mensajes de un intento anterior
  function limpiar() {
    form.querySelectorAll(".error-msg").forEach(function (e) { e.remove(); });
    form.querySelectorAll(".invalid").forEach(function (e) { e.classList.remove("invalid"); });
    const exito = form.querySelector(".form-success");
    if (exito) exito.remove();
  }

  // Pinta un error debajo de su campo/grupo
  function pintarError(item) {
    const grupo = item.grupo || item.campo.closest(".form-group");
    if (item.campo) item.campo.classList.add("invalid");
    const span = document.createElement("span");
    span.className = "error-msg";
    span.textContent = item.msg;
    grupo.appendChild(span);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiar();

    const errores = validar();
    if (errores.length > 0) {
      errores.forEach(pintarError);
      if (errores[0].campo) errores[0].campo.focus();
      return;
    }

    const exito = document.createElement("p");
    exito.className = "form-success";
    exito.textContent = "¡Inscripción enviada con éxito! Te contactaremos por tu correo institucional.";
    form.appendChild(exito);
    form.reset();
  });

  // Al corregir un campo marcado, quita su error en el momento
  form.addEventListener("input", function (e) {
    if (e.target.classList.contains("invalid")) {
      e.target.classList.remove("invalid");
      const span = e.target.closest(".form-group").querySelector(".error-msg");
      if (span) span.remove();
    }
  });
})();
