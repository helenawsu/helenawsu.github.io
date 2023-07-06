<!-- src/routes/blog/+page.svelte -->
<script>
    export let data
    </script>
    
    <h1>Blog</h1>
      
    <ul>
      {#each data.sortedps as post}
        <li>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
          Published {post.meta.date}
          <br/>
          <svelte:component this={post.content} />
        </li>
      {/each}
    </ul>