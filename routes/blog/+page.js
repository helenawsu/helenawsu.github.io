// src/routes/blog/+page.js
import { fetchMarkdownPosts } from '$lib/utils'

export const load = async ({ fetch }) => {

  
    const response = await fetch(`/api/posts`) // fucking stupid only accepts response e.g. json()
    const ps = await fetchMarkdownPosts()
    const content = ps.content
    console.log(ps)
    const sortedps = ps.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
    console.log(sortedps)
    const posts = await response.json()
    return {
      sortedps
    }
  }
