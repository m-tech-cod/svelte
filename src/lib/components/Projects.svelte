<script>
  // Données des projets
  const projects = [
    {
      id: 1,
      title: 'Dashboard temps réel',
      description: 'Tableau de bord interactif avec graphiques temps réel (Vue.js, ECharts, Tailwind).',
      techs: ['Vue.js', 'ECharts', 'Tailwind'],
      image: '/images/dashboard.jpg',
      demoUrl: 'https://realtime-dashboard-873a.vercel.app/',
      githubUrl: 'https://github.com/m-tech-cod/realtime-dashboard'
    },
    {
      id: 2,
      title: 'Application E2EE',
      description: 'Messagerie chiffrée de bout en bout (React, Web Crypto API, Tailwind).',
      techs: ['React', 'Web Crypto', 'Tailwind'],
      image: '/images/e2ee.jpg',
      demoUrl: 'https://m-tech-cod-e2ee-messenger-zere.vercel.app/',
      githubUrl: 'https://github.com/m-tech-cod/e2ee-messenger'
    },
    {
      id: 3,
      title: 'Habit Tracker',
      description: 'Extension de résumé de page avec IA (Manifest V3, Readability.js).',
      techs: ['JavaScript', 'Chrome API', 'Readability.js'],
      image: '/images/habit.jpg',
      demoUrl: 'https://habit-tracker-26fm.vercel.app/', 
      githubUrl: 'https://github.com/m-tech-cod/habit-tracker'
    },
  ];
</script>

<section id="projects" class="projects-section">
  <h2 class="section-title">Mes Projets</h2>
  <div class="projects-grid">
    {#each projects as project}
      <div class="project-card">
        <img src={project.image} alt={project.title} class="project-image" loading="lazy" />
        <div class="project-content">
          <h3 class="project-title">{project.title}</h3>
          <p class="project-description">{project.description}</p>
          <div class="project-techs">
            {#each project.techs as tech}
              <span class="tech-badge">{tech}</span>
            {/each}
          </div>
          <div class="project-links">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="btn-demo">🔗 Démo</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="btn-github">🐙 GitHub</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .projects-section {
    padding: 4rem 1rem;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .project-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
  }
  :global(.dark) .project-card {
    background: #1f2937;
  }
  .project-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .project-content {
    padding: 1.5rem;
  }
  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #111827;
  }
  :global(.dark) .project-title {
    color: #f9fafb;
  }
  .project-description {
    color: #4b5563;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  :global(.dark) .project-description {
    color: #9ca3af;
  }
  .project-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .tech-badge {
    background-color: #e5e7eb;
    color: #1f2937;
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-weight: 500;
  }
  :global(.dark) .tech-badge {
    background-color: #374151;
    color: #d1d5db;
  }
  .project-links {
    display: flex;
    gap: 1rem;
  }
  .btn-demo, .btn-github {
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.8rem;
    text-decoration: none;
    transition: background 0.2s;
    font-weight: 500;
  }
  .btn-demo {
    background-color: #3b82f6;
    color: white;
  }
  .btn-demo:hover {
    background-color: #2563eb;
  }
  .btn-github {
    background-color: #f3f4f6;
    color: #1f2937;
  }
  :global(.dark) .btn-github {
    background-color: #4b5563;
    color: #f3f4f6;
  }
  .btn-github:hover {
    background-color: #e5e7eb;
  }
  @media (max-width: 640px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
    .project-content {
      padding: 1rem;
    }
  }
  @media (min-width: 768px) {
  .projects-section { padding: 4rem 1rem; }
}
</style>