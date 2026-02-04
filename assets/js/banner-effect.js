document.addEventListener('DOMContentLoaded', () => {
    const topSection = document.querySelector('.top-section');

    if (topSection) {
        topSection.addEventListener('mousemove', (e) => {
            const rect = topSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            topSection.style.setProperty('--mouse-x', `${x}px`);
            topSection.style.setProperty('--mouse-y', `${y}px`);
        });
    }
});
