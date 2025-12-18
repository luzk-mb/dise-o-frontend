// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formCita");

  // Verifica que el formulario exista
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Validación básica
    if (!nombre || !correo || !telefono || !servicio || !fecha || !hora) {
      alert("⚠️ Por favor complete todos los campos.");
      return;
    }

    // Mensaje de confirmación
    alert(
      "✅ Cita agendada con éxito\n\n" +
      "Paciente: " + nombre + "\n" +
      "Correo: " + correo + "\n" +
      "Teléfono: " + telefono + "\n" +
      "Servicio: " + servicio + "\n" +
      "Fecha: " + fecha + "\n" +
      "Hora: " + hora
    );

    // Limpia el formulario
    form.reset();
  });
});

