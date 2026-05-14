import { writable } from 'svelte/store';
import { browser } from '$app/environment'; // IMPORTANT

// Valeur par défaut (utilisée côté serveur)
export const theme = writable('light');

// Initialisation uniquement dans le navigateur
if (browser) {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme === 'dark' || (!storedTheme && prefersDark) ? 'dark' : 'light';
  theme.set(initialTheme);

  // Synchronisation
  theme.subscribe(value => {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}