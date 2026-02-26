/* =============================================
   DANY FERNÁNDEZ – PORTFOLIO
   script.js
   ============================================= */

'use strict';

// ─── PROJECT DATA ──────────────────────────────────────────────────────────
const projects = [
  // 0
  {
    title: 'Sistema de Gestión Integral – SEGURILAB',
    categories: ['Web', 'IA', 'Automation'],
    description: 'Plataforma multi-módulo para laboratorio médico con 4 sucursales nacionales. Incluye módulo de inventario con IA para procesamiento de facturas PDF (detección automática de productos, cruce por similitud de nombre y actualización de stock sin intervención manual), sistema de colas de atención con validación de cédula vía Registro Civil, dashboard de KPIs comerciales con exportación a Excel, y flujos de automatización n8n para registro de pacientes, recordatorios por WhatsApp y sincronización con Bitrix24 CRM.',
    tech: ['Angular', 'Firebase', 'Python', 'n8n', 'Gemini API', 'REST APIs', 'Inteligencia Artificial'],
    images: []
  },
  // 1
  {
    title: 'Plataforma E-commerce con Doble Dashboard – Seguridad 24/7',
    categories: ['Web', 'E-commerce'],
    description: 'Plataforma web completa para empresa de seguridad y videovigilancia. Tienda en línea con pasarela de pagos integrada y dos dashboards diferenciados. El panel del administrador permite gestión de usuarios, productos, publicación de contenido al frontend, visualización de ubicaciones de clientes en mapa interactivo y un módulo de reportes de errores de cámaras instaladas. El panel del cliente permite revisar y descargar facturas, realizar pagos directamente desde su panel y reportar fallas o incidencias en sus equipos de videovigilancia.',
    tech: ['Angular', 'Next.js', 'Firebase', 'REST APIs', 'Google Maps API'],
    images: ["imagenes/ecomerce/1.jpg",
        "imagenes/ecomerce/WhatsApp Image 2026-02-25 at 12.18.42 PM.jpeg",
        "imagenes/ecomerce/WhatsApp Image 2026-02-25 at 12.19.49 PM.jpeg",
        "imagenes/ecomerce/WhatsApp Image 2026-02-25 at 12.20.17 PM.jpeg",

        "imagenes/ecomerce/Captura de pantalla 2026-02-25 201843.png",
        "imagenes/ecomerce/2.png",
        "imagenes/ecomerce/3.png",
        "imagenes/ecomerce/4.png",
        "imagenes/ecomerce/5.png",
        "imagenes/ecomerce/6.png",
       
    ]
  },
  // 2
  {
    title: 'StreamFlix – App Móvil de Streaming',
    categories: ['Mobile', 'Flutter'],
    description: 'App personal de streaming inspirada en TikTok pero aplicada al cine. Feed vertical de trailers con scroll continuo, sin cortes de audio por derechos de autor y con acceso directo a la película completa. Sistema de autenticación completo, catálogo por géneros, buscador con categorías populares, sección de tendencias, biblioteca personal y perfil de usuario. Dark mode nativo con navegación inferior de 5 secciones.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    images: ["imagenes/app/WhatsApp Image 2026-02-25 at 5.39.23 PM (1).jpeg",
        "imagenes/app/WhatsApp Image 2026-02-25 at 5.39.23 PM.jpeg",
        "imagenes/app/WhatsApp Image 2026-02-25 at 5.39.24 PM.jpeg",
        "imagenes/app/WhatsApp Image 2026-02-25 at 5.39.25 PM.jpeg",
        "imagenes/app/WhatsApp Image 2026-02-25 at 5.39.25 PM (2).jpeg",
    ]
  },
  // 3
  {
    title: 'Módulo de Inventario con IA y Lectura de Códigos de Barras',
    categories: ['Web', 'IA'],
    description: 'Sistema web de gestión de inventario para laboratorio médico multi-sucursal. Permite cargar inventario inicial desde Excel, pistolado de productos mediante scanner de códigos de barras en tiempo real y control de stock con validación de máximos automáticos. La funcionalidad principal es el procesamiento de facturas con IA: el usuario sube la factura en PDF, la IA detecta automáticamente productos y cantidades, los cruza por similitud de nombre con el inventario existente y actualiza el stock sin intervención manual. Sincronización en tiempo real con Firebase, exportación a Excel, impresión de códigos de barras y alertas de inventario bajo.',
    tech: ['Angular', 'Firebase', 'Next.js', 'REST APIs', 'Inteligencia Artificial'],
    images: ["imagenes/inventario/1.png",
        "imagenes/inventario/2.png",
        "imagenes/inventario/3.png",
    ]
  },
  // 4
  {
    title: 'Procesamiento de Documentos Médicos con Visión Artificial',
    categories: ['IA', 'Python'],
    description: 'Sistema backend en Python que recibe historias clínicas en PDF, las convierte automáticamente en imágenes y las procesa mediante la API de Gemini (Google AI) para extraer datos médicos de forma estructurada sin intervención manual. Incluye fallback automático entre múltiples modelos de IA (Gemini, NVIDIA Nemotron, Amazon Nova, Llama Vision) para garantizar disponibilidad continua. Se optimizó el rendimiento reduciendo el tiempo de procesamiento de 8–12 segundos a 3–5 segundos por documento mediante compresión de imágenes y procesamiento paralelo con ThreadPoolExecutor. Implementado en laboratorio médico multi-sucursal, eliminando la carga manual de digitación de datos clínicos.',
    tech: ['Python', 'Gemini API', 'NVIDIA Nemotron', 'Flask', 'ThreadPoolExecutor', 'REST APIs'],
    images: ["imagenes/medicos/1.png",
        "imagenes/medicos/2.png",
    ]
  },
  // 5
  {
    title: 'Difusiones Masivas por WhatsApp con Agente IA Anti-Spam',
    categories: ['Web', 'IA'],
    description: 'Plataforma web para envío masivo de mensajes por WhatsApp orientada a campañas de marketing. Permite cargar base de datos de contactos, redactar un mensaje base y programar el envío automático. La funcionalidad clave es la integración con IA: antes de cada envío, el agente genera variaciones automáticas del mensaje original para que cada contacto reciba una versión diferente, evitando que WhatsApp detecte el envío como spam y bloquee el número. Control total del broadcast en tiempo real (pausar, reanudar, cancelar), visualización de progreso, historial de campañas, módulo de analytics para identificar leads según respuestas recibidas, y conexión por código QR con estado en tiempo real vía Socket.IO.',
    tech: ['Angular', 'Node.js', 'Socket.IO', 'WhatsApp API', 'Inteligencia Artificial', 'REST APIs'],
    images: ["imagenes/difuciones/1.jpeg",
        "imagenes/difuciones/2.jpeg",
        "imagenes/difuciones/4.jpeg",
        "imagenes/difuciones/5.jpeg",
    ]
  },
  // 6
  {
    title: 'Transcriptor de Reuniones con GPU NVIDIA – Whisper + Flask',
    categories: ['IA', 'Python'],
    description: 'Servicio backend en Python para transcripción automática de reuniones a partir de archivos de video. El sistema recibe el video, extrae el audio y lo procesa mediante Whisper (OpenAI) aprovechando aceleración por GPU NVIDIA para reducir significativamente los tiempos de procesamiento frente a CPU tradicional. La API construida con Flask expone el endpoint de carga y devuelve la transcripción completa en texto, lista para ser consumida por cualquier frontend o sistema externo.',
    tech: ['Python', 'Flask', 'Whisper OpenAI', 'NVIDIA CUDA', 'REST APIs'],
    images: ["imagenes/transcriptor/8dea95dc-2da2-48a1-a2b3-cafc72edbd49.jpg"]
  },
  // 7
  {
    title: 'Automatización de Procesos Empresariales con n8n',
    categories: ['Automation'],
    description: 'Diseño e implementación de workflows automatizados con n8n que eliminan tareas manuales repetitivas conectando múltiples sistemas entre sí. Flujos implementados: registro automático de pacientes desde formularios web al CRM, envío de recordatorios de citas por WhatsApp, alertas automáticas al personal médico ante eventos críticos, sincronización de datos entre WhatsApp Business y Bitrix24, y procesamiento automático de documentos PDF con notificación de resultados. Todos los workflows corren en la nube y operan 24/7 sin intervención manual.',
    tech: ['n8n', 'WhatsApp Business API', 'Bitrix24', 'MySQL', 'REST APIs'],
    images: []
  },
  // 8
  {
    title: 'App Móvil de Gestión de Viajes Corporativos con Mapas',
    categories: ['Mobile', 'Maps'],
    description: 'Aplicación móvil multiplataforma en Flutter para gestión y aprobación de viajes corporativos. El empleado solicita un viaje desde la app, ingresa origen, destino y detalles del trayecto, y el sistema consume Google Maps API para visualizar la ruta, calcular distancia y evaluar automáticamente el nivel de riesgo según criterios configurables. Según el puntaje de riesgo, la solicitud escala por un flujo de aprobación: viajes de bajo riesgo los aprueba el coordinador, los de alto riesgo requieren aprobación del gerente. Cada nivel tiene su propio panel con solicitudes pendientes. Backend en Firebase con sincronización en tiempo real y notificaciones push.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Dart', 'REST APIs'],
    images: ["imagenes/viajes/Gemini_Generated_Image_e8tvkfe8tvkfe8tv.png",
        "imagenes/viajes/1.png",
        "imagenes/viajes/2.png",
        "imagenes/viajes/3.png",
    ]
  },
  // 9
  {
    title: 'Plataforma Web de Sorteos Online con Pasarela de Pagos',
    categories: ['Web', 'Pagos'],
    description: 'Plataforma web completa para gestión de sorteos online, adaptada para dispositivos móviles y escritorio. El usuario selecciona su participación y realiza el pago mediante múltiples métodos integrados. Una vez confirmado el pago, el sistema genera y envía automáticamente el número de ticket al participante tanto por WhatsApp como al correo registrado. El participante puede consultar su ticket desde la misma página. Incluye panel de administración para gestionar participantes, sorteos activos y ventas, además de vinculación de redes sociales del organizador.',
    tech: ['Angular', 'MercadoPago', 'MySQL', 'WhatsApp API', 'REST APIs'],
    images: ["imagenes/sorteos/5.jpeg",
        "imagenes/sorteos/4.jpeg",
        "imagenes/sorteos/3.png",
        "imagenes/sorteos/2.png",
        "imagenes/sorteos/1.png",
    ]
  },
  // 10
  {
    title: 'Mininos Felices – Landing Page para Refugio de Mascotas',
    categories: ['Web', 'Landing'],
    description: 'Sitio web informativo para refugio de mascotas diseñado para conectar animales con posibles adoptantes y personas dispuestas a apoyar la causa. Presenta de forma atractiva la misión del refugio, los animales disponibles y las formas de contribuir. Incluye formulario de agendamiento de visitas con validación de datos, y sección de donaciones con información de cuentas bancarias para apoyo económico directo. Desarrollado con enfoque en diseño limpio, navegación intuitiva y experiencia de usuario amigable para todo tipo de público.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Firebase'],
    images: ["imagenes/mininos/1.jpeg",
        "imagenes/mininos/2.png",
        "imagenes/mininos/3.png",
        "imagenes/mininos/4.png",
    ]
  }
];

