import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
export default function Blog({posts}){
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(p=>(
            <article key={p.slug} className="p-6 bg-white rounded shadow">
              <div className="text-sm text-gray-500">{p.metadata.date}</div>
              <h2 className="text-xl font-semibold">{p.metadata.title}</h2>
              <p className="mt-2">{p.metadata.excerpt}</p>
              <Link href={`/blog/${p.slug}`}><a className="text-[var(--sosa-primary)]">Read more →</a></Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
export async function getStaticProps(){ const posts=getAllPosts(); return {props:{posts}} }
