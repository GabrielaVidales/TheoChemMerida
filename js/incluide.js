fetch('../navbars/navbar.html')
  .then(r => r.text())
  .then(html => {
    const mount = document.getElementById("navbar-container");
    if (!mount) return;

    mount.innerHTML = html;

    if (typeof initNavbar === "function") {
      initNavbar();
    }
  })
  .catch(err => console.error("No se pudo cargar el navbar:", err));