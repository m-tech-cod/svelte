<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let canvas;
  let ctx;
  let particles = [];
  let animationId;

  const PARTICLE_COUNT = 80;
  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'];

  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.speedY = (Math.random() - 0.5) * 0.6;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    update(width, height) {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function initParticles(width, height) {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(width, height));
    }
  }

  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw(ctx);
    });
    animationId = requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(canvas.width, canvas.height);
  }

  onMount(() => {
    if (!browser) return;
    canvas = document.getElementById('particles-canvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    initParticles(canvas.width, canvas.height);
    animate();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  });
</script>

<canvas id="particles-canvas" class="particles-canvas"></canvas>

<style>
  .particles-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }
</style>