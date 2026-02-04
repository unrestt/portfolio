const canvas = document.getElementById('banner-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;

// Get the computed style for 'top-section' or explicitly define dimensions
const bannerSection = document.querySelector('.top-section');

// Adjust canvas size
canvas.width = bannerSection.offsetWidth;
canvas.height = bannerSection.offsetHeight;

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = bannerSection.offsetWidth;
    canvas.height = bannerSection.offsetHeight;
    init();
});

// Mouse interaction
const mouse = {
    x: null,
    y: null,
    radius: 150 // connection radius for mouse
};

bannerSection.addEventListener('mousemove', (event) => {
    const rect = bannerSection.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
});

bannerSection.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

// Particle Class
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.globalAlpha = 0.4; // constant low opacity for particles
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1.0; // reset for lines
    }

    // Check particle position, check mouse interaction, move particle, draw particle
    update() {
        // Check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        // Draw particle
        this.draw();
    }
}

// Create particle array
function init() {
    particlesArray = [];
    // Number of particles - adjust based on screen width for performance
    let numberOfParticles = (canvas.width * canvas.height) / 9000;

    // Safety cap for performance
    if (numberOfParticles > 150) numberOfParticles = 150;

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.1; // random size
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2; // Speed
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = '#b648f5'; // var(--color-purple)

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Connect particles with lines
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

            // Link particles to each other
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = (1 - (distance / 20000)) * 0.3; // fade out as distance increases and reduced global opacity
                ctx.strokeStyle = 'rgba(182, 72, 245,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }

        // Link particles to mouse
        if (mouse.x != null) {
            let dx = mouse.x - particlesArray[a].x;
            let dy = mouse.y - particlesArray[a].y;
            let distance = (dx * dx + dy * dy);

            if (distance < (mouse.radius * mouse.radius)) {
                // stronger connection to mouse
                opacityValue = (1 - (distance / (mouse.radius * mouse.radius))) * 0.4;
                ctx.strokeStyle = 'rgba(182, 72, 245,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

init();
animate();
