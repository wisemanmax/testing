const APP_ROUTES = Object.freeze({
    login: 'index.html',
    register: 'register.html',
    joinLeague: 'join-league.html',
    leagueCode: 'league-code.html',
    dashboard: 'dashboard.html'
});

function sanitizeInput(value) {
    return String(value ?? '').trim();
}

function showScreen(screenNumber) {
    const screens = document.querySelectorAll('.screen-wrapper');
    if (!screens.length) {
        return;
    }

    const targetScreen = document.getElementById(`screen${screenNumber}`);
    if (!targetScreen) {
        return;
    }

    screens.forEach((screen) => {
        screen.classList.remove('active');
    });

    targetScreen.classList.add('active');
    updateNavDots(screenNumber);
}

function updateNavDots(activeScreen) {
    const navDots = document.querySelectorAll('.nav-dot');
    if (!navDots.length) {
        return;
    }

    navDots.forEach((dot, index) => {
        const isActive = index === activeScreen - 1;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
}

function handleKeyNavigation(event) {
    const currentScreen = document.querySelector('.screen-wrapper.active[id^="screen"]');
    if (!currentScreen) {
        return;
    }

    const screenNumber = Number.parseInt(currentScreen.id.replace('screen', ''), 10);
    if (Number.isNaN(screenNumber)) {
        return;
    }

    const maxScreens = document.querySelectorAll('.screen-wrapper[id^="screen"]').length;

    if (event.key === 'ArrowRight' && screenNumber < maxScreens) {
        showScreen(screenNumber + 1);
    }

    if (event.key === 'ArrowLeft' && screenNumber > 1) {
        showScreen(screenNumber - 1);
    }
}

function addInputAnimations() {
    document.querySelectorAll('.form-group input, .input-wrapper input').forEach((input) => {
        const wrapper = input.closest('.form-group, .input-wrapper');
        if (!wrapper) {
            return;
        }

        input.addEventListener('focus', () => {
            wrapper.classList.add('is-focused');
        });

        input.addEventListener('blur', () => {
            wrapper.classList.remove('is-focused');
        });
    });
}

function createParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    if (document.querySelectorAll('.particle').length || document.querySelector('.screen[data-disable-particles="true"]')) {
        return;
    }

    const particleCount = window.innerWidth < 600 ? 3 : 5;
    for (let i = 0; i < particleCount; i += 1) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${(i * (100 / particleCount)) + 10}%`;
        particle.style.animationDelay = `${i * 3}s`;
        document.body.appendChild(particle);
    }
}

function navigateTo(route) {
    const targetRoute = APP_ROUTES[route];
    if (targetRoute) {
        window.location.assign(targetRoute);
    }
}

function validateLogin() {
    const username = sanitizeInput(document.getElementById('username')?.value);
    const password = sanitizeInput(document.getElementById('password')?.value);

    if (!username || !password) {
        window.alert('Please enter both username and password.');
        return false;
    }

    navigateTo('dashboard');
    return false;
}

function validateRegistration() {
    const firstName = sanitizeInput(document.getElementById('firstName')?.value);
    const lastName = sanitizeInput(document.getElementById('lastName')?.value);
    const email = sanitizeInput(document.getElementById('email')?.value);
    const phone = sanitizeInput(document.getElementById('phone')?.value);

    if (!firstName || !lastName || !email || !phone) {
        window.alert('Please fill in all fields.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        window.alert('Please enter a valid email address.');
        return false;
    }

    navigateTo('joinLeague');
    return false;
}

function joinLeague() {
    const teamName = sanitizeInput(document.getElementById('teamname')?.value);
    const leagueCode = sanitizeInput(document.getElementById('leaguecode')?.value);

    if (!teamName || !leagueCode) {
        window.alert('Please enter both team name and league code.');
        return false;
    }

    navigateTo('dashboard');
    return false;
}

function initApp() {
    const firstScreen = document.querySelector('.screen-wrapper[id^="screen"]');
    if (firstScreen) {
        const firstScreenNumber = Number.parseInt(firstScreen.id.replace('screen', ''), 10);
        if (!Number.isNaN(firstScreenNumber)) {
            showScreen(firstScreenNumber);
        }
        document.addEventListener('keydown', handleKeyNavigation);
    }

    addInputAnimations();
    createParticles();
}

document.addEventListener('DOMContentLoaded', initApp);
