import Link from 'next/link'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

const stories = [
  { name: 'Farheen Nahid', role: 'IT Professional', location: 'Dubai', tagline: 'Landed an IT job in Dubai within 20 days' },
  { name: 'Mohit', role: 'Hospitality Manager', location: 'Sharjah', tagline: 'Secured a hotel management role after 6 months' },
  { name: 'Sheethal Raj', role: 'HR Executive', location: 'Dubai', tagline: 'Fresher placed in HR role' }
]

export default function Home(){
  return (
    <Layout>
      <section className="py-20" style={{background: 'linear-gradient(90deg, var(--sosa-primary), var(--sosa-accent))', color:'white'}}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find jobs through our strategy — Land a job</h1>
          <p className="max-w-2xl mx-auto mb-6">Tailored resume, interview prep, job application support and marketplace for UAE & India.</p>
          <div className="space-x-4">
            <Link href="/sosa"><a className="btn-primary">Explore Services</a></Link>
            <Link href="/contact"><a className="btn-primary">Get in Touch</a></Link>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Resume Writing</h3>
            <p className="mt-2">ATS-optimized resumes and LinkedIn profiles.</p>
            <Link href="/sosa/resume-cv-writing-services"><a className="text-[var(--sosa-primary)]">Learn more →</a></Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Personalize Job Assistance</h3>
            <p className="mt-2">One-on-one job support with application strategy.</p>
            <Link href="/sosa/personalize-job-support"><a className="text-[var(--sosa-primary)]">Learn more →</a></Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Job Marketplace</h3>
            <p className="mt-2">Curated job listings with filters and apply options.</p>
            <Link href="/sosa/job-marketplace"><a className="text-[var(--sosa-primary)]">Explore Jobs →</a></Link>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
        <Carousel items={stories} />
      </section>
    </Layout>
  )
}
