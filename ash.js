const canvas = document.getElementById('ash-canvas');
const ctx = canvas.getContext('2d');

canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const particles = [];

for (let i = 0; i < 150; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.3 + 0.2,
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(200, 200, 200, 0.05)';

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200,200,200,${p.opacity})`;
    ctx.fill();

    p.y += p.speed;
    if (p.y > height) {
      p.y = -p.r;
      p.x = Math.random() * width;
    }
  });

  requestAnimationFrame(draw);
}

draw();