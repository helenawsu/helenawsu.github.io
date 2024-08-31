<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
import '$lib/styles/style.css'

</script>
<Header />

<header></header>

<main>
  <slot />
</main>

<footer></footer>