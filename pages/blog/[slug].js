import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import { remark } from 'remark'
import html from 'remark-html'

export default function Post({ post }) {
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-2">{post.metadata.title}</h1>
        <div className="text-sm text-gray-500 mb-6">{post.metadata.date} · <span className="text-[var(--sosa-accent)]">{post.metadata.category}</span></div>
        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = getPostBySlug(params.slug)
  const processed = await remark().use(html).process(postData.content)
  const contentHtml = processed.toString()
  return { props: { post: { ...postData, content: contentHtml } } }
}
