// ========== SMOOTH SCROLLING FOR NAVIGATION LINKS ==========
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== ACTIVE NAVIGATION HIGHLIGHT ON SCROLL ==========
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== ANIMATE SKILL BARS WHEN IN VIEW ==========
const skillSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

const animateSkills = () => {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillSection) {
    observer.observe(skillSection);
}

// ========== CONTACT FORM HANDLING (Basic) ==========
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// ========== ADD ACTIVE CLASS STYLE ==========
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        color: #007bff;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// ========== UPDATE COPYRIGHT YEAR AUTOMATICALLY ==========
const footer = document.querySelector('footer');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `<p>&copy; ${year} Lebogang Boshielo. All rights reserved.</p>`;
}