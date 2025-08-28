// ===== Utils =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const store = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const load  = (k, def=null) => JSON.parse(localStorage.getItem(k) || JSON.stringify(def));

// ===== Year in footer =====
$('#year').textContent = new Date().getFullYear();

// ===== Theme Toggle =====
const themeToggle = $('#themeToggle');
const applyTheme = (mode) => {
  document.body.classList.toggle('light', mode === 'light');
  themeToggle.innerHTML = mode === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  store('theme', mode);
};
applyTheme(load('theme','dark'));
themeToggle.addEventListener('click', () => {
  const mode = document.body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(mode);
});

// ===== Language Switch (ES/EN) =====
const langSelect = $('#langSelect');
const text = {
  es:{
    menuPerfil:"Perfil", menuExperiencia:"Experiencia", menuHabilidades:"Habilidades", menuEducacion:"Educación",
    menuProyectos:"Proyectos", menuContacto:"Contacto",
    heroTitle:"Ingeniero de Software",
    heroDesc:"Creando experiencias digitales sorprendentes con Web, Mobile & IoT",
    btnContacto:"Contáctame", btnCV:"Descargar CV",
    perfilTitle:"Perfil Profesional", perfilLead:"Enfocado en construir productos usables, escalables y con impacto real.",
    sobreMi:"Sobre mí", fortalezas:"Fortalezas",
    perfilText:"Estudiante de Ingeniería en Desarrollo y Gestión de Software (9º cuatrimestre). Experiencia en OOP, MVC, pruebas de API y despliegue. Trabajo con HTML, CSS, JavaScript, PHP, Python, Java, Kotlin (básico) y Dart. Frameworks: React, Flask, Flutter, Spring Boot, Angular y Bootstrap. Bases de datos SQL/NoSQL (MySQL, PostgreSQL, SQL Server, SQLite, Firebase y MongoDB).",
    expTitle:"Experiencia", expLead:"Proyectos académicos y colaboraciones con impacto.",
    exp1:"Aplicaciones móviles & web integradas con IoT para hipertensión.",
    exp2:"Aplicación móvil y web para agilidad de servicios en el Distrito 4.",
    exp3:"Control de invernadero, APIs, e-commerce e IoT en tiempo real.",
    exp4Title:"Gestión de BD de Sistema Electoral",
    exp4:"Cruce de tablas y administración de datos para mejorar inserción.",
    skillsTitle:"Habilidades", skillsLead:"Stack sólido y versátil para construir extremo a extremo.",
    projTitle:"Proyectos Destacados", projLead:"Selección con enfoque en negocio, UX y performance.",
    proj1:"Riego, fumigación y predicción de plagas. Datos en tiempo real.",
    proj2:"Gestión administrativa, sucursales y clientes con dashboards.",
    proj3:"Comunicación fluida Mobile ↔ Web mediante APIs REST.",
    liveTitle:"Proyectos Desplegados", liveLead:"Explora mis proyectos en línea.",
    eduTitle:"Educación", eduIng:"Ingeniería en Desarrollo y Gestión de Software", eduTsu:"TSU en Tecnologías de la Información", eduCert:"Certificados",
    contactTitle:"Contacto", contactLead:"Abierto a colaboraciones, freelance y oportunidades.",
    footerMsg:"Construido con ♥ y café."
  },
  en:{
    menuPerfil:"Profile", menuExperiencia:"Experience", menuHabilidades:"Skills", menuEducacion:"Education",
    menuProyectos:"Projects", menuContacto:"Contact",
    heroTitle:"Software Engineer",
    heroDesc:"Creating amazing digital experiences with Web, Mobile & IoT",
    btnContacto:"Contact Me", btnCV:"Download CV",
    perfilTitle:"Professional Profile", perfilLead:"Focused on building usable, scalable products with real impact.",
    sobreMi:"About me", fortalezas:"Strengths",
    perfilText:"Software Engineering student (9th term). Experience in OOP, MVC, API testing and deployment. I work with HTML, CSS, JavaScript, PHP, Python, Java, Kotlin (basic) and Dart. Frameworks: React, Flask, Flutter, Spring Boot, Angular and Bootstrap. Databases: MySQL, PostgreSQL, SQL Server, SQLite, Firebase and MongoDB.",
    expTitle:"Experience", expLead:"Academic projects and collaborations with impact.",
    exp1:"Mobile & web apps integrated with IoT for hypertension.",
    exp2:"Mobile and web app to improve services in District 4.",
    exp3:"Greenhouse control, APIs, e-commerce and real-time IoT.",
    exp4Title:"Electoral System DB Management",
    exp4:"Table matching and data administration to improve insertion.",
    skillsTitle:"Skills", skillsLead:"Solid and versatile stack to build end-to-end.",
    projTitle:"Featured Projects", projLead:"A selection focused on business, UX and performance.",
    proj1:"Irrigation, fumigation and pest prediction. Real-time data.",
    proj2:"Admin, branches and customers management with dashboards.",
    proj3:"Smooth Mobile ↔ Web communication through REST APIs.",
    liveTitle:"Deployed Projects", liveLead:"Explore my live projects.",
    eduTitle:"Education", eduIng:"Software Engineering", eduTsu:"Higher Technical Degree in IT", eduCert:"Certificates",
    contactTitle:"Contact", contactLead:"Open to collaborations, freelance and opportunities.",
    footerMsg:"Built with ♥ and coffee."
  }
};
const applyLang = (lng) => {
  $$("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (text[lng][key] !== undefined) el.textContent = text[lng][key];
  });
  document.documentElement.lang = lng;
  store('lang', lng);
};
applyLang(load('lang','es'));
langSelect.value = load('lang','es');
langSelect.addEventListener('change', e => applyLang(e.target.value));