// ─── DOM REFERENCES ────────────────────────────────────────────────────────
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
const nav            = document.getElementById('nav');
const hamburger      = document.getElementById('hamburger');
const mobileMenu     = document.getElementById('mobileMenu');
const kpanel         = document.getElementById('kpanel');
const kpName         = document.getElementById('kpName');
const kpDesc         = document.getElementById('kpDesc');
const kpBadge        = document.getElementById('kpBadge');
const kpGlow         = kpanel.querySelector('.kpanel-glow');
const keyboardWrap   = document.getElementById('keyboardWrap');
const modalBackdrop  = document.getElementById('modalBackdrop');
const modal          = document.getElementById('modal');
const modalClose     = document.getElementById('modalClose');
const projectGrid    = document.getElementById('projectGrid');

// ─── CURSOR ────────────────────────────────────────────────────────────────
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

const darkSections = ['stack', 'projects'];

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';

  const el = document.elementFromPoint(mouseX, mouseY);
  const inDark = el && darkSections.some(id => el.closest('#' + id));
  cursor.classList.toggle('on-dark', !!inDark);
  cursorFollower.classList.toggle('on-dark', !!inDark);
});

document.querySelectorAll('a, button, .key, .proj-card, .pfilter').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
    cursorFollower.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
    cursorFollower.classList.remove('hovering');
  });
});

