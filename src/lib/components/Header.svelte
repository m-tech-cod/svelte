<script>
  import ThemeToggle from './ThemeToggle.svelte';
  let mobileMenuOpen = false;

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="header">
  <div class="container">
    <div class="logo">
      <a href="/">Mon Portfolio</a>
    </div>

    <!-- Desktop navigation -->
    <nav class="desktop-nav">
      <a href="#hero" class="nav-link">Accueil</a>
      <a href="#projects" class="nav-link">Projets</a>
      <a href="#contact" class="nav-link">Contact</a>
      <ThemeToggle />
    </nav>

    <!-- Mobile hamburger button -->
    <button class="hamburger" on:click={toggleMenu} aria-label="Menu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>

  {#if mobileMenuOpen}
    <div class="mobile-menu" on:click={closeMenu}>
      <div class="mobile-menu-content" on:click|stopPropagation>
        <a href="#hero" on:click={closeMenu}>Accueil</a>
        <a href="#projects" on:click={closeMenu}>Projets</a>
        <a href="#contact" on:click={closeMenu}>Contact</a>
        <div class="mobile-theme">
          <ThemeToggle />
        </div>
      </div>
    </div>
  {/if}
</header>


<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  :global(.dark) .header {
    background-color: #1f2937;
  }
  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo a {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
  }
  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .nav-link {
    color: #374151;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }
  :global(.dark) .nav-link {
    color: #d1d5db;
  }
  .nav-link:hover {
    color: #3b82f6;
  }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .hamburger-line {
    width: 24px;
    height: 2px;
    background-color: #374151;
    transition: 0.2s;
  }
  :global(.dark) .hamburger-line {
    background-color: #d1d5db;
  }
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 60;
    backdrop-filter: blur(4px);
  }
  .mobile-menu-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 400px;
    height: 50%;
    background-color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  }
  :global(.dark) .mobile-menu-content {
    background-color: #1f2937;
  }
  .mobile-menu-content a {
    color: #1f2937;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
  }
  :global(.dark) .mobile-menu-content a {
    color: #f3f4f6;
  }
  .mobile-theme {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }
</style>