import Link from 'next/link'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

const stories = [
  { name: 'Farheen Nahid', role: 'IT Professional', location: 'Dubai', tagline: 'Landed an IT job in Dubai within 20 days' },
  { name: 'Mohit', role: 'Hospitality Manager', location: 'Sharjah', tagline: 'Secured a hotel management role after 6 months' },
  { name: 'Sheethal Raj', role: 'HR Executive', location: 'Dubai', tagline: 'Fresher placed in HR role' },
  { name: 'Kavya', role: 'Marketing Specialist', location: 'Abu Dhabi', tagline: 'Transitioned to digital marketing role' },
  { name: 'Shruthi', role: 'Finance Executive', location: 'Dubai', tagline: 'Landed an Accounts role in 30 days' }
]

export default function Home() {
  return (
    <Layout>
      <section className="py-20" style={{ background: 'linear-gradient(90deg, var(--sosa-primary), var(--sosa-accent))', color: 'white' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Career coaching, resumes & Power BI training — SOSA</h1>
          <p className="max-w-2xl mx-auto mb-6">We help professionals land jobs in India & UAE with tailored resumes, interview coaching and upskilling programs.</p>
          <div className="space-x-4">
            <Link href="/sosa"><a className="px-6 py-3 bg-white text-[var(--sosa-primary)] rounded-lg font-semibold">Explore Services</a></Link>
            <Link href="/contact"><a className="px-6 py-3 bg-white text-[var(--sosa-primary)] rounded-lg font-semibold">Contact Us</a></Link>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Resume & CV Writing</h3>
            <p className="mt-2">Professional resumes optimized for ATS and recruiters.</p>
            <Link href="/sosa/resume-cv-writing-services"><a className="mt-4 inline-block text-[var(--sosa-primary)]">Learn more →</a></Link>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Personalize Job Support</h3>
            <p className="mt-2">End-to-end support: strategy, applications, interviews.</p>
            <Link href="/sosa/personalize-job-support"><a className="mt-4 inline-block text-[var(--sosa-primary)]">Learn more →</a></Link>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Power BI Masterclass</h3>
            <p className="mt-2">Hands-on Power BI training with placement assistance in UAE.</p>
            <Link href="/sosa/master-power-bi-and-land-your-dream-job-in-dubai"><a className="mt-4 inline-block text-[var(--sosa-primary)]">Learn more →</a></Link>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
        <Carousel items={stories} />
        <div className="text-center mt-6">
          <Link href="/success-stories"><a className="px-6 py-3 bg-[var(--sosa-primary)] text-white rounded-lg">See All Success Stories →</a></Link>
        </div>
      </section>
    </Layout>
  )
}