// ===== Smooth scroll =====
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      $(href)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});

// ===== Reveal on scroll =====
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); revealObs.unobserve(e.target); }
  });
},{ threshold:.16 });
$$('.section, .card, .project, .timeline__item, .contact-card, .deployed-project').forEach(el=>{
  el.classList.add('reveal'); revealObs.observe(el);
});

// ===== 3D Tilt effect (vanilla) =====
$$('.tilt').forEach(card=>{
  let rect;
  const damp=12;
  card.addEventListener('pointermove', (e)=>{
    rect = rect || card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * damp;
    const ry = (x - 0.5) * damp;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });
  ['pointerleave','blur'].forEach(evt=>card.addEventListener(evt, ()=>{
    card.style.transform = '';
    rect = null;
  }));
});

// ===== Copy to clipboard + toast =====
const toast = $('#toast');
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 1800);
}
$$('.copy').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const v = btn.dataset.copy;
    try{ await navigator.clipboard.writeText(v); showToast('Copiado ✓'); }
    catch{ showToast('No se pudo copiar'); }
  });
});

// ===== Background particles (lightweight) =====
(function particles(){
  const c = $('#bg-particles');
  const ctx = c.getContext('2d');
  let w, h, DPR = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  let pts = [];

  function resize(){
    w = c.width  = Math.floor(innerWidth * DPR);
    h = c.height = Math.floor(innerHeight * DPR);
    c.style.width = innerWidth + 'px';
    c.style.height= innerHeight + 'px';
    pts = new Array(80).fill(0).map(()=>({
      x: Math.random()*w, y: Math.random()*h,
      vx:(Math.random()-.5)*0.3*DPR, vy:(Math.random()-.5)*0.3*DPR
    }));
  }
  window.addEventListener('resize', resize, {passive:true});
  resize();

  function step(){
    ctx.clearRect(0,0,w,h);
    // draw lines
    for(let i=0;i<pts.length;i++){
      const a = pts[i];
      a.x+=a.vx; a.y+=a.vy;
      if(a.x<0||a.x>w) a.vx*=-1;
      if(a.y<0||a.y<h) a.vy*=-1;

      for(let j=i+1;j<pts.length;j++){
        const b=pts[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const d2=dx*dx+dy*dy;
        if(d2< (140*DPR)*(140*DPR)){
          const alpha = 1 - (d2**0.5)/(140*DPR);
          ctx.strokeStyle = `rgba(100,255,218,${alpha*.18})`;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
      // dots
      ctx.fillStyle='rgba(124,58,237,.18)';
      ctx.beginPath(); ctx.arc(a.x,a.y,1.6*DPR,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(step);
  }
  step();
})();

// ===== Check and Fallback for Icons =====
document.addEventListener('DOMContentLoaded', () => {
  const indicators = $$('.clickable-indicator');
  indicators.forEach(indicator => {
    const icon = indicator.querySelector('i');
    if (!icon || !window.getComputedStyle(icon).fontFamily.includes('FontAwesome')) {
      indicator.innerHTML = '→'; // Fallback to Unicode arrow if icon fails
    }
  });
});