const toggleBtn = document.getElementById('toggle-btn');
const isDark = localStorage.getItem('darkMode') === 'true';

if (isDark) {
  document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});