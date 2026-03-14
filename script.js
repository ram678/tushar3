// 🌙 Dark/Light Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
  });
}

// ⌨️ Typewriter Effect for Hero Section
const typewriterText = ["Grade 8 Student", "Tech Explorer", "Website Creator"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeWriter() {
  currentText = typewriterText[i];
  document.getElementById("typewriter").textContent = currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(typeWriter, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeWriter, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % typewriterText.length;
    setTimeout(typeWriter, 1000);
  }
}
typeWriter();

// 📱 WhatsApp Contact Form Integration
function sendWhatsAppMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const phone = "6901140466"; // Your WhatsApp number
  const url = `https://wa.me/${phone}?text=Hello, my name is ${name}. ${message}`;
  window.open(url, "_blank");
}
