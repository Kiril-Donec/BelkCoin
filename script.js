// Custom cursor
const cursor = document.querySelector('.squirrel-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// GSAP Animations
gsap.from('.hero-content', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.feature', {
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.features',
        start: 'top center'
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});

// Fun nut collection animation
let nutCount = 0;
const nutCounter = document.createElement('div');
nutCounter.style.position = 'fixed';
nutCounter.style.top = '20px';
nutCounter.style.right = '20px';
nutCounter.style.background = '#FF6B6B';
nutCounter.style.padding = '10px';
nutCounter.style.borderRadius = '50%';
nutCounter.style.color = 'white';
nutCounter.style.zIndex = '1000';
nutCounter.innerHTML = '🌰 0';
document.body.appendChild(nutCounter);

document.addEventListener('click', (e) => {
    const nut = document.createElement('div');
    nut.innerHTML = '🌰';
    nut.style.position = 'fixed';
    nut.style.left = e.clientX + 'px';
    nut.style.top = e.clientY + 'px';
    nut.style.fontSize = '2rem';
    document.body.appendChild(nut);

    gsap.to(nut, {
        duration: 1,
        y: -100,
        opacity: 0,
        onComplete: () => {
            nut.remove();
            nutCount++;
            nutCounter.innerHTML = `🌰 ${nutCount}`;
        }
    });
});

// Join button animation
const joinButton = document.querySelector('.join-button');
joinButton.addEventListener('mouseover', () => {
    gsap.to(joinButton, {
        duration: 0.3,
        scale: 1.1,
        ease: 'power2.out'
    });
});

joinButton.addEventListener('mouseout', () => {
    gsap.to(joinButton, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
    });
});

// Expanded squirrel facts
const squirrelFacts = [
    "Белки могут найти орехи даже под снегом!",
    "Белки помнят, где спрятали до 90% своих орехов",
    "Белкоин - самая пушистая криптовалюта!",
    "Белки могут падать с высоты 30 метров без вреда",
    "Белки используют свой хвост как парашют при прыжках",
    "Белки могут поворачивать свои задние лапы на 180 градусов",
    "Белкоин вдохновлен ловкостью и находчивостью белок",
    "Белки могут бежать со скоростью до 20 км/ч",
    "У белок есть свой собственный метод шифрования - они делают ложные тайники!",
    "Белки никогда не забывают пароль от своего кошелька Белкоин",
    "Белки могут прыгать на расстояние до 6 метров",
    "Белкоин использует алгоритм proof-of-nuts",
    "Белки общаются друг с другом с помощью сложной системы звуков",
    "Каждая транзакция Белкоин сопровождается виртуальным орешком",
    "Белки могут плавать, используя хвост как руль",
    "В сети Белкоин майнеры называются 'орехоискателями'",
    "Белки различают более 100 оттенков орехов",
    "Белкоин - единственная криптовалюта с функцией антигравитации",
    "Белки проводят 60% времени в поисках орехов, как майнеры Белкоина",
    "Хвост белки может быть длиннее её тела, как блокчейн Белкоина",
    "Белки делают запасы на зиму, а Белкоин - на будущее",
    "У белок есть специальные зубы для колки орехов, как у Белкоина для майнинга",
    "Белки могут крутиться в воздухе на 360 градусов, как логотип Белкоина",
    "Белкоин заряжается энергией от прыжков белок по деревьям",
    "Белки никогда не теряют свои орехи, как Белкоин свои транзакции"
];

const newsContainer = document.querySelector('.news-container');
setInterval(() => {
    const randomFact = squirrelFacts[Math.floor(Math.random() * squirrelFacts.length)];
    const factElement = document.createElement('div');
    factElement.className = 'news-item fade-in';
    factElement.innerHTML = `
        <div class="news-icon">🐿️</div>
        <h3>Интересный факт!</h3>
        <p>${randomFact}</p>
    `;
    
    if (newsContainer.children.length > 3) {
        newsContainer.removeChild(newsContainer.firstChild);
    }
    
    newsContainer.appendChild(factElement);
    observer.observe(factElement);
}, 5000);

// Random squirrel sounds with more variations
const squirrelSounds = [
    '*шух-шух*', '*пук-пук*', '*хрум-хрум*', '*фыр-фыр*',
    '*цок-цок*', '*шур-шур*', '*тык-тык*', '*пиф-паф*',
    '*вжух-вжух*', '*прыг-скок*', '*ням-ням*', '*чик-чик*'
];

function playRandomSquirrelSound() {
    const sound = document.createElement('div');
    sound.style.position = 'fixed';
    sound.style.left = Math.random() * window.innerWidth + 'px';
    sound.style.top = Math.random() * window.innerHeight + 'px';
    sound.style.color = '#FF6B6B';
    sound.style.fontSize = '20px';
    sound.style.pointerEvents = 'none';
    sound.style.zIndex = '9999';
    sound.textContent = squirrelSounds[Math.floor(Math.random() * squirrelSounds.length)];
    document.body.appendChild(sound);
    
    gsap.to(sound, {
        duration: 1,
        y: -50,
        opacity: 0,
        onComplete: () => sound.remove()
    });
}

document.addEventListener('click', () => {
    if(Math.random() > 0.7) {
        playRandomSquirrelSound();
    }
});

// Add floating nuts
function createFloatingNut() {
    const nut = document.createElement('div');
    nut.className = 'floating-nut';
    nut.textContent = '🌰';
    nut.style.left = Math.random() * window.innerWidth + 'px';
    nut.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(nut);
    
    setTimeout(() => {
        nut.remove();
    }, 6000);
}

setInterval(createFloatingNut, 2000);

// Add cursor click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
});

// Add squirrel trail effect
function createTrail(e) {
    const trail = document.createElement('div');
    trail.className = 'squirrel-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trail.remove();
        }, 300);
    }, 100);
}

document.addEventListener('mousemove', createTrail);

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.scrollY / windowHeight;
    scrollProgress.style.transform = `scaleX(${progress})`;
});

// Add nut rain effect on join button click
joinButton.addEventListener('click', createNutRain);

function createNutRain() {
    const rainContainer = document.createElement('div');
    rainContainer.className = 'nut-rain';
    document.body.appendChild(rainContainer);
    
    for(let i = 0; i < 20; i++) {
        const nut = document.createElement('div');
        nut.textContent = '🌰';
        nut.style.position = 'absolute';
        nut.style.left = Math.random() * 100 + 'vw';
        nut.style.fontSize = (Math.random() * 20 + 20) + 'px';
        nut.style.animation = `rainNuts ${Math.random() * 2 + 1}s linear`;
        rainContainer.appendChild(nut);
    }
    
    setTimeout(() => {
        rainContainer.remove();
    }, 3000);
}

// Add parallax effect to hero section
const heroContent = document.querySelector('.hero-content');
window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
