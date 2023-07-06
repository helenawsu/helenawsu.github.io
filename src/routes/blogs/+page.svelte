<!-- src/routes/blogs/+page.svelte -->
<script>
    export let data
    </script>
    
    <h1>Blogs</h1>
      
    <ul>
      {#each data.posts as post}
        <li>
          <h2>
            <a href={post.path.slice(0,8)}>
              {post.meta.title}
            </a>
          </h2>
          Published {post.meta.date}
        </li>
      {/each}
    </ul>