const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutBtn = document.getElementById('logoutBtn');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    if (!email || !password) {
      message.textContent = 'Por favor completa todos los campos.';
      return;
    }

    message.textContent = 'Formulario de inicio listo. Siguiente paso: conectarlo con JWT.';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const role = document.getElementById('registerRole').value;
    const message = document.getElementById('registerMessage');

    if (!name || !email || !password || !role) {
      message.textContent = 'Por favor completa todos los campos.';
      return;
    }

    message.textContent = 'Formulario de registro listo. Siguiente paso: conectarlo con el backend.';
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}