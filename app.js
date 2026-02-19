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

const DESKTOP_DEMO_ACTIVITY = [
    { time: '7:03 PM', event: 'Queensbridge Crushers accepted injury replacement request for M. Stafford.' },
    { time: '6:58 PM', event: 'The Blitz signed WR Jaylen Harper from free agency.' },
    { time: '6:54 PM', event: 'Trade vote opened: Rockets receive R. White + 6th rounder.' },
    { time: '6:40 PM', event: 'Commissioner pinned "Week 11 rivalry challenge" announcement.' },
    { time: '6:32 PM', event: 'Waiver claim processed: Southside Saints added Darnell Knox.' },
    { time: '6:21 PM', event: 'Analytics bot flagged 3 lineups with inactive starters.' },
    { time: '6:04 PM', event: 'Live draft room simulation published for rookie mini-camp.' },
    { time: '5:57 PM', event: 'Pick\'em challenge updated confidence multiplier for MNF.' }
];

const DESKTOP_MOMENTUM = [
    { team: 'Rockets', value: 96 },
    { team: 'Southside', value: 88 },
    { team: 'Blue Ox', value: 85 },
    { team: 'Crushers', value: 81 },
    { team: 'Night Owls', value: 74 },
    { team: 'Riverdogs', value: 68 }
];

const DESKTOP_WAIVERS = [
    { priority: 1, team: 'Night Owls', need: 'RB depth', targets: 'K. Walton, A. Pierce', budget: '$31 / $100' },
    { priority: 2, team: 'Blue Ox Brigade', need: 'TE stream', targets: 'M. Everett, C. Dulane', budget: '$18 / $100' },
    { priority: 3, team: 'Southside Saints', need: 'QB backup', targets: 'D. Lockridge', budget: '$22 / $100' },
    { priority: 4, team: 'Queensbridge', need: 'Defense', targets: 'Denver, Minnesota', budget: '$11 / $100' },
    { priority: 5, team: 'Downtown Rockets', need: 'Kicker', targets: 'M. Lutz, T. Bass', budget: '$6 / $100' }
];

const DESKTOP_TASKS = [
    { title: 'Approve off-cycle trade for Rockets ↔ Riverdogs', subtitle: 'Voting window closes in 2h 11m', state: 'urgent' },
    { title: 'Resolve lineup lock dispute for Thursday game', subtitle: '2 managers requesting exception', state: 'review' },
    { title: 'Schedule keeper deadline reminder automation', subtitle: 'Draft room opens next Tuesday', state: 'pending' },
    { title: 'Publish Week 12 bar watch-party seating map', subtitle: 'Requires final RSVP totals', state: 'pending' }
];

const DESKTOP_STORIES = [
    {
        ribbon: 'Power Shift',
        title: 'Can Southside sustain elite efficiency with two rookie starters?',
        body: 'The Saints have posted top-three red-zone conversion in four straight weeks. Their new WR duo is averaging 15.4 YAC per catch over that span.'
    },
    {
        ribbon: 'Trade Watch',
        title: 'Rockets eye one more blockbuster before the deadline closes.',
        body: 'Front office chatter suggests they are targeting a premium tight end to stabilize floor outcomes in playoff weeks.'
    },
    {
        ribbon: 'Film Room',
        title: 'Blitz defensive stack quietly creating matchup chaos in prime time.',
        body: 'Their DST + LB pairing has generated 43 pressure events in two games, forcing turnover-heavy scripts league-wide.'
    },
    {
        ribbon: 'Sleeper Radar',
        title: 'Three low-roster-rate players with expanding route participation.',
        body: 'Analytics flagged snap growth above 18% week-over-week with positive target quality metrics for each candidate.'
    }
];

const DESKTOP_METRICS = [
    { label: 'Avg Margin', value: '+12.8', context: 'Rockets over last 5 games' },
    { label: 'Injury Risk', value: '24%', context: 'League weighted estimate' },
    { label: 'Bench Points', value: '71.4', context: 'Median points left unstarted' },
    { label: 'Waiver Success', value: '62%', context: 'Claims producing starter value' },
    { label: 'Trade Velocity', value: '9', context: 'Accepted trades this month' },
    { label: 'Upset Rate', value: '38%', context: 'Lower seed wins in Week 10' },
    { label: 'Tight Games', value: '4', context: 'Decided by < 5 points' },
    { label: 'Avg Team Total', value: '118.3', context: 'Points per matchup side' },
    { label: 'Keeper Hits', value: '79%', context: 'Keepers beating ADP cost' },
    { label: 'Scouting Notes', value: '128', context: 'Submitted by managers' }
];

