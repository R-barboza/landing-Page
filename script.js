// RMB Solutions landing page interactions
const yearEl = document.getElementById("ano");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

// Contact form -> mailto (no backend needed)
const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const empresa = (data.get("empresa") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const mensagem = (data.get("mensagem") || "").toString().trim();

    const subject = encodeURIComponent(`Contato pelo site — ${nome}${empresa ? " (" + empresa + ")" : ""}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\n` +
      `Empresa: ${empresa || "-"}\n` +
      `E-mail: ${email}\n\n` +
      `Mensagem:\n${mensagem}\n\n` +
      `Enviado via landing page RMB Solutions.`
    );

    window.location.href = `mailto:contato@rmbsolutions.com.br?subject=${subject}&body=${body}`;
  });
}
