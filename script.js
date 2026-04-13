/**
 * Portfolio JavaScript
 * Handles mobile menu, smooth scrolling, scroll animations and form validation.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================================
       1. STICKY NAVBAR EFFECT
       ========================================================================= */
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* =========================================================================
       2. MOBILE MENU TOGGLE
       ========================================================================= */
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.getElementById('primary-navigation');
    const navItems = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    };

    mobileToggle.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* =========================================================================
       3. FADE-IN ANIMATIONS ON SCROLL
       ========================================================================= */
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));

    /* =========================================================================
       4. FORM VALIDATION (Polish)
       ========================================================================= */
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            form.querySelectorAll('.form-group-modern').forEach(group => {
                group.classList.remove('has-error');
            });
            formStatus.textContent = '';
            formStatus.className = 'form-status';

            const nameInput = document.getElementById('name');
            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            const emailInput = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            const msgInput = document.getElementById('message');
            if (!msgInput.value.trim()) {
                msgInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (isValid) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Wysyłanie...';
                submitBtn.disabled = true;

                const formData = new FormData(form);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let result = await response.json();
                    if (response.status == 200) {
                        formStatus.textContent = 'Wiadomość została wysłana! Odezwię się wkrótce.';
                        formStatus.classList.add('success');
                        form.reset();
                    } else {
                        console.log(response);
                        formStatus.textContent = result.message || 'Wystąpił błąd. Spróbuj ponownie.';
                        formStatus.classList.add('error');
                    }
                })
                .catch(error => {
                    console.error(error);
                    formStatus.textContent = 'Błąd połączenia. Sprawdź internet.';
                    formStatus.classList.add('error');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = 'form-status';
                    }, 5000);
                });
            }
        });

        form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                input.parentElement.classList.remove('has-error');
            });
        });
    }

    /* =========================================================================
       5. SET CURRENT YEAR IN FOOTER
       ========================================================================= */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
