document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle (Optional but helpful)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 6, 23, 0.95)';
        } else {
            header.style.background = 'transparent';
        }
    });

    // 2. Numbers Animation
    const stats = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseFloat(target.getAttribute('data-count'));
                let current = 0;
                const duration = 2000;
                const stepTime = 20;
                const increment = countTo / (duration / stepTime);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= countTo) {
                        target.innerText = countTo;
                        clearInterval(timer);
                    } else {
                        target.innerText = countTo % 1 === 0 ? Math.floor(current) : current.toFixed(1);
                    }
                }, stepTime);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(s => observer.observe(s));
});