  const sections = document.querySelectorAll('section');
  const fades = document.querySelectorAll('.fade');
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Optional: fade in only once
      }
    });
  }, {
    threshold: 0.1  // Adjust sensitivity (0 to 1)
  });

  sections.forEach(section => {
    observer.observe(section);
  });

      cards.forEach(section => {
    observer.observe(section);
  });

    fades.forEach(section => {
    observer.observe(section);
  });