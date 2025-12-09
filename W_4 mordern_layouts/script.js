// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let msg = document.querySelector(".form-msg");

  if (!name.value || !email.value || !message.value) {
    msg.innerText = "Please fill all fields!";
    msg.style.color = "red";
  } else {
    msg.innerText = "Message sent successfully!";
    msg.style.color = "green";
    name.value = email.value = message.value = "";
  }
});
