        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Counter animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps

            function updateCount() {
                const current = parseInt(counter.innerText);
                if (current < target) {
                    counter.innerText = Math.ceil(current + step);
                    setTimeout(updateCount, 16);
                } else {
                    counter.innerText = target;
                }
            }

            // Start counter when element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        });