function animateFollower() {
  followerX += (mouseX - followerX) * .12;
  followerY += (mouseY - followerY) * .12;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ─── NAVBAR ────────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// ─── SCROLL REVEAL ─────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left').forEach(el => {
  revealObserver.observe(el);
});

// ─── KEYBOARD SPIN-IN ──────────────────────────────────────────────────────
let keyboardAnimated = false;

const kbObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !keyboardAnimated) {
      keyboardAnimated = true;
      keyboardWrap.classList.add('spin-in');
      kbObserver.disconnect();
    }
  });
}, { threshold: .25 });

if (keyboardWrap) kbObserver.observe(keyboardWrap);

// ─── KEYBOARD KEYS ─────────────────────────────────────────────────────────
const keys = document.querySelectorAll('.key[data-tech]');
let panelTimer;

function spawnParticles(x, y, emoji) {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      p.className = 'particle';
      p.textContent = emoji;
      p.style.left = x + 'px';
      p.style.top  = y + 'px';
      const dx = (Math.random() - .5) * 80;
      p.style.setProperty('--dx', dx + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }, i * 60);
  }
}

keys.forEach(key => {
  key.addEventListener('click', e => {
    const tech  = key.dataset.tech;
    const desc  = key.dataset.desc;
    const badge = key.dataset.badge;
    const emoji = key.dataset.emoji;
    const color = key.style.getPropertyValue('--c');

    key.classList.add('pressed');
    setTimeout(() => key.classList.remove('pressed'), 160);

    const r = key.getBoundingClientRect();
    spawnParticles(r.left + r.width / 2, r.top + r.height / 2, emoji);

    kpGlow.style.setProperty('--kc', color);
    kpName.textContent = emoji + '  ' + tech;
    kpDesc.textContent = desc;
    kpBadge.textContent = badge;
    kpanel.classList.add('show');

    clearTimeout(panelTimer);
    panelTimer = setTimeout(() => kpanel.classList.remove('show'), 3800);
  });
});

