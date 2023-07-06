
export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        

        
        const { metadata} = await resolver()
        const postPath = path.slice(11, -3)
        
        const post = await import("../../routes"+postPath+".md")
        // console.log("post", post.default)


        return {
          meta: metadata,
          path: postPath,
          content: post.default
        }
      })
    )
  
    return allPosts
  }