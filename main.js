/* ============================================================
   Jury — interaction layer
   ============================================================ */

(() => {
  "use strict";

  const body = document.body;
  const html = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const raf = (fn) => window.requestAnimationFrame(fn);
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  /* ----------------------------------------------------------
     Smooth scrolling — Lenis
     ---------------------------------------------------------- */

  const lenis =
    window.Lenis && !reduceMotion.matches
      ? new window.Lenis({
          duration: 1.1,
          smoothWheel: true,
          wheelMultiplier: 0.9
        })
      : null;

  if (lenis) {
    const scrollLoop = (time) => {
      lenis.raf(time);
      raf(scrollLoop);
    };

    raf(scrollLoop);
  }

  /* ----------------------------------------------------------
     Reveals
     ---------------------------------------------------------- */

  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-in"));
  }

  /* ----------------------------------------------------------
     Header — condense, hide on scroll down, return on up
     ---------------------------------------------------------- */

  const header = document.querySelector("[data-header]");
  let lastScrollY = window.scrollY;
  let scrollTicking = false;

  function updateHeader() {
    const y = window.scrollY;

    if (!header) return;

    header.classList.toggle("is-scrolled", y > 12);

    if (!body.classList.contains("menu-open") && y > 220) {
      if (y > lastScrollY + 6) {
        header.classList.add("is-hidden");
      } else if (y < lastScrollY - 4) {
        header.classList.remove("is-hidden");
      }
    } else {
      header.classList.remove("is-hidden");
    }

    lastScrollY = y;
    scrollTicking = false;
  }

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    raf(updateHeader);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  updateHeader();

  /* ----------------------------------------------------------
     Parallax plates
     ---------------------------------------------------------- */

  const parallaxItems = Array.from(document.querySelectorAll("[data-parallax-media]"));

  let parallaxTicking = false;

  function updateParallax() {
    if (!reduceMotion.matches) {
      const viewport = window.innerHeight;

      parallaxItems.forEach((img) => {
        const container = img.parentElement;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewport + 200) return;

        const strength = Number(img.dataset.parallaxMedia) || 20;
        const progress = (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
        const offset = clamp(progress, -1.2, 1.2) * strength;

        img.style.transform = `scale(1.055) translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    }

    parallaxTicking = false;
  }

  function onParallaxScroll() {
    if (parallaxTicking) return;
    parallaxTicking = true;
    raf(updateParallax);
  }

  if (parallaxItems.length && !reduceMotion.matches) {
    window.addEventListener("scroll", onParallaxScroll, { passive: true });
    window.addEventListener("resize", onParallaxScroll, { passive: true });
    updateParallax();
  }

  reduceMotion.addEventListener?.("change", () => {
    window.location.reload();
  });

  /* ----------------------------------------------------------
     Counters
     ---------------------------------------------------------- */

  const counters = Array.from(document.querySelectorAll("[data-count]"));

  function animateCounter(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1500;
    const start = performance.now();

    const tick = (now) => {
      const progress = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      el.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        raf(tick);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    };

    raf(tick);
  }

  if (counters.length) {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      counters.forEach((el) => {
        el.textContent = `${el.dataset.count}${el.dataset.suffix || ""}`;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  /* ----------------------------------------------------------
     Work preview
     ---------------------------------------------------------- */

  const workList = document.querySelector("[data-work-list]");
  const preview = document.querySelector("[data-work-preview]");

  if (workList && preview) {
    const previewImg = preview.querySelector(".preview-img");
    const previewFig = preview.querySelector("[data-preview-fig]");
    const previewCaption = preview.querySelector("[data-preview-caption]");
    const rows = Array.from(workList.querySelectorAll("[data-preview]"));

    const preload = () => {
      rows.forEach((row) => {
        const image = new Image();
        image.src = row.dataset.preview;
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      window.addEventListener("load", preload, { once: true });
    }

    const activate = (row) => {
      const src = row.dataset.preview;
      preview.classList.add("is-active");

      if (previewImg.getAttribute("src") !== src) {
        previewImg.src = src;
      }

      if (previewFig) previewFig.textContent = row.dataset.fig || "";
      if (previewCaption) previewCaption.textContent = row.dataset.caption || "";
    };

    const deactivate = () => {
      preview.classList.remove("is-active");
    };

    rows.forEach((row) => {
      row.addEventListener("mouseenter", () => activate(row));
      row.addEventListener("focus", () => activate(row));
    });

    workList.addEventListener("mouseleave", deactivate);

    workList.addEventListener("focusout", (event) => {
      if (!workList.contains(event.relatedTarget)) deactivate();
    });

    const hoverCapable = window.matchMedia("(hover: hover) and (min-width: 1025px)");
    if (!hoverCapable.matches) deactivate();
  }

  /* ----------------------------------------------------------
     Mobile menu
     ---------------------------------------------------------- */

  const menu = document.querySelector("[data-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuClose = document.querySelector("[data-menu-close]");
  const menuLinks = Array.from(document.querySelectorAll("[data-menu-link]"));
  const main = document.querySelector("main");
  const footer = document.querySelector("[data-footer]");
  let menuOpen = false;
  let lastFocused = null;

  function focusableInMenu() {
    if (!menu) return [];
    return Array.from(
      menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((el) => el.offsetParent !== null);
  }

  function openMenu() {
    if (!menu || !menuToggle) return;

    menuOpen = true;
    lastFocused = document.activeElement;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
    header?.classList.remove("is-hidden");
    lenis?.stop();

    if (main) main.inert = true;
    if (footer) footer.inert = true;

    window.setTimeout(() => {
      (menuClose || focusableInMenu()[0])?.focus();
    }, 180);
  }

  function closeMenu(returnFocus = true) {
    if (!menu || !menuToggle || !menuOpen) return;

    menuOpen = false;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
    lenis?.start();

    if (main) main.inert = false;
    if (footer) footer.inert = false;

    if (returnFocus) {
      (lastFocused instanceof HTMLElement ? lastFocused : menuToggle).focus();
    }
  }

  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", () => closeMenu());

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!menuOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab" || !menu) return;

    const items = focusableInMenu();
    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ----------------------------------------------------------
     Smooth in-page navigation
     ---------------------------------------------------------- */

  const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]')).filter(
    (link) => link.getAttribute("href") !== "#" && !link.classList.contains("skip-link")
  );

  const scrollToTarget = (target) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.25 });
      return;
    }

    target.scrollIntoView({
      behavior: reduceMotion.matches ? "auto" : "smooth",
      block: "start"
    });
  };

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const hash = link.getAttribute("href");
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (!target) return;

      event.preventDefault();
      scrollToTarget(target);

      try {
        history.pushState(null, "", hash);
      } catch {
        /* file:// and sandboxed contexts can reject history changes. */
      }
    });
  });

  /* ----------------------------------------------------------
     Questions — accordion
     ---------------------------------------------------------- */

  const faq = document.querySelector("[data-faq]");

  if (faq) {
    const faqItems = Array.from(faq.querySelectorAll("[data-faq-item]"));

    const setFaqState = (item, open) => {
      const button = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      item.classList.toggle("is-open", open);
      button?.setAttribute("aria-expanded", String(open));
      if (answer) answer.inert = !open;
    };

    faqItems.forEach((item) => {
      setFaqState(item, item.classList.contains("is-open"));

      item.querySelector(".faq-question")?.addEventListener("click", () => {
        const willOpen = !item.classList.contains("is-open");
        faqItems.forEach((other) => setFaqState(other, other === item ? willOpen : false));
      });
    });
  }

  /* ----------------------------------------------------------
     Enquiry form
     ---------------------------------------------------------- */

  const form = document.querySelector("[data-enquiry-form]");
  const formError = document.querySelector("[data-form-error]");
  const formSuccess = document.querySelector("[data-form-success]");
  const successName = document.querySelector("[data-success-name]");
  const resetButton = document.querySelector("[data-form-reset]");

  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

  function setError(message) {
    if (!formError) return;
    formError.textContent = message;
    formError.hidden = false;
  }

  function clearError() {
    if (!formError) return;
    formError.hidden = true;
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearError();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const question = String(data.get("question") || "").trim();

      const nameInput = form.querySelector("#name");
      const emailInput = form.querySelector("#email");
      const questionInput = form.querySelector("#question");

      [nameInput, emailInput, questionInput].forEach((input) => {
        if (input) input.removeAttribute("aria-invalid");
      });

      if (!name || !question) {
        setError("Please complete each field with a valid email.");
        if (!name && nameInput) {
          nameInput.setAttribute("aria-invalid", "true");
          nameInput.focus();
        } else if (questionInput) {
          questionInput.setAttribute("aria-invalid", "true");
          questionInput.focus();
        }
        return;
      }

      if (!isEmail(email)) {
        setError("Please enter a valid email address.");
        if (emailInput) {
          emailInput.setAttribute("aria-invalid", "true");
          emailInput.focus();
        }
        return;
      }

      if (formSuccess) {
        if (successName) {
          successName.textContent = name ? `, ${name.split(" ")[0]}` : "";
        }

        form.hidden = true;
        formSuccess.hidden = false;
        formSuccess.focus({ preventScroll: true });
      }
    });

    form.addEventListener("input", (event) => {
      if (event.target instanceof HTMLInputElement) {
        event.target.removeAttribute("aria-invalid");
      }
      clearError();
    });
  }

  resetButton?.addEventListener("click", () => {
    if (!form || !formSuccess) return;

    form.reset();
    formSuccess.hidden = true;
    form.hidden = false;
    form.querySelector("#name")?.focus();
  });

  /* ----------------------------------------------------------
     Footer clocks
     ---------------------------------------------------------- */

  const clocks = Array.from(document.querySelectorAll("[data-clock]"));

  function updateClocks() {
    clocks.forEach((clock) => {
      const zone = clock.dataset.clock;
      if (!zone) return;

      try {
        const time = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: zone
        }).format(new Date());

        clock.textContent = time;
        clock.setAttribute("datetime", new Date().toISOString());
      } catch {
        clock.textContent = "—";
      }
    });
  }

  if (clocks.length) {
    updateClocks();
    window.setInterval(updateClocks, 30000);
  }

  /* ----------------------------------------------------------
     Chapter indicator
     ---------------------------------------------------------- */

  const chapterLabel = document.querySelector("[data-chapter-label]");
  const chapters = Array.from(document.querySelectorAll("[data-chapter]"));

  if (chapterLabel && chapters.length && "IntersectionObserver" in window) {
    const chapterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const label = entry.target.dataset.chapter;
          if (label) chapterLabel.textContent = label;
          body.classList.toggle("chapter-on-dark", entry.target.dataset.tone === "dark");
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
    );

    chapters.forEach((chapter) => chapterObserver.observe(chapter));
  }

  if (footer && "IntersectionObserver" in window) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          body.classList.toggle("chapter-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.08 }
    );

    footerObserver.observe(footer);
  }

  /* ----------------------------------------------------------
     Back to top + ready state
     ---------------------------------------------------------- */

  document.querySelector("[data-back-top]")?.addEventListener("click", () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.25 });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
  });

  // Let the archive marker fade in after first paint.
  window.setTimeout(() => body.classList.add("is-ready"), 500);
})();
