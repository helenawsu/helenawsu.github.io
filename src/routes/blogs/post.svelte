<!-- post.svelte -->
<script>
    export let title
    export let date
    export let description
	  import { GoogleTranslate } from '@candidosales/svelte-google-translate';
    </script>
    <GoogleTranslate
      elementId={'google-translate-element'}
      options={{ pageLanguage: 'auto', includedLanguages: 'zh,en' }}
    />
    <div id="google-translate-element">
    </div>
    <article>
      <h1>{title}</h1>
    
      <p>Published: {date}</p>
    
      <slot />
    </article>