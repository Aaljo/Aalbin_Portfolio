// Function to handle contact form submission
function sendMessage(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button');
  btn.textContent = '✓ Sent!';
  btn.style.background = '#10b981';
  setTimeout(() => {
    event.target.reset();
    btn.textContent = 'Send Message';
    btn.style.background = '';
  }, 2000);
}

// Function to toggle dark/light mode
function toggleMode() {
  const body = document.body;
  const btn = document.getElementById("modeToggle");
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  btn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});// Function to handle contact form submission
function sendMessage(event) {
  event.preventDefault();
  alert("Thank you for your message!");
  event.target.reset(); // Clear form after submission
}

// Function to toggle dark/light mode
function toggleMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("modeToggle");
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  toggleBtn.setAttribute("aria-pressed", isDark);
}
