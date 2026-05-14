<script>
  import { fade } from 'svelte/transition';
  import Hero from '$lib/components/Hero.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<div in:fade={{ duration: 800 }}>
  <Hero />
</div>
<div in:fade={{ duration: 800, delay: 200 }}>
  <Projects />
</div>
<div in:fade={{ duration: 800, delay: 400 }}>
  <Contact />
</div>