// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animasi muncul saat di-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Hitung angka statistik
document.querySelectorAll('[data-count]').forEach((el) => {
  const target = +el.dataset.count;
  let n = 0;
  const step = () => {
    n += 1;
    el.textContent = n + '+';
    if (n < target) setTimeout(step, 220);
  };
  setTimeout(step, 500);
});

// Pengaman: jika ada yang belum muncul setelah 2,5 detik, tampilkan semua
setTimeout(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show')), 2500);

// Pembesar foto (lightbox) untuk galeri
const lb = document.getElementById('lightbox');
if (lb) {
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('figcaption');
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; };
  document.querySelectorAll('.shot').forEach((b) => b.addEventListener('click', () => {
    lbImg.src = b.dataset.full;
    lbImg.alt = b.querySelector('img').alt;
    lbCap.textContent = b.dataset.cap;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.lb-close')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// Menu hamburger (HP)
const navEl = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
if (navEl && menuBtn) {
  const setMenu = (open) => {
    navEl.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  };
  menuBtn.addEventListener('click', () => setMenu(!navEl.classList.contains('open')));
  navEl.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (e) => { if (!navEl.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
}
