document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // Navbar scroll effect
  // =========================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScrollNavbar = () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScrollNavbar, { passive: true });
    onScrollNavbar();
  }

  // =========================
  // ScrollTop button
  // =========================
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    const onScrollTopBtn = () => {
      if (window.scrollY > 200) scrollBtn.classList.add('show');
      else scrollBtn.classList.remove('show');
    };

    window.addEventListener('scroll', onScrollTopBtn, { passive: true });
    onScrollTopBtn();

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================
  // Carrusel (solo en páginas que lo tengan)
  // =========================
  const slides = Array.from(document.querySelectorAll('.carousel .slide'));
  if (!slides.length) return; // Si no hay carrusel, ya terminamos (lo demás ya se ejecutó)

  const prevBtn = document.querySelector('.carousel .carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel .carousel-arrow.next');
  const pagination = document.querySelector('.carousel .carousel-pagination');

  let currentIndex = slides.findIndex(s => s.classList.contains('active'));
  if (currentIndex < 0) currentIndex = 0;

  const pageButtons = [];

  const setActive = (index) => {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    pageButtons.forEach((b, i) => b.classList.toggle('is-active', i === index));
  };

  const clampIndex = (i) => (i + slides.length) % slides.length;

  let timer = null;
  const intervalMs = 4500;

  const stopAuto = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  const startAuto = () => {
    stopAuto();
    timer = window.setInterval(() => goTo(currentIndex + 1, false), intervalMs);
  };

  const goTo = (index, restart) => {
    currentIndex = clampIndex(index);
    setActive(currentIndex);
    if (restart) startAuto();
  };

  // Paginación numérica
  /*if (pagination) {
    pagination.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = String("°");
      b.setAttribute('aria-label', `Go to slide ${i + 1}`);
      b.addEventListener('click', () => goTo(i, true));
      pagination.appendChild(b);
      pageButtons.push(b);
    });
  }*/

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1, true));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1, true));

  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    carousel.addEventListener('focusin', stopAuto);
    carousel.addEventListener('focusout', startAuto);
  }

  setActive(currentIndex);
  startAuto();
});

// =========================
// Footer include (static component)
// =========================
const footerMount = document.getElementById('site-footer');
if (footerMount) {
  fetch('../others/footer.html')
    .then(r => r.text())
    .then(html => { footerMount.innerHTML = html; })
    .catch(() => { /* silencioso */ });
}

// =========================
// People accordion: open/close con animación real
// =========================
const ACC_DURATION = 450; // <-- ajusta tiempo en ms (450 = 0.45s)
const ACC_EASING = 'ease';

document.querySelectorAll('.people-accordion').forEach((details) => {
  const summary = details.querySelector('summary');
  const body = details.querySelector('.people-accordion-body');
  if (!summary || !body) return;

  // Estado inicial
  if (details.open) {
    body.style.height = 'auto';
  } else {
    body.style.height = '0px';
  }

  let anim = null;

  const animateTo = (from, to, onFinish) => {
    if (anim) anim.cancel();

    body.style.height = `${from}px`;
    // Forzar reflow para que el browser registre el height inicial
    body.offsetHeight;

    anim = body.animate(
      [{ height: `${from}px` }, { height: `${to}px` }],
      { duration: ACC_DURATION, easing: ACC_EASING }
    );

    anim.onfinish = () => {
      anim = null;
      onFinish?.();
    };
    anim.oncancel = () => { anim = null; };
  };

  summary.addEventListener('click', (e) => {
    e.preventDefault(); // evitamos el toggle instantáneo del navegador

    const isOpen = details.open;

    if (!isOpen) {
      // ABRIR
      details.open = true;              // abre para que el contenido exista en layout
      body.style.height = '0px';

      const target = body.scrollHeight; // altura real del contenido
      animateTo(0, target, () => {
        body.style.height = 'auto';     // dejarlo en auto para que se adapte si cambia contenido
      });

    } else {
      // CERRAR
      const start = body.scrollHeight;  // altura actual
      animateTo(start, 0, () => {
        details.open = false;           // cerramos al final para que no desaparezca instantáneo
        body.style.height = '0px';
      });
    }
  });
});

document.querySelectorAll('.people-accordion').forEach((d) => {
  d.addEventListener('toggle', () => {
    if (!d.open) return;
    document.querySelectorAll('.people-accordion').forEach((other) => {
      if (other !== d) other.open = false;
    });
  });
});

// =========================
// Mobile navbar toggle
// =========================
function initNavbar() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#site-nav');

  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    navMenu.classList.remove('is-open');
    toggleBtn.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navMenu.classList.add('is-open');
    toggleBtn.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('is-open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (e) => {
    const clickedInside = navMenu.contains(e.target) || toggleBtn.contains(e.target);
    if (!clickedInside) closeMenu();
  });
}