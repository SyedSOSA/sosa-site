import Layout from '../../components/Layout'
import Link from 'next/link'
export default function Personalize(){
  return (
    <Layout>
      <section className="bg-gradient-to-r from-[var(--sosa-primary)] to-[var(--sosa-accent)] text-white py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Personalize Job Support</h1>
          <p className="mt-3">End-to-end personalized support to help you get hired faster.</p>
        </div>
      </section>
      <section className="py-12 container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What we do</h2>
        <ul className="list-disc ml-6">
          <li>Resume & LinkedIn optimization</li>
          <li>Targeted applications to UAE recruiters</li>
          <li>Mock interviews & follow-up strategy</li>
          <li>Referral guidance & placement support</li>
        </ul>
        <div className="mt-6">
          <Link href="/contact"><a className="btn-primary">Get Started</a></Link>
        </div>
      </section>
    </Layout>
  )
}
