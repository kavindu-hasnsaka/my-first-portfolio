// Handle Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMessage.textContent = "✅ Thanks for your message! I will get back to you soon.";
      formMessage.classList.remove("hidden");
      form.reset();
    });
  }
});
