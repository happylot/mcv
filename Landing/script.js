const pathname = window.location.pathname.split("/").pop() || "index.html";
const LOCALIZED_PAGES = new Set([
  "index.html",
  "about.html",
  "services.html",
  "partners.html",
  "contact.html"
]);
const LANG_STORAGE_KEY = "mcv-lang";

const isEnglishPage = pathname.endsWith("-en.html");
const canonicalPath = isEnglishPage ? pathname.replace(/-en\.html$/, ".html") : pathname;
const currentLang = isEnglishPage ? "en" : "vi";
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const navActions = document.querySelector(".nav-actions");
const submenuToggles = document.querySelectorAll("[data-submenu-toggle]");
const demoForms = document.querySelectorAll("[data-demo-form]");
const revealItems = document.querySelectorAll(".reveal");
const counterItems = document.querySelectorAll("[data-counter]");

const localizeHref = (href, lang) => {
  if (!href || href.startsWith("#") || /^(mailto:|tel:|https?:|\/\/)/.test(href)) {
    return href;
  }

  const [pathPart, hashPart = ""] = href.split("#");
  const [filePart, queryPart = ""] = pathPart.split("?");

  if (!LOCALIZED_PAGES.has(filePart)) {
    return href;
  }

  const localizedFile = lang === "en"
    ? filePart.replace(/\.html$/, "-en.html")
    : filePart.replace(/-en\.html$/, ".html");

  const query = queryPart ? `?${queryPart}` : "";
  const hash = hashPart ? `#${hashPart}` : "";

  return `${localizedFile}${query}${hash}`;
};

const renderLanguageSwitcher = () => {
  if (!navActions || !LOCALIZED_PAGES.has(canonicalPath)) {
    const existing = navActions?.querySelector(".lang-switch");
    if (existing) {
      existing.style.display = "none";
    }
    return null;
  }

  let switcher = navActions.querySelector(".lang-switch");

  if (!switcher) {
    switcher = document.createElement("div");
    switcher.className = "lang-switch";
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Language switcher");
    switcher.innerHTML = [
      '<button class="lang-btn" type="button" data-lang="en" aria-pressed="false">EN</button>',
      "<span>/</span>",
      '<button class="lang-btn" type="button" data-lang="vi" aria-pressed="false">VI</button>'
    ].join("");

    const menuToggle = navActions.querySelector(".menu-toggle");
    navActions.insertBefore(switcher, menuToggle || null);
  }

  return switcher;
};

const switcher = renderLanguageSwitcher();
const langButtons = switcher ? switcher.querySelectorAll(".lang-btn") : [];

const updateLanguageButtons = () => {
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const preferredLang = window.localStorage.getItem(LANG_STORAGE_KEY);
if (preferredLang && preferredLang !== currentLang && LOCALIZED_PAGES.has(canonicalPath)) {
  const target = localizeHref(canonicalPath, preferredLang);
  if (target && target !== pathname) {
    window.location.replace(target);
  }
}

document.documentElement.lang = currentLang;
updateLanguageButtons();

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLang = button.dataset.lang || "vi";
    window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);

    const nextHref = localizeHref(canonicalPath, nextLang);
    if (nextHref && nextHref !== pathname) {
      window.location.href = nextHref;
    }
  });
});

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  const localized = localizeHref(href, currentLang);

  if (localized && localized !== href) {
    link.setAttribute("href", localized);
  }
});

if (nav) {
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const normalizedHref = href ? href.replace(/-en\.html$/, ".html") : href;
    if (normalizedHref === canonicalPath) {
      link.classList.add("active");
    }
  });

  nav.querySelectorAll(".nav-item[data-match]").forEach((item) => {
    if (item.dataset.match === canonicalPath || (canonicalPath === "walmart-vietnam.html" && item.dataset.match === "services.html")) {
      item.classList.add("is-active");
    }
  });
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".nav-item");
    if (!parent) {
      return;
    }

    const willOpen = !parent.classList.contains("is-open");

    nav?.querySelectorAll(".nav-item.is-open").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("is-open");
        item.querySelector("[data-submenu-toggle]")?.setAttribute("aria-expanded", "false");
      }
    });

    parent.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!nav || nav.contains(event.target)) {
    return;
  }

  nav.querySelectorAll(".nav-item.is-open").forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector("[data-submenu-toggle]")?.setAttribute("aria-expanded", "false");
  });
});

demoForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = form.querySelector(".form-success");
    if (success) {
      success.classList.add("is-visible");
    }
    form.reset();
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const animateCounter = (item) => {
  const target = Number(item.dataset.target || 0);
  const suffix = item.dataset.suffix || "";
  const duration = 1100;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(target * (1 - (1 - progress) * (1 - progress)));
    item.textContent = `${value}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("is-visible");

    if (entry.target.hasAttribute("data-counter")) {
      animateCounter(entry.target);
    }

    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.16
});

revealItems.forEach((item) => revealObserver.observe(item));
counterItems.forEach((item) => revealObserver.observe(item));
