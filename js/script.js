document.addEventListener("DOMContentLoaded", () => {

  /* ============================= */
  /* AGENDAR CITA */
  /* ============================= */
  const form = document.getElementById("formCita");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const cita = {
        nombre: document.getElementById("nombre").value.trim(),
        correo: document.getElementById("correo").value.trim(),
        telefono: document.getElementById("telefono").value.trim(),
        servicio: document.getElementById("servicio").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value
      };

      if (Object.values(cita).includes("")) {
        alert("⚠️ Complete todos los campos");
        return;
      }

      const citas = JSON.parse(localStorage.getItem("citas")) || [];
      citas.push(cita);
      localStorage.setItem("citas", JSON.stringify(citas));

      alert("✅ Cita agendada correctamente");
      form.reset();
    });
  }

  /* ============================= */
  /* MOSTRAR CITAS */
  /* ============================= */
  const lista = document.getElementById("listaCitas");

  if (lista) {
    const citas = JSON.parse(localStorage.getItem("citas")) || [];

    if (citas.length === 0) {
      lista.innerHTML = "<p>No hay citas registradas.</p>";
      return;
    }

    citas.forEach((cita, index) => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <h3>${cita.servicio}</h3>
        <p><strong>Paciente:</strong> ${cita.nombre}</p>
        <p><strong>Fecha:</strong> ${cita.fecha}</p>
        <p><strong>Hora:</strong> ${cita.hora}</p>
        <button class="btn-outline" onclick="eliminarCita(${index})">Eliminar</button>
      `;

      lista.appendChild(div);
    });
  }
});

/* ============================= */
/* ELIMINAR CITA */
function eliminarCita(index) {
  const citas = JSON.parse(localStorage.getItem("citas")) || [];
  citas.splice(index, 1);
  localStorage.setItem("citas", JSON.stringify(citas));
  location.reload();
}