const keyMap = {
  a: 'Angular',   l: 'Laravel',       f: 'Flutter',     p: 'Python',
  n: 'Node.js',   x: 'Next.js',       b: 'Firebase',    m: 'MySQL',
  '8': 'n8n',     t: 'TypeScript',    s: 'Socket.IO',   h: 'PHP',
  g: 'Gemini AI', w: 'Whisper',       c: 'Bitrix24',    k: 'MikroTik',
  r: 'REST APIs', q: 'WhatsApp API',  '$': 'Payphone',
  o: 'Google Maps', d: 'Docker',      z: 'Flask'
};

document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  const tech = keyMap[e.key.toLowerCase()];
  if (tech) {
    const k = [...keys].find(k => k.dataset.tech === tech);
    if (k) k.click();
  }
});

// ─── PROJECT FILTERS ───────────────────────────────────────────────────────
const filters  = document.querySelectorAll('.pfilter');
const projCards = document.querySelectorAll('.proj-card');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    projCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (cat === 'all' || cats.includes(cat)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ─── LIGHTBOX ──────────────────────────────────────────────────────────────
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');
const lbDots    = document.getElementById('lbDots');
const lbCounter = document.getElementById('lbCounter');

let lbImages = [];
let lbIndex  = 0;

function openLightbox(images, startIndex) {
  lbImages = images;
  lbIndex  = startIndex;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  if (!modalBackdrop.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function renderLightbox() {
  lbImg.src = lbImages[lbIndex].trim();
  lbCounter.textContent = (lbIndex + 1) + ' / ' + lbImages.length;

  lbDots.innerHTML = '';
  lbImages.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'lightbox-dot' + (i === lbIndex ? ' active' : '');
    dot.addEventListener('click', () => { lbIndex = i; renderLightbox(); });
    lbDots.appendChild(dot);
  });

  lbPrev.disabled = lbIndex === 0;
  lbNext.disabled = lbIndex === lbImages.length - 1;
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
lbPrev.addEventListener('click', () => { if (lbIndex > 0) { lbIndex--; renderLightbox(); } });
lbNext.addEventListener('click', () => { if (lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); } });

let lbTouchX = 0;
lightbox.addEventListener('touchstart', e => { lbTouchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - lbTouchX;
  if (Math.abs(dx) < 40) return;
  if (dx < 0 && lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
  if (dx > 0 && lbIndex > 0)                   { lbIndex--; renderLightbox(); }
}, { passive: true });

// ─── PROJECT MODAL ─────────────────────────────────────────────────────────
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');
const modalTags    = document.getElementById('modalTags');
const modalCats    = document.getElementById('modalCats');
const modalGallery = document.getElementById('modalGallery');

function openModal(idx) {
  const p = projects[idx];
  if (!p) return;

  modalCats.innerHTML = p.categories.map(c =>
    `<span class="modal-cat">${c}</span>`
  ).join('');

  modalTitle.textContent = p.title;
  modalDesc.textContent  = p.description;

  modalTags.innerHTML = p.tech.map(t =>
    `<span class="modal-tag">${t}</span>`
  ).join('');

  modalGallery.innerHTML = '';
  if (p.images && p.images.length > 0) {
    p.images.forEach((src, i) => {
      const img = document.createElement('img');
      img.className = 'gallery-img';
      img.src = src.trim();
      img.alt = p.title;
      img.title = 'Click para ampliar';
      img.addEventListener('click', () => openLightbox(p.images, i));
      modalGallery.appendChild(img);
    });
  } else {
    for (let i = 0; i < 3; i++) {
      const ph = document.createElement('div');
      ph.className = 'gallery-placeholder';
      ph.textContent = i === 0 ? 'Portada del proyecto' : `Captura ${i + 1}`;
      modalGallery.appendChild(ph);
    }
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

projCards.forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.project);
    if (!isNaN(idx)) openModal(idx);
  });
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) closeModal();
});

// Escape y flechas — lightbox tiene prioridad
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('open')) {
    if (e.key === 'ArrowLeft'  && lbIndex > 0)                   { lbIndex--; renderLightbox(); }
    if (e.key === 'ArrowRight' && lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
    if (e.key === 'Escape') closeLightbox();
    return;
  }
  if (e.key === 'Escape') closeModal();
});

// ─── ACTIVE NAV SECTION ────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: .4 });

sections.forEach(s => navObserver.observe(s));

// ─── INIT ──────────────────────────────────────────────────────────────────
console.log('%c DF. ', 'font-size:32px;font-weight:bold;color:#000;background:#fff;padding:8px 16px;');
console.log('%c Full Stack Developer · Quito, Ecuador', 'font-size:12px;color:#666;');