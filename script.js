const ramos = document.querySelectorAll(".ramo");

function actualizarBloqueos() {
  document.querySelectorAll(".bloqueado").forEach(ramo => {
    const prereqs = ramo.dataset.prerqs?.split(",");
    if (!prereqs) return;

    const habilitado = prereqs.every(id =>
      document.getElementById(id)?.classList.contains("aprobado")
    );

    if (habilitado) {
      ramo.classList.remove("bloqueado");
    }
  });
}

ramos.forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    ramo.classList.toggle("aprobado");
    actualizarBloqueos();
  });
});
