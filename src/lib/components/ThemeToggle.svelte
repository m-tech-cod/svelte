<script>
  import { theme } from '$lib/stores/theme';
  let currentTheme;

  theme.subscribe(t => currentTheme = t);

  function toggle() {
    theme.set(currentTheme === 'dark' ? 'light' : 'dark');
  }
</script>

<button on:click={toggle} class="theme-toggle" aria-label="Changer de thème">
  {#if currentTheme === 'dark'}
    ☀️
  {:else}
    🌙
  {/if}
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 9999px;
    transition: background 0.2s;
  }
  .theme-toggle:hover {
    background: rgba(0,0,0,0.1);
  }
  :global(.dark) .theme-toggle:hover {
    background: rgba(255,255,255,0.1);
  }
</style>