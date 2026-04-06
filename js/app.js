/* ══════════════════════════════════════════════════
   MATCH DAY PORTFOLIO — APP.JS
   ══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── i18n Translations ─────────────────────────────
  const i18n = {
    en: {
      matchday_sub: "Your front-row seat to my career",
      select_position: "SELECT YOUR POSITION",
      pos_gk: "Goalkeeper", pos_gk_desc: "Backend · Reliable",
      pos_mid: "Midfielder", pos_mid_desc: "Full-Stack · Versatile",
      pos_st: "Striker", pos_st_desc: "Mobile/Frontend · Offensive",
      select_kit: "KIT COLOR",
      kickoff: "KICK OFF →",
      visitor: "visitor",
      nav_formations: "~/formations",
      nav_squad: "~/squad",
      nav_academy: "~/academy",
      nav_stats: "~/stats",
      nav_contact: "Contact",
      hero_headline: "I build mobile apps, web platforms, and IoT systems.",
      hero_bio: "10th-semester Software Engineering student with real experience building mobile & web apps, integrating APIs, managing SQL & NoSQL databases, and prototyping IoT solutions. I've delivered real products for political parties, companies, and academic institutions. I turn complex problems into clean, functional code.",
      hero_sub: "Full-Stack Developer · Mobile · IoT · Querétaro, MX",
      cta_boot: "./boot_squad →",
      cta_log: "git log --oneline",
      card_role: "Full-Stack Developer",
      sec_formations: "~/formations",
      formations_title: "Tactical Formation",
      formations_sub: "My professional trajectory in pitch formation",
      exp1_title: "Technology Development Intern",
      exp1_stack: "Cold chain logistics · Stack TBD",
      present: "Present",
      exp2_title: "Mobile & Web Developer",
      exp2_stack: "Mobile app + web dashboard for district service monitoring",
      exp3_title: "Mobile, Web & IoT Developer",
      exp3_stack: "Flutter/Kotlin + web app + IoT prototype for hypertension patients",
      exp4_title: "Electoral DB Management",
      exp4_stack: "SQL, database cross-referencing and data administration",
      sec_squad: "~/squad",
      squad_title: "The Squad",
      squad_sub: "Projects deployed like star signings",
      team5: "Team of 5",
      proj1_name: "Academic Tutoring Platform with Microservices",
      scout1: "Web app for academic tutoring requests with student, teacher, and coordinator roles. Microservices architecture.",
      proj2_name: "Real-Time Monitoring PWA — DHT22",
      scout2: "Real-time temperature and humidity dashboard with interactive charts and DHT22 sensor.",
      proj3_name: "Mobile & Web App with APIs — PT Electoral",
      scout3: "Mobile + web integration for district 4 services of PT party with real-time data management.",
      proj4_name: "IoT Greenhouse Control System",
      scout4: "Web app + IoT prototype for irrigation, fumigation, and pest prediction with real-time sensor data.",
      proj5_name: "Kanban Task Management Web App",
      scout5: "Kanban task manager with full CRUD for personal and team project management.",
      sec_stats: "~/stats",
      stats_title: "Player Stats",
      stats_sub: "Performance metrics — FIFA-style radar analysis",
      stat_pace: "Pace", stat_pace_d: "API Integration & Speed",
      stat_shooting: "Shooting", stat_shooting_d: "Full-Stack Execution",
      stat_passing: "Passing", stat_passing_d: "Collaboration & Communication",
      stat_dribbling: "Dribbling", stat_dribbling_d: "Problem Solving",
      stat_defending: "Defending", stat_defending_d: "DB Architecture",
      stat_physical: "Physical", stat_physical_d: "IoT & Docker Deployment",
      tech_title: "Jersey Numbers — Tech Stack",
      tech_lang: "Languages",
      tech_db: "Databases",
      tech_tools: "Tools",
      lang_title: "Languages",
      lang_native: "Native",
      sec_academy: "~/academy",
      academy_title: "Youth Academy",
      academy_sub: "Timeline — from kickoff to final whistle",
      edu1_t: "Technical Career Start",
      edu1: "The opening whistle — my career match begins",
      edu2_t: "Associate's Multiplatform Software Development",
      edu2: "UTEQ · Jan 2022 – Dec 2024 ✓ COMPLETED",
      edu3_t: "B.Eng. Software Development & Management",
      edu3: "UTEQ · Jan 2025 – Present ⚽ IN PROGRESS",
      edu4_t: "The Match Continues",
      edu4: "Building the future — the game never stops",
      certs_title: "🟨 Trophies — Certifications",
      cert2: "Introduction to Programming with Python",
      cert3: "English Level A1 Certificate",
      cert3_org: "Language Certification",
      cert4: "Create AI Agents with Copilot Studio",
      sec_contact: "~/contact",
      contact_title: "Transfer Window",
      contact_sub: "Submit your bid — let's negotiate",
      form_club: "Club / Company Name",
      form_project: "Project Type",
      form_p1: "Web Development",
      form_p2: "Mobile App",
      form_p3: "Full-Stack",
      form_p4: "IoT / Embedded",
      form_p5: "Other",
      form_budget: "Budget (optional)",
      form_b0: "TBD",
      form_b1: "Startup",
      form_b2: "Mid-Table",
      form_b3: "Champions League",
      form_message: "Message to Developer",
      form_submit: "SUBMIT BID →",
      form_ok: "Bid received! I'll review and respond within 24 hours.",
      footer_text: "All Rights Reserved. Built with passion and code.",
      fulltime_msg: "Thanks for watching the match.",
      restart: "REPLAY MATCH →",
      comm_hero: "And Bryan Axel steps onto the pitch...",
      comm_formations: "Bryan enters the formation zone — tactical overview loading...",
      comm_squad: "The squad is revealed! What a roster of projects...",
      comm_stats: "Let's look at the stats — impressive numbers across the board!",
      comm_academy: "A look back at the academy years — what a journey...",
      comm_contact: "The transfer window is OPEN! Submit your bid now!"
    },
    es: {
      matchday_sub: "Tu asiento de primera fila a mi carrera",
      select_position: "SELECCIONA TU POSICIÓN",
      pos_gk: "Portero", pos_gk_desc: "Backend · Confiable",
      pos_mid: "Mediocampista", pos_mid_desc: "Full-Stack · Versátil",
      pos_st: "Delantero", pos_st_desc: "Mobile/Frontend · Ofensivo",
      select_kit: "COLOR DE EQUIPACIÓN",
      kickoff: "SAQUE INICIAL →",
      visitor: "visitante",
      nav_formations: "~/formaciones",
      nav_squad: "~/squad",
      nav_academy: "~/academia",
      nav_stats: "~/stats",
      nav_contact: "Contacto",
      hero_headline: "Construyo apps móviles, plataformas web y sistemas IoT.",
      hero_bio: "Estudiante de 10° cuatrimestre de Ingeniería de Software con experiencia real construyendo apps móviles y web, integrando APIs, gestionando bases de datos SQL & NoSQL, y prototipando soluciones IoT. He entregado productos reales para partidos políticos, empresas e instituciones académicas. Convierto problemas complejos en código limpio y funcional.",
      hero_sub: "Full-Stack Developer · Mobile · IoT · Querétaro, MX",
      cta_boot: "./boot_squad →",
      cta_log: "git log --oneline",
      card_role: "Full-Stack Developer",
      sec_formations: "~/formaciones",
      formations_title: "Formación Táctica",
      formations_sub: "Mi trayectoria profesional en formación de cancha",
      exp1_title: "Becario de Desarrollo Tecnológico",
      exp1_stack: "Logística de cadena de frío · Stack por definir",
      present: "Presente",
      exp2_title: "Desarrollador Móvil & Web",
      exp2_stack: "App móvil + dashboard web para monitoreo de servicios distritales",
      exp3_title: "Desarrollador Móvil, Web & IoT",
      exp3_stack: "Flutter/Kotlin + web app + prototipo IoT para pacientes con hipertensión",
      exp4_title: "Gestión de BD Electoral",
      exp4_stack: "SQL, cruce de bases de datos y administración de datos",
      sec_squad: "~/squad",
      squad_title: "El Equipo",
      squad_sub: "Proyectos desplegados como fichajes estrella",
      team5: "Equipo de 5",
      proj1_name: "Plataforma de Asesorías con Microservicios",
      scout1: "App web para solicitudes de tutorías académicas con roles de estudiantes, profesores y coordinadores. Arquitectura de microservicios.",
      proj2_name: "PWA Monitoreo en Tiempo Real — DHT22",
      scout2: "Dashboard de temperatura y humedad en tiempo real con gráficas interactivas y sensor DHT22.",
      proj3_name: "App Móvil & Web con APIs — PT Electoral",
      scout3: "Integración móvil + web para servicios del distrito 4 del partido PT con gestión de datos en tiempo real.",
      proj4_name: "Sistema de Control de Invernadero IoT",
      scout4: "Web app + prototipo IoT para riego, fumigación y predicción de plagas con datos de sensores en tiempo real.",
      proj5_name: "App Web Gestión de Tareas Kanban",
      scout5: "Gestor de tareas Kanban con CRUD completo para gestión de proyectos personales y de equipo.",
      sec_stats: "~/stats",
      stats_title: "Estadísticas del Jugador",
      stats_sub: "Métricas de rendimiento — análisis radar estilo FIFA",
      stat_pace: "Velocidad", stat_pace_d: "Integración de APIs & rapidez",
      stat_shooting: "Disparo", stat_shooting_d: "Full-Stack Execution",
      stat_passing: "Pases", stat_passing_d: "Colaboración & comunicación",
      stat_dribbling: "Regate", stat_dribbling_d: "Resolución de problemas",
      stat_defending: "Defensa", stat_defending_d: "DB Architecture",
      stat_physical: "Físico", stat_physical_d: "IoT & Docker Deployment",
      tech_title: "Números de Camiseta — Tech Stack",
      tech_lang: "Lenguajes",
      tech_db: "Bases de Datos",
      tech_tools: "Herramientas",
      lang_title: "Idiomas",
      lang_native: "Nativo",
      sec_academy: "~/academia",
      academy_title: "Academia Juvenil",
      academy_sub: "Línea temporal — del pitido inicial al final",
      edu1_t: "Inicio Carrera Técnica",
      edu1: "El silbatazo inicial — comienza el partido de mi carrera",
      edu2_t: "TSU Desarrollo de Software Multiplataforma",
      edu2: "UTEQ · Ene 2022 – Dic 2024 ✓ COMPLETADO",
      edu3_t: "Ing. Desarrollo y Gestión de Software",
      edu3: "UTEQ · Ene 2025 – Presente ⚽ EN PROGRESO",
      edu4_t: "El Partido Continúa",
      edu4: "Construyendo el futuro — el juego nunca para",
      certs_title: "🟨 Trofeos — Certificaciones",
      cert2: "Introducción a la Programación con Python",
      cert3: "Certificado Inglés Nivel A1",
      cert3_org: "Certificación de idioma",
      cert4: "Crear Agentes de AI con Copilot Studio",
      sec_contact: "~/contacto",
      contact_title: "Ventana de Fichajes",
      contact_sub: "Envía tu oferta — negociemos",
      form_club: "Club / Nombre de la Empresa",
      form_project: "Tipo de Proyecto",
      form_p1: "Desarrollo Web",
      form_p2: "App Móvil",
      form_p3: "Full-Stack",
      form_p4: "IoT / Embedded",
      form_p5: "Otro",
      form_budget: "Presupuesto (opcional)",
      form_b0: "Por definir",
      form_b1: "Startup",
      form_b2: "Media Tabla",
      form_b3: "Champions League",
      form_message: "Mensaje al Desarrollador",
      form_submit: "ENVIAR OFERTA →",
      form_ok: "¡Oferta recibida! Revisaré y responderé en 24 horas.",
      footer_text: "Todos los derechos reservados. Hecho con pasión y código.",
      fulltime_msg: "Gracias por ver el partido.",
      restart: "REPETIR PARTIDO →",
      comm_hero: "¡Y Bryan Axel entra al campo...",
      comm_formations: "Bryan entra en la zona de formación — cargando vista táctica...",
      comm_squad: "¡Se revela el equipo! Vaya roster de proyectos...",
      comm_stats: "¡Veamos las estadísticas — números impresionantes!",
      comm_academy: "Una mirada a los años de academia — ¡qué viaje...",
      comm_contact: "¡La ventana de fichajes está ABIERTA! ¡Envía tu oferta!"
    }
  };

  // ── State ─────────────────────────────────────────
  let currentLang = 'es';
  let currentPosition = 'midfielder';
  let currentKit = 'champions';
  let siteStarted = false;
  let statsChartInstance = null;

  // ── DOM References ────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const onboarding = $('#onboarding');
  const stadiumGate = $('#stadium-gate');
  const osWrapper = $('#os-wrapper');
  const mainSite = $('#main-site');
  const kickoffBtn = $('#kickoff-btn');
  const commentary = $('#commentary');
  const scrollPitch = $('#scroll-pitch');
  const scrollBall = $('#scroll-ball');
  const exitBtn = $('#exit-btn');
  const finalWhistle = $('#final-whistle');
  const varFlash = $('#var-flash');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');

  // ── Kit System ────────────────────────────────────
  const kits = {
    champions:  '#F5C842',
    manchester: '#EF4444',
    city:       '#38BDF8',
    madrid:     '#A855F7',
    tigres:     '#FB923C',
    celtic:     '#34D399',
  };

  function setKit(name) {
    const color = kits[name];
    if (!color) return;
    document.documentElement.style.setProperty('--color-kit', color);
    document.documentElement.style.setProperty('--color-gold-bright', color);
  }

  function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('linux') && !ua.includes('android')) return 'linux';
    if (ua.includes('mac')) return 'macos';
    return 'windows';
  }

  // ── i18n Application ──────────────────────────────
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    const dict = i18n[lang];
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  // ── Position Application ──────────────────────────
  function applyPosition(position) {
    currentPosition = position;
    document.documentElement.setAttribute('data-position', position);
    const badge = $('#card-position');
    const posMap = {
      goalkeeper: 'GK',
      midfielder: 'MID',
      striker: 'ST'
    };
    if (badge) badge.textContent = posMap[position] || 'MID';
  }

  // ── Onboarding Setup ─────────────────────────────
  function initOnboarding() {
    // Language buttons
    $$('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyLanguage(btn.dataset.langSelect);
      });
    });

    // Position buttons
    $$('.position-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.position-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyPosition(btn.dataset.position);
      });
    });

    // Kit swatches
    $$('.kit-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        $$('.kit-swatch').forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
        currentKit = sw.dataset.kit;
        setKit(currentKit);
      });
    });

    // Kick Off
    kickoffBtn.addEventListener('click', startMatch);
  }

  // ── Start Match (Gate Animation) ──────────────────
  function startMatch() {
    if (siteStarted) return;
    siteStarted = true;

    // Close gates
    stadiumGate.classList.add('closing');

    setTimeout(() => {
      // Hide onboarding
      onboarding.classList.add('leaving');

      setTimeout(() => {
        onboarding.style.display = 'none';

        // Setup OS wrapper
        const os = detectOS();
        osWrapper.dataset.os = os;
        const osTitle = $('#os-title');
        if (os === 'macos') osTitle.textContent = 'BryanAxel_Portfolio.app';
        else if (os === 'linux') osTitle.textContent = 'VAR_Room — bash';
        else osTitle.textContent = 'Portfolio.exe';

        // Show site
        osWrapper.classList.remove('hidden');
        setTimeout(() => osWrapper.classList.add('visible'), 50);

        // Open gates
        stadiumGate.classList.remove('closing');
        stadiumGate.classList.add('opening');

        // Show UI elements
        setTimeout(() => {
          scrollPitch.classList.add('visible');
          exitBtn.classList.add('visible');
          runTerminalAnimation();
          initScrollEffects();
          initStatsChart();
          showCommentary('comm_hero');
        }, 400);

        setTimeout(() => {
          stadiumGate.style.display = 'none';
        }, 2000);
      }, 400);
    }, 800);
  }

  // ── Terminal Boot Animation ───────────────────────
  function runTerminalAnimation() {
    const lines = $$('.terminal-line');
    lines.forEach(line => {
      const delay = parseInt(line.dataset.delay || 0);
      setTimeout(() => line.classList.add('visible'), delay);
    });
  }

  // ── Commentary System ─────────────────────────────
  let commentaryTimeout = null;
  function showCommentary(key) {
    const dict = i18n[currentLang];
    const text = dict[key] || key;
    commentary.textContent = text;
    commentary.classList.add('show');

    clearTimeout(commentaryTimeout);
    commentaryTimeout = setTimeout(() => {
      commentary.classList.remove('show');
    }, 3500);
  }

  // ── VAR Flash ─────────────────────────────────────
  function triggerVarFlash() {
    varFlash.classList.remove('flash');
    void varFlash.offsetWidth;
    varFlash.classList.add('flash');
  }

  // ── Scroll Effects ────────────────────────────────
  function initScrollEffects() {
    const sections = $$('.section');
    const sectionCommentary = {
      formaciones: 'comm_formations',
      squad: 'comm_squad',
      stats: 'comm_stats',
      academia: 'comm_academy',
      contact: 'comm_contact'
    };
    const shown = new Set();

    // Intersection Observer for sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          const id = entry.target.id;
          if (sectionCommentary[id] && !shown.has(id)) {
            shown.add(id);
            showCommentary(sectionCommentary[id]);
            triggerVarFlash();
          }

          // Animate stat bars
          if (id === 'stats') {
            setTimeout(() => {
              $$('.stat-bar-fill').forEach(bar => bar.classList.add('animated'));
              $$('.lang-fill').forEach(bar => bar.classList.add('animated'));
            }, 300);
          }
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(s => observer.observe(s));

    // Scroll progress ball
    const mainContent = mainSite || document.documentElement;
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      if (scrollBall) {
        scrollBall.style.left = (progress * 100) + '%';
      }

      // Navbar active link
      updateActiveNav(scrollTop);

      // Timeline progress
      updateTimelineProgress();
    }, { passive: true });
  }

  // ── Active Nav Link ───────────────────────────────
  function updateActiveNav(scrollTop) {
    const navLinks = $$('.nav-link:not(.nav-link--cta)');
    const sections = ['formaciones', 'squad', 'academia', 'stats', 'contact'];
    let currentSection = '';

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200) currentSection = id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  // ── Timeline Progress ─────────────────────────────
  function updateTimelineProgress() {
    const academy = document.getElementById('academia');
    const progress = document.getElementById('timeline-progress');
    if (!academy || !progress) return;

    const rect = academy.getBoundingClientRect();
    const sectionHeight = academy.offsetHeight;
    const viewProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (sectionHeight + window.innerHeight)));
    progress.style.height = (viewProgress * 100) + '%';
  }

  // ── Stats Chart (Chart.js) ────────────────────────
  function initStatsChart() {
    const canvas = document.getElementById('statsChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');
    const goldBright = getComputedStyle(document.documentElement).getPropertyValue('--color-gold-bright').trim() || '#F5C842';

    if (statsChartInstance) {
      statsChartInstance.destroy();
    }

    statsChartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          currentLang === 'es' ? 'Velocidad' : 'Pace',
          currentLang === 'es' ? 'Disparo' : 'Shooting',
          currentLang === 'es' ? 'Pases' : 'Passing',
          currentLang === 'es' ? 'Regate' : 'Dribbling',
          currentLang === 'es' ? 'Defensa' : 'Defending',
          currentLang === 'es' ? 'Físico' : 'Physical'
        ],
        datasets: [{
          data: [90, 92, 85, 88, 87, 91],
          backgroundColor: 'rgba(245, 200, 66, 0.15)',
          borderColor: goldBright,
          borderWidth: 2,
          pointBackgroundColor: goldBright,
          pointBorderColor: '#fff',
          pointBorderWidth: 1,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            min: 0,
            ticks: {
              stepSize: 20,
              color: 'rgba(255,255,255,0.2)',
              backdropColor: 'transparent',
              font: { size: 10 }
            },
            grid: {
              color: 'rgba(30, 58, 110, 0.6)',
              circular: true
            },
            angleLines: {
              color: 'rgba(30, 58, 110, 0.6)'
            },
            pointLabels: {
              color: '#94A3B8',
              font: { size: 12, family: "'Inter', 'DM Sans', sans-serif" }
            }
          }
        },
        plugins: {
          legend: { display: false }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutQuart'
        }
      }
    });
  }

  // ── Hamburger Menu ────────────────────────────────
  function initMobileMenu() {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close on link click
    $$('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Contact Form ──────────────────────────────────
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const club = form.querySelector('#club-name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      if (!club.value.trim() || !email.value.trim() || !message.value.trim()) {
        return;
      }

      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        return;
      }

      // Show success
      form.querySelectorAll('.form-group, .btn--submit').forEach(el => el.style.display = 'none');
      success.classList.remove('hidden');
      triggerVarFlash();
    });
  }

  // ── Exit / Final Whistle ──────────────────────────
  function initExitButton() {
    exitBtn.addEventListener('click', () => {
      finalWhistle.classList.add('active');
    });

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        finalWhistle.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ── Formation Node Clicks (mobile friendly) ──────
  function initFormationNodes() {
    $$('.formation-node').forEach(node => {
      node.addEventListener('click', (e) => {
        // Toggle active
        const wasActive = node.classList.contains('active');
        $$('.formation-node').forEach(n => n.classList.remove('active'));
        if (!wasActive) node.classList.add('active');
        e.stopPropagation();
      });
    });

    // Close on outside click
    document.addEventListener('click', () => {
      $$('.formation-node').forEach(n => n.classList.remove('active'));
    });
  }

  // ── Smooth scroll for nav links ───────────────────
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Init ──────────────────────────────────────────
  function init() {
    // Set initial kit
    setKit(currentKit);

    initOnboarding();
    initMobileMenu();
    initContactForm();
    initExitButton();
    initFormationNodes();
    initSmoothScroll();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
