


// Obtener referencias a los elementos del formulario
const form = document.getElementById('register-form');
const usernameInput = document.getElementById('username');
const nameInput = document.getElementById('name');
const fechaNacimientoInput = document.getElementById('fecha_nacimiento');
const telefonoInput = document.getElementById('telefono');
const direccionInput = document.getElementById('direccion');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const mensaje = document.getElementById('mensaje');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

const demoAccounts = [
    { email: 'cliente@usocloud.demo', password: 'Cliente123!', username: 'Cliente', role: 'cliente' },
    { email: 'soporte@usocloud.demo', password: 'Soporte123!', username: 'Soporte', role: 'soporte' },
    { email: 'admin@usocloud.demo', password: 'Admin123!', username: 'Admin', role: 'admin' }
];
const originalCarouselImages = [
    'img/carousel1.jpg',
    'img/carousel2.jpg',
    'img/carousel3.jpg'
];

function getRegisteredAccounts() {
    return JSON.parse(localStorage.getItem('usoCloudAccounts') || '[]');
}

// Mostrar el usuario registrado y su menú en la navegación de todas las páginas.
function renderUserNavigation() {
    const storedUsername = localStorage.getItem('usoCloudUsername');
    const storedRole = localStorage.getItem('usoCloudRole') || 'cliente';

    document.querySelectorAll('.nav-login').forEach((loginLink) => {
        if (!storedUsername) {
            return;
        }

        const container = loginLink.parentElement;
        if (container.querySelector('.user-dropdown')) {
            return;
        }
        container.classList.add('user-menu');
        loginLink.href = '#';
        loginLink.setAttribute('aria-haspopup', 'true');
        loginLink.setAttribute('aria-expanded', 'false');
        loginLink.innerHTML = '<i class="bi bi-person-circle"></i> <span class="user-name"></span> <span class="user-role"></span> <i class="bi bi-chevron-down user-menu-arrow"></i>';
        loginLink.querySelector('.user-name').textContent = storedUsername;
        loginLink.querySelector('.user-role').textContent = `(${storedRole})`;

        const menu = document.createElement('div');
        menu.className = 'user-dropdown';
        menu.innerHTML = `
            <a href="#" class="user-dropdown-link"><i class="bi bi-person"></i> Mi perfil</a>
            <a href="#" class="user-dropdown-link"><i class="bi bi-ticket-detailed"></i> <span class="tickets-label">Tickets</span></a>
            <a href="#" class="user-dropdown-link"><i class="bi bi-grid"></i> <span class="control-panel-label">Panel Cloud</span></a>
            <button type="button" class="logout-button"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</button>
        `;
        if (storedRole === 'soporte') {
            menu.querySelector('.tickets-label').textContent = 'Panel de tickets';
            menu.querySelector('.control-panel-label').textContent = 'Panel de control';
        } else if (storedRole === 'admin') {
            menu.querySelector('.tickets-label').textContent = 'Panel de tickets';
            menu.querySelector('.control-panel-label').textContent = 'Panel de control';
        }
        container.appendChild(menu);

        loginLink.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = menu.classList.toggle('show');
            loginLink.setAttribute('aria-expanded', String(isOpen));
        });

        menu.querySelector('.logout-button').addEventListener('click', () => {
            localStorage.removeItem('usoCloudUsername');
            localStorage.removeItem('usoCloudRole');
            window.location.href = 'login.html';
        });
    });
}

renderUserNavigation();

// Funciones para manejar las imágenes del carrusel
function getCarouselImages() {
    return JSON.parse(localStorage.getItem('usoCloudCarouselImages') || 'null') || originalCarouselImages;
}

function renderCarouselImages() {
    const carouselImages = getCarouselImages();
    document.querySelectorAll('#carouselExampleInterval .carousel-item img').forEach((image, index) => {
        if (carouselImages[index]) {
            image.src = carouselImages[index];
        }
    });
}

function initializeCarouselEditor() {
    const editor = document.getElementById('carousel-editor');
    const storedRole = localStorage.getItem('usoCloudRole');
    if (!editor || storedRole !== 'admin') {
        return;
    }

    editor.classList.remove('d-none');
    document.querySelectorAll('.carousel-image-input').forEach((input) => {
        input.addEventListener('change', () => {
            const file = input.files[0];
            const slide = Number(input.dataset.slide);
            if (!file || !file.type.startsWith('image/')) {
                return;
            }

            const reader = new FileReader();
            reader.addEventListener('load', () => {
                const carouselImages = getCarouselImages();
                carouselImages[slide] = reader.result;
                localStorage.setItem('usoCloudCarouselImages', JSON.stringify(carouselImages));
                renderCarouselImages();
            });
            reader.readAsDataURL(file);
        });
    });

    document.getElementById('reset-carousel-images').addEventListener('click', () => {
        localStorage.removeItem('usoCloudCarouselImages');
        renderCarouselImages();
    });
}

renderCarouselImages();
initializeCarouselEditor();

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const identifier = loginForm.querySelector('#username').value.trim().toLowerCase();
        const password = loginForm.querySelector('#password').value;
        const account = [...demoAccounts, ...getRegisteredAccounts()].find((availableAccount) =>
            (availableAccount.email?.toLowerCase() === identifier ||
                availableAccount.username.toLowerCase() === identifier) &&
            availableAccount.password === password
        );

        loginMessage.className = 'alert mt-3 ' + (account ? 'alert-success' : 'alert-danger');
        if (!account) {
            loginMessage.textContent = 'Usuario o contraseña incorrectos.';
            return;
        }

        localStorage.setItem('usoCloudUsername', account.username);
        localStorage.setItem('usoCloudRole', account.role);
        loginMessage.textContent = `Bienvenido, ${account.username}.`;
        window.setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    });
}

