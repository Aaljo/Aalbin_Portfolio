
function sendMessage(event) {
  event.preventDefault();
  alert("Thank you for your message!");
}

function toggleMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("modeToggle");
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
}
