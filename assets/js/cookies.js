document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    // Check if user already gave consent
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) {
        // Show banner after a short delay for better UX
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    } else if (consent === 'accepted') {
        enableGoogleAnalytics();
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        cookieBanner.classList.remove('show');
        enableGoogleAnalytics();

        // Push consent update to gtag
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'declined');
        cookieBanner.classList.remove('show');

        // Ensure consent is denied in gtag
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    });
});

function enableGoogleAnalytics() {
    console.log('Google Analytics enabled.');
    // The actual GA script is already loaded in index.html, 
    // but with analytics_storage: 'denied' by default.
    // The 'update' call in the event listener handles the activation.
}
