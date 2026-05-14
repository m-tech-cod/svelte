<script>
  import { fade } from 'svelte/transition';
  import ParticlesBackground from './ParticlesBackground.svelte';
</script>

<section id="hero" class="hero" in:fade={{ duration: 800 }}>
    <ParticlesBackground />
    <div class="hero-content">
        <h1 class="title">Bonjour, je suis <span class="highlight">Svelte</span></h1>
        <p class="subtitle">Développeur Frontend créatif et passionné d'animations.</p>
        <div class="cta-group">
            <a href="#projects" class="btn-primary">Voir mes projets</a>
            <a href="#contact" class="btn-secondary">Me contacter</a>
        </div>
        

        <div class="social-links">
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        </div>
    </div>
</section>

<style>
  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  .hero-content {
    max-width: 48rem;
    position: relative;
    z-index: 2;
  }
  .title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .highlight {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .subtitle {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 2rem;
  }
  :global(.dark) .subtitle {
    color: #9ca3af;
  }
  .cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .btn-primary, .btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 500;
    transition: all 0.2s;
    text-decoration: none;
  }
  .btn-primary {
    background-color: #3b82f6;
    color: white;
  }
  .btn-primary:hover {
    background-color: #2563eb;
    transform: scale(1.05);
  }
  .btn-secondary {
    background-color: #e5e7eb;
    color: #1f2937;
  }
  :global(.dark) .btn-secondary {
    background-color: #374151;
    color: #f3f4f6;
  }
  .btn-secondary:hover {
    background-color: #d1d5db;
    transform: scale(1.05);
  }
  .social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }
  .social-links a {
    color: #6b7280;
    text-decoration: none;
    transition: color 0.2s;
  }
  .social-links a:hover {
    color: #3b82f6;
  }
  @media (max-width: 640px) {
    .title { font-size: 2rem; }
    .cta-group { flex-direction: column; align-items: center; }
    .title { font-size: 2rem; }
  .hero-content { padding: 0 1rem; }
  }
</style>