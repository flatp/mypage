console.log("ようこそ！");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');
  const cards2 = document.querySelectorAll('.scroll-container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  cards.forEach(card => {
    observer.observe(card);
  });
  cards2.forEach(card => {
    observer.observe(card);
  });
});

const containers = document.querySelectorAll('.scroll-container');
containers.forEach(container => {
  if (container.scrollWidth <= container.clientWidth) {
    container.style.justifyContent = 'center';
  } else {
    container.style.justifyContent = 'flex-start';
  }
});