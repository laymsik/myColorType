const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    const isClickInsideBurger = burger.contains(e.target);
    const isClickInsideNav = navLinks.contains(e.target);
    
    if (!isClickInsideBurger && !isClickInsideNav && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about-section');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        animateNumbers();
    }
});

// JavaScript для работы модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const btn = document.querySelector('.contact-trigger');
    const closeBtn = document.querySelector('.close-modal');
    
    // Открытие модального окна
    btn.addEventListener('click', function() {
        modal.classList.add('active');
    });
    
    // Закрытие по крестику
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    // Закрытие при клике вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Копирование контактов
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.getAttribute('data-clipboard-text');
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});
