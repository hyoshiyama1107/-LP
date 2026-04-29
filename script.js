const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("open");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherAnswer.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