// Validar el formulario de registro
if (!form) {
    console.log('Formulario de registro no encontrado en esta página.');
} else {
    // funcion validar correo
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // validar contraseña
    function validatePassword(password) {
        return password.length >= 6 &&
            password.length <= 18 &&
            /[0-9]/.test(password) &&
            /[A-Z]/.test(password);
    }

    function validateAdultDate(dateValue) {
        if (!dateValue) {
            return false;
        }

        const [year, month, day] = dateValue.split('-').map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const eighteenthBirthday = new Date(year + 18, month - 1, day);

        return birthDate.getFullYear() === year &&
            birthDate.getMonth() === month - 1 &&
            birthDate.getDate() === day &&
            eighteenthBirthday <= today;
    }

// validar el formulario al enviar
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = usernameInput.value.trim();
    const name = nameInput.value.trim();
    const fechaNacimiento = fechaNacimientoInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const telefonoSinEspacios = telefono.replace(/\s+/g, '');
    const direccion = direccionInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Validar los campos del formulario
    const isUsernameValid = username.length >= 3 && !username.includes(' ');
    const isNameValid = name.length > 5;
    const isFechaNacimientoValid = validateAdultDate(fechaNacimiento);
    const isTelefonoValid = /^(?:\+56)?9\d{8}$/.test(telefonoSinEspacios);
    const isDireccionValid = true;
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = confirmPassword === password;

    // Mostrar mensajes de error si algún campo no es válido

    usernameInput.classList.toggle('is-valid', isUsernameValid);
    usernameInput.classList.toggle('is-invalid', !isUsernameValid);
    usernameInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isUsernameValid ? '' : 'Escribe un nombre de usuario válido, sin espacios y con al menos 3 caracteres.';

    nameInput.classList.toggle('is-valid', isNameValid);
    nameInput.classList.toggle('is-invalid', !isNameValid);
    nameInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isNameValid ? '' : 'Escribe un nombre completo válido con más de 5 caracteres.';

    fechaNacimientoInput.classList.toggle('is-valid', isFechaNacimientoValid);
    fechaNacimientoInput.classList.toggle('is-invalid', !isFechaNacimientoValid);
    fechaNacimientoInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isFechaNacimientoValid ? '' : 'Debes tener al menos 18 años y escribir una fecha válida.';

    telefonoInput.classList.toggle('is-valid', isTelefonoValid);
    telefonoInput.classList.toggle('is-invalid', !isTelefonoValid);
    telefonoInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isTelefonoValid ? '' : 'Escribe un celular chileno válido: 9 dígitos comenzando en 9 (ejemplo: +56 9 1234 5678).';

    direccionInput.classList.remove('is-valid', 'is-invalid');

    emailInput.classList.toggle('is-valid', isEmailValid);
    emailInput.classList.toggle('is-invalid', !isEmailValid);
    emailInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isEmailValid ? '' : 'Escribe un correo electrónico válido.';

    passwordInput.classList.toggle('is-valid', isPasswordValid);
    passwordInput.classList.toggle('is-invalid', !isPasswordValid);
    passwordInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isPasswordValid ? '' : 'Usa entre 6 y 18 caracteres, incluyendo al menos un número y una letra mayúscula.';

    confirmPasswordInput.classList.toggle('is-valid', isConfirmPasswordValid);
    confirmPasswordInput.classList.toggle('is-invalid', !isConfirmPasswordValid);
    confirmPasswordInput.closest('.mb-3').querySelector('.invalid-feedback').textContent = isConfirmPasswordValid ? '' : 'Las contraseñas no coinciden.';

    // Si todos los campos son válidos, enviar el formulario

    const isFormValid = isUsernameValid && isNameValid && isFechaNacimientoValid &&
        isTelefonoValid && isDireccionValid && isEmailValid &&
        isPasswordValid && isConfirmPasswordValid;
    mensaje.className = "alert mt-4 " + (isFormValid ? 'alert-success' : 'alert-danger');
    if (isFormValid) {
        const registeredAccounts = getRegisteredAccounts();
        const accountExists = registeredAccounts.some((account) =>
            account.username.toLowerCase() === username.toLowerCase() ||
            account.email.toLowerCase() === email.toLowerCase()
        );

        if (accountExists) {
            mensaje.className = 'alert alert-danger mt-4';
            mensaje.textContent = 'Ese nombre de usuario o correo ya está registrado.';
            return;
        }

        registeredAccounts.push({
            username,
            email,
            password,
            role: 'cliente'
        });
        localStorage.setItem('usoCloudAccounts', JSON.stringify(registeredAccounts));
        localStorage.setItem('usoCloudUsername', username);
        localStorage.setItem('usoCloudRole', 'cliente');
        renderUserNavigation();
        mensaje.textContent = 'Formulario enviado correctamente.' + " " + '¡Bienvenido, ' + username + '!';
    } else {
        mensaje.textContent = "Por favor, corrige los errores en el formulario antes de enviarlo.";
    }
    console.log("Validación del formulario completada.");
});


// al limpiar el formulario, marcas y mensajes
form.addEventListener('reset', function () {
    usernameInput.classList.remove('is-valid', 'is-invalid');
    nameInput.classList.remove('is-valid', 'is-invalid');
    fechaNacimientoInput.classList.remove('is-valid', 'is-invalid');
    telefonoInput.classList.remove('is-valid', 'is-invalid');
    direccionInput.classList.remove('is-valid', 'is-invalid');
    emailInput.classList.remove('is-valid', 'is-invalid');
    passwordInput.classList.remove('is-valid', 'is-invalid');
    confirmPasswordInput.classList.remove('is-valid', 'is-invalid');
    mensaje.textContent = '';
    mensaje.className = 'd-none mt-4';
});
}
