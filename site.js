// === Loader ===
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden-loader');
  }, 1400);
});

// === Custom cursor ===
(function(){
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  function loop(){
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, [data-cursor], .card-soft')) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, [data-cursor], .card-soft')) ring.classList.remove('hover');
  });
})();

// === Header transparent → solid ===
(function(){
  const header = document.getElementById('siteHeader');
  const logo = document.getElementById('headerLogo');
  function update(){
    const scrolled = window.scrollY > 60;
    if (scrolled){
      header.classList.add('bg-white','shadow-md','backdrop-blur');
      header.querySelectorAll('.nav-link').forEach(l => { l.classList.remove('text-white'); l.classList.add('text-azul-escuro'); });
      if (logo) logo.src = 'assets/logo-color.png';
    } else {
      header.classList.remove('bg-white','shadow-md','backdrop-blur');
      header.querySelectorAll('.nav-link').forEach(l => { l.classList.add('text-white'); l.classList.remove('text-azul-escuro'); });
      if (logo) logo.src = 'assets/logo-white.png';
    }
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// === Mobile menu ===
(function(){
  const toggle = document.getElementById('mobileToggle');
  const close = document.getElementById('mobileClose');
  const menu = document.getElementById('mobileMenu');
  if (!toggle) return;
  toggle.addEventListener('click', () => { menu.classList.add('open'); document.body.classList.add('no-scroll'); });
  close.addEventListener('click', () => { menu.classList.remove('open'); document.body.classList.remove('no-scroll'); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); document.body.classList.remove('no-scroll'); }));
})();

// === Reveal on scroll ===
(function(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// === Counters ===
(function(){
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const observe = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.counter, 10);
      const dur = 1600;
      const start = performance.now();
      function step(now){
        const t = Math.min(1, (now - start) / dur);
        const v = Math.round(easeOut(t) * target);
        el.textContent = v.toLocaleString('pt-BR');
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      observe.unobserve(el);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-counter]').forEach(el => observe.observe(el));
})();

// === Parallax ===
(function(){
  const items = document.querySelectorAll('.parallax');
  function update(){
    const sy = window.scrollY;
    items.forEach(el => {
      const speed = parseFloat(el.dataset.speed || '0.04');
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height/2 - window.innerHeight/2;
      el.style.transform = `translateY(${center * speed}px)`;
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// === Scroll spy ===
(function(){
  const sections = ['sobre','gold','produtos','exame','loja','contato'];
  const links = document.querySelectorAll('.nav-link[data-section]');
  function update(){
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top < 200 && r.bottom > 200) current = id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.section === current));
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// === Modal ===
function openModal(){ const m = document.getElementById('modal'); m.classList.remove('hidden'); m.classList.add('flex'); document.body.classList.add('no-scroll'); }
function closeModal(){ const m = document.getElementById('modal'); m.classList.add('hidden'); m.classList.remove('flex'); document.body.classList.remove('no-scroll'); }
window.openModal = openModal;
window.closeModal = closeModal;

function openWhatsApp(context){
  const msgs = {
    default: 'Olá! Vim através do site e gostaria de mais informações',
    exame: 'Olá! Gostaria de agendar um exame de vista',
    depoimentos: 'Olá! Gostaria de falar com um consultor da Olhar 360'
  };
  const msg = encodeURIComponent(msgs[context] || msgs.default);
  window.open(`https://wa.me/5588992742862?text=${msg}`, '_blank');
}
window.openWhatsApp = openWhatsApp;

function scrollToContact(){ document.getElementById('contato').scrollIntoView({behavior:'smooth', block:'start'}); }
window.scrollToContact = scrollToContact;

function submitForm(e, fromModal){
  e.preventDefault();
  const f = e.target;
  const data = {
    nome: f.nome.value,
    telefone: f.telefone.value,
    data: f.data.value,
    hora: f.hora.value,
  };
  const dt = data.data ? new Date(data.data + 'T00:00:00').toLocaleDateString('pt-BR') : '';
  const msg = `Olá! Gostaria de agendar meu exame de vista.%0A%0A` +
    `*Nome:* ${data.nome}%0A` +
    `*Telefone:* ${data.telefone}%0A` +
    `*Data preferida:* ${dt}%0A` +
    `*Hora:* ${data.hora}`;
  window.open(`https://wa.me/5588992742862?text=${msg}`, '_blank');
  if (fromModal) closeModal();
}
window.submitForm = submitForm;

// === Testimonials — marquee infinito (2 trilhas, animação 100% CSS) ===
(function(){
  const items = [
    { name: 'Mariana Albuquerque', city: 'Camocim/CE', text: 'Atendimento excepcional. Modelo perfeito pro meu rosto e estilo. Voltarei sempre!', rating: 5, color: '#EBBF32' },
    { name: 'Rafael Souza', city: 'Granja/CE', text: 'Coleção 360Gold impressionante. Conforto, design moderno e preço justo.', rating: 5, color: '#6CA1B0' },
    { name: 'Juliana Costa', city: 'Camocim/CE', text: 'Equipe atenciosa, ambiente acolhedor. Saí com óculos novos no mesmo dia.', rating: 5, color: '#1A3D5C' },
    { name: 'Carlos Henrique', city: 'Barroquinha/CE', text: 'Já comprei três vezes — sempre boa experiência. Profissionais que entendem.', rating: 5, color: '#EBBF32' },
    { name: 'Beatriz Mendes', city: 'Chaval/CE', text: 'Levei minha filha pro exame. Cuidado e paciência impressionantes.', rating: 5, color: '#6CA1B0' },
    { name: 'Pedro Lima', city: 'Camocim/CE', text: 'Variedade de marcas e atendimento humanizado. Lentes Zeiss valem cada centavo.', rating: 5, color: '#1A3D5C' },
    { name: 'Ana Paula Vieira', city: 'Camocim/CE', text: 'Recebi orientação completa pra escolher minhas lentes multifocais. Excelente!', rating: 5, color: '#EBBF32' },
    { name: 'Roberto Nogueira', city: 'Granja/CE', text: 'Preço justo, qualidade premium. Recomendo a todos da região.', rating: 5, color: '#6CA1B0' },
  ];

  const row1 = document.getElementById('tMarqueeRow1');
  const row2 = document.getElementById('tMarqueeRow2');
  if (!row1 || !row2) return;

  const initials = n => n.split(' ').filter(Boolean).slice(0,2).map(p => p[0]).join('').toUpperCase();

  const cardHTML = t => `
    <div class="t-mini">
      <div class="t-mini-stars">${'★'.repeat(t.rating)}</div>
      <p class="t-mini-text">"${t.text}"</p>
      <div class="t-mini-meta">
        <div class="t-mini-avatar" style="background:${t.color}">${initials(t.name)}</div>
        <div>
          <div class="t-mini-name">${t.name}</div>
          <div class="t-mini-city">${t.city}</div>
        </div>
      </div>
    </div>
  `;

  // Linha 1: primeiros 4 + duplicados (loop sem costura)
  const set1 = items.slice(0, 4);
  row1.innerHTML = set1.concat(set1).map(cardHTML).join('');

  // Linha 2: últimos 4 + duplicados (sentido inverso)
  const set2 = items.slice(4);
  row2.innerHTML = set2.concat(set2).map(cardHTML).join('');
})();

// === Smooth wave shapes — substitui paths picotados por curvas senoidais suaves ===
(function(){
  // Curva suave (1 ciclo: pico cima + vale baixo) com pares de control points alinhados → sem cantos
  const FRONT = "M0,120 C180,80 540,80 720,120 C900,160 1260,160 1440,120 C1620,80 1980,80 2160,120 C2340,160 2700,160 2880,120 L2880,200 L0,200 Z";
  const BACK  = "M0,138 C200,100 520,100 720,138 C920,176 1240,176 1440,138 C1640,100 1960,100 2160,138 C2360,176 2680,176 2880,138 L2880,200 L0,200 Z";
  document.querySelectorAll('.wave-anim-front').forEach(p => p.setAttribute('d', FRONT));
  document.querySelectorAll('.wave-anim-back').forEach(p => p.setAttribute('d', BACK));
})();
