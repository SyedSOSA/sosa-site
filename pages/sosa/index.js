import Layout from '../../components/Layout'
import Link from 'next/link'

export default function SosaHome() {
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">SOSA Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/sosa/personalize-job-support"><a className="p-6 bg-white rounded-lg shadow block text-center">Personalize Job Support</a></Link>
          <Link href="/sosa/resume-cv-writing-services"><a className="p-6 bg-white rounded-lg shadow block text-center">Resume & CV Writing Services</a></Link>
          <Link href="/sosa/master-power-bi-and-land-your-dream-job-in-dubai"><a className="p-6 bg-white rounded-lg shadow block text-center">Master Power BI Masterclass</a></Link>
        </div>
      </section>
    </Layout>
  )
}
