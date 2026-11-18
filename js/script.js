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
