<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/stores/theme";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />