import Layout from '../../../components/Layout'
import Link from 'next/link'
import { getPostsByCategory, getAllPosts } from '../../../lib/posts'

export default function CategoryPage({ posts, category }) {
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Category: {category}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(p => (
            <article key={p.slug} className="p-6 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{p.metadata.title}</h2>
              <p className="text-gray-700 mb-4">{p.metadata.excerpt}</p>
              <Link href={`/blog/${p.slug}`}><a className="text-[var(--sosa-primary)]">Read more →</a></Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map(p => p.metadata.category)))
  return { paths: categories.map(c => ({ params: { category: c } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const posts = getPostsByCategory(params.category)
  return { props: { posts, category: params.category } }
}
