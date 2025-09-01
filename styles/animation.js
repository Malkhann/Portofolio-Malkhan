
document.addEventListener("DOMContentLoaded", () => {
  // --- Animasi masuk (IntersectionObserver, lebih hemat performa) ---
  const animatedItems = document.querySelectorAll(".animated-item");

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // animasi sekali saja
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedItems.forEach((el) => io.observe(el));

  // --- Animasi klik pada card (bounce/scale) ---
  const cards = document.querySelectorAll(".service-cards-container .card");
  cards.forEach((card) => {
    card.style.transition = "transform 0.2s ease"; // jaga-jaga kalau belum ada
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 150);
    });
  });
});
