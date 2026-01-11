const menu = document.getElementById('nav-ul');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('#nav-ul a');
const header = document.querySelector('header');

// Sticky Header Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Logic
function toggleMenu() {
    const isActive = menu.classList.contains('active');

    if (isActive) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    menu.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    document.documentElement.style.overflow = 'hidden'; // Prevent scrolling on html element too
}

function closeMenu() {
    menu.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
    document.documentElement.style.overflow = ''; // Restore scrolling
}

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});
