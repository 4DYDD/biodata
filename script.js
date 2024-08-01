document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn-visible");
      } else {
        entry.target.classList.remove("animate-fadeIn-visible");
      }
    });
  });

  const elements = document.querySelectorAll(".animate-fadeIn");
  elements.forEach((element) => {
    observer.observe(element);
  });
});