function renderDesktopDemo() {
    if (document.body.dataset.page !== 'desktop-demo') {
        return;
    }

    const heroScoreboard = document.getElementById('heroScoreboard');
    if (heroScoreboard) {
        heroScoreboard.innerHTML = `
            <section class="hero-team" aria-label="Home team score">
                <p class="hero-team-name">Downtown Rockets</p>
                <p class="hero-team-score">132</p>
                <p class="hero-team-projection">Projected: 128.6</p>
            </section>
            <p class="hero-versus">VS</p>
            <section class="hero-team" aria-label="Away team score">
                <p class="hero-team-name">Queensbridge Crushers</p>
                <p class="hero-team-score">125</p>
                <p class="hero-team-projection">Projected: 121.2</p>
            </section>
        `;
    }

    const activityTicker = document.getElementById('activityTicker');
    if (activityTicker) {
        activityTicker.innerHTML = DESKTOP_DEMO_ACTIVITY
            .map((item) => `<li><p class="sidebar-activity-time">${item.time}</p><p>${item.event}</p></li>`)
            .join('');
    }

    const momentumChart = document.getElementById('momentumChart');
    if (momentumChart) {
        momentumChart.innerHTML = DESKTOP_MOMENTUM
            .map((item) => {
                const clampedValue = Math.max(0, Math.min(item.value, 100));
                return `
                    <div class="desktop-bar-row">
                        <p class="desktop-bar-label">${item.team}</p>
                        <div class="desktop-bar-track"><span class="desktop-bar-fill" style="width:${clampedValue}%"></span></div>
                        <p class="desktop-bar-value">${clampedValue}</p>
                    </div>
                `;
            })
            .join('');
    }

    const waiverTable = document.querySelector('#waiverTable tbody');
    if (waiverTable) {
        waiverTable.innerHTML = DESKTOP_WAIVERS
            .map((row) => `
                <tr>
                    <td>#${row.priority}</td>
                    <td>${row.team}</td>
                    <td>${row.need}</td>
                    <td>${row.targets}</td>
                    <td>${row.budget}</td>
                </tr>
            `)
            .join('');
    }

    const commissionerQueue = document.getElementById('commissionerQueue');
    if (commissionerQueue) {
        commissionerQueue.innerHTML = DESKTOP_TASKS
            .map((task) => `
                <li>
                    <div>
                        <p class="task-title">${task.title}</p>
                        <p class="task-subtitle">${task.subtitle}</p>
                    </div>
                    <span class="task-tag ${task.state}">${task.state}</span>
                </li>
            `)
            .join('');
    }

    const storyGrid = document.getElementById('storyGrid');
    if (storyGrid) {
        storyGrid.innerHTML = DESKTOP_STORIES
            .map((story) => `
                <article class="story-card">
                    <span class="story-ribbon">${story.ribbon}</span>
                    <h4>${story.title}</h4>
                    <p>${story.body}</p>
                </article>
            `)
            .join('');
    }

    const metricsGrid = document.getElementById('metricsGrid');
    if (metricsGrid) {
        metricsGrid.innerHTML = DESKTOP_METRICS
            .map((metric) => `
                <article class="metric-tile">
                    <p class="metric-label">${metric.label}</p>
                    <p class="metric-value">${metric.value}</p>
                    <p class="metric-context">${metric.context}</p>
                </article>
            `)
            .join('');
    }

    wireDesktopInteractions();
}

function wireDesktopInteractions() {
    const navButtons = document.querySelectorAll('.desktop-nav-item');
    const viewTitle = document.getElementById('desktopViewTitle');

    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            navButtons.forEach((item) => item.classList.remove('is-active'));
            button.classList.add('is-active');

            if (!viewTitle) {
                return;
            }

            viewTitle.textContent = button.textContent || 'Overview';
        });
    });

    const desktopSearchInput = document.getElementById('desktopSearchInput');
    if (!desktopSearchInput) {
        return;
    }

    desktopSearchInput.addEventListener('input', () => {
        const filter = desktopSearchInput.value.toLowerCase();
        const stories = document.querySelectorAll('.story-card');

        stories.forEach((storyCard) => {
            const text = storyCard.textContent?.toLowerCase() || '';
            storyCard.style.display = text.includes(filter) ? '' : 'none';
        });
    });
}

const priorInitApp = initApp;

initApp = function initAppWithDesktopDemo() {
    priorInitApp();
    renderDesktopDemo();
};
