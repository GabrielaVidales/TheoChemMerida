document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ScrollTop button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) scrollBtn.classList.add("show");
      else scrollBtn.classList.remove("show");
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =========================
  // Helpers: show/hide sections
  // =========================
  const heroSection = document.querySelector('.hero');          // #home
  const aboutSection = document.getElementById('content');      // About
  const researchSection = document.querySelector('.research-areas');

  const peopleSection = document.getElementById('people');
  const publicationsSection = document.getElementById('publications');
  const productsSection = document.getElementById('products');
  const eventsSection = document.getElementById('events');
  const contactSection = document.getElementById('contact');

  const allMainSections = [
    heroSection,
    aboutSection,
    researchSection,
    peopleSection,
    publicationsSection,
    productsSection,
    eventsSection,
    contactSection
  ].filter(Boolean);

  const showOnly = (idsToShow) => {
    const showSet = new Set(idsToShow);

    allMainSections.forEach(sec => {
      const id = sec.id || sec.getAttribute('id') || sec.className;
      if (showSet.has(id)) {
        sec.style.removeProperty('display');
      } else {
        sec.style.display = 'none';
      }
    });
  };

  // Navbar offset scroll
  const getNavOffset = () => {
    const nav = document.getElementById('navbar');
    return (nav ? nav.offsetHeight : 80) + 14;
  };

  const smoothScrollToEl = (el) => {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Decide what to show per route
  const routeToSections = (hash) => {
    switch (hash) {
      case '#home':
      case '':
      case null:
        // Home = hero + about + research areas
        showOnly(['home', 'content', 'research-areas']);
        return heroSection;

      case '#people':
        showOnly(['people']);
        return peopleSection;

      case '#publications':
        showOnly(['publications']);
        return publicationsSection;

      case '#products':
        showOnly(['products']);
        return productsSection;

      case '#events':
        showOnly(['events']);
        return eventsSection;

      case '#contact':
        showOnly(['contact']);
        return contactSection;

      default:
        // Si llega un hash raro, vuelve a Home
        showOnly(['home', 'content', 'research-areas']);
        return heroSection;
    }
  };

  // Intercept internal anchor clicks (menu)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();

      const targetEl = routeToSections(href);
      history.replaceState(null, '', href);
      smoothScrollToEl(targetEl);
    });
  });

  // On load: respect URL hash
  const initialTarget = routeToSections(window.location.hash);
  // Si entras directo con hash, que haga scroll suave al cargar
  if (window.location.hash && initialTarget) {
    setTimeout(() => smoothScrollToEl(initialTarget), 50);
  }

  // =========================
  // Carrusel (igual que lo tenías)
  // =========================
  const slides = Array.from(document.querySelectorAll('.carousel .slide'));
  const prevBtn = document.querySelector('.carousel .carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel .carousel-arrow.next');
  const pagination = document.querySelector('.carousel .carousel-pagination');

  if (!slides.length) return;

  let currentIndex = slides.findIndex(s => s.classList.contains('active'));
  if (currentIndex < 0) currentIndex = 0;

  const pageButtons = [];
  if (pagination) {
    pagination.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = String(i + 1);
      b.setAttribute('aria-label', `Go to slide ${i + 1}`);
      b.addEventListener('click', () => goTo(i, true));
      pagination.appendChild(b);
      pageButtons.push(b);
    });
  }

  const setActive = (index) => {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    pageButtons.forEach((b, i) => b.classList.toggle('is-active', i === index));
  };

  const clampIndex = (i) => (i + slides.length) % slides.length;

  let timer = null;
  const intervalMs = 4500;

  const startAuto = () => {
    stopAuto();
    timer = window.setInterval(() => goTo(currentIndex + 1, false), intervalMs);
  };

  const stopAuto = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  const goTo = (index, restart) => {
    currentIndex = clampIndex(index);
    setActive(currentIndex);
    if (restart) startAuto();
  };

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