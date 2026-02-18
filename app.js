// Navigation functions
function showScreen(screenNumber) {
    // Hide all screens
    document.querySelectorAll('.screen-wrapper').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(`screen${screenNumber}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Update navigation dots
    updateNavDots(screenNumber);
}

function updateNavDots(activeScreen) {
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        if (index === activeScreen - 1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize app
function initApp() {
    // Show first screen by default
    showScreen(1);
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyNavigation);
    
    // Add input focus animations
    addInputAnimations();
    
    // Create floating particles
    createParticles();
}

// Keyboard navigation handler
function handleKeyNavigation(e) {
    const currentScreen = document.querySelector('.screen-wrapper.active');
    if (!currentScreen) return;
    
    const screenNumber = parseInt(currentScreen.id.replace('screen', ''));
    
    if (e.key === 'ArrowRight' && screenNumber < 4) {
        showScreen(screenNumber + 1);
    } else if (e.key === 'ArrowLeft' && screenNumber > 1) {
        showScreen(screenNumber - 1);
    }
}

// Add input focus animations
function addInputAnimations() {
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

// Create floating particles
function createParticles() {
    const particleContainer = document.body;
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${(i * 20) + 10}%`;
        particle.style.animationDelay = `${i * 3}s`;
        particleContainer.appendChild(particle);
    }
}

// Form validation functions
function validateLogin() {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    
    if (!username || !password) {
        alert('Please enter both username and password');
        return false;
    }
    
    // In a real app, this would make an API call
    console.log('Login attempt:', { username, password: '***' });
    showScreen(2);
    return false;
}

function validateRegistration() {
    const firstName = document.getElementById('firstName')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    
    if (!firstName || !lastName || !email || !phone) {
        alert('Please fill in all fields');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // In a real app, this would make an API call
    console.log('Registration:', { firstName, lastName, email, phone });
    showScreen(3);
    return false;
}

function joinLeague() {
    const teamName = document.getElementById('teamname')?.value;
    const leagueCode = document.getElementById('leaguecode')?.value;
    
    if (!teamName || !leagueCode) {
        alert('Please enter both team name and league code');
        return false;
    }
    
    // In a real app, this would make an API call
    console.log('Joining league:', { teamName, leagueCode });
    alert('Successfully joined league!');
    return false;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
