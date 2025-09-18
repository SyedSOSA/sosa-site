import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/posts'

export default function Blog({ posts }) {
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(post => (
            <article key={post.slug} className="p-6 bg-white rounded shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{post.metadata.date}</span>
                <Link href={`/blog/category/${post.metadata.category}`}><a className="text-sm bg-[var(--sosa-accent)] text-white px-2 py-1 rounded">{post.metadata.category}</a></Link>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.metadata.title}</h2>
              <p className="text-gray-700 mb-4">{post.metadata.excerpt}</p>
              <Link href={`/blog/${post.slug}`}><a className="text-[var(--sosa-primary)]">Read more →</a></Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
