<!-- src/routes/blog/+page.svelte -->
<script>
    export let data
    </script>
    
    <h1>Blog</h1>
      
    <ul>
      {#each data.posts as post}
        <li>
          <h2>
            <a href={post.path.slice(0,7)}>
              {post.meta.title}
            </a>
          </h2>
          Published {post.meta.date}
        </li>
      {/each}
    </ul>