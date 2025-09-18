import Layout from '../../components/Layout'
import Link from 'next/link'
export default function Sosa(){
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href='/sosa/resume-cv-writing-services'><a className="p-6 bg-white rounded-lg shadow block text-center">Resume Writing</a></Link>
          <Link href='/sosa/personalize-job-support'><a className="p-6 bg-white rounded-lg shadow block text-center">Personalize Job Assistance</a></Link>
          <Link href='/sosa/job-assistance-package'><a className="p-6 bg-white rounded-lg shadow block text-center">Job Assistance Package</a></Link>
        </div>
      </section>
    </Layout>
  )
}
