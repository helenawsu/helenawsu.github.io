<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
import '$lib/styles/style.css'
export const prerender = true;

</script>
<Header />

<header>Hi, I'm a header</header>

<main>
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>