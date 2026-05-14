<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content">
    <p class="copyright">
      © {currentYear} Svelte – Tous droits réservés
    </p>
    <div class="social-links">
      <a href="#"> GitHub</a>
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #f3f4f6;
    padding: 2rem 1rem;
    margin-top: 3rem;
    border-top: 1px solid #e5e7eb;
  }

  :global(.dark) .footer {
    background-color: #1f2937;
    border-top-color: #374151;
  }

  .footer-content {
    max-width: 64rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .copyright {
    color: #4b5563;
    font-size: 0.875rem;
  }

  :global(.dark) .copyright {
    color: #9ca3af;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-links a {
    color: #4b5563;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 0.875rem;
  }

  .social-links a:hover {
    color: #3b82f6;
  }

  :global(.dark) .social-links a {
    color: #9ca3af;
  }

  :global(.dark) .social-links a:hover {
    color: #60a5fa;
  }

  @media (max-width: 640px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  }
</style>