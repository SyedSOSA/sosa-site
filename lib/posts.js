import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
  try { return fs.readdirSync(postsDirectory) } catch(e) { return [] }
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, metadata: data, content }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug))
  return posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
}

export function getPostsByCategory(category) {
  const posts = getAllPosts()
  return posts.filter(p => p.metadata.category === category)
}
