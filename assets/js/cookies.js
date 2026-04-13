/**
 * Cookie Consent Logic
 * Handles the visibility of the cookie banner and integration with Google Analytics Consent Mode.
 */

window.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    const COOKIE_CONSENT_KEY = 'cookie_consent_status';

    // 1. Check if consent already exists
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consentStatus) {
        // Show banner with a slight delay for better UX
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    } else if (consentStatus === 'granted') {
        // If already granted, ensure GA knows (though default should be handled in HTML)
        updateGtagConsent(true);
    }

    // 2. Handle Accept
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(COOKIE_CONSENT_KEY, 'granted');
            updateGtagConsent(true);
            hideBanner();
        });
    }

    // 3. Handle Decline
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
            updateGtagConsent(false);
            hideBanner();
        });
    }

    function hideBanner() {
        cookieBanner.classList.remove('show');
        // Remove from DOM after transition
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500);
    }

    function updateGtagConsent(isGranted) {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': isGranted ? 'granted' : 'denied',
                'ad_storage': isGranted ? 'granted' : 'denied'
            });
            console.log(`Google Analytics consent updated: ${isGranted ? 'granted' : 'denied'}`);
        }
    }
});
