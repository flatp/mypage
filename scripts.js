console.log("ようこそ！");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});