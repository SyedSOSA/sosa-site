import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDirectory = path.join(process.cwd(),'posts')
export function getPostSlugs(){ try{ return fs.readdirSync(postsDirectory) }catch(e){ return [] }}
export function getPostBySlug(slug){ const realSlug=slug.replace(/\.md$/,''); const full=path.join(postsDirectory, `${realSlug}.md`); const content=fs.readFileSync(full,'utf8'); const {data,content:md}=matter(content); return {slug:realSlug,metadata:data,content:md} }
export function getAllPosts(){ const slugs=getPostSlugs(); const posts=slugs.map(s=>getPostBySlug(s)); return posts.sort((a,b)=> new Date(b.metadata.date)-new Date(a.metadata.date)) }
export function getPostsByCategory(cat){ return getAllPosts().filter(p=>p.metadata.category===cat) }
