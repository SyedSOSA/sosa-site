import Link from 'next/link'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

const stories = [
  { name: 'Farheen Nahid', role: 'IT Professional', location: 'Dubai', image: '/images/farheen.jpg', tagline: 'Landed an IT job in Dubai within 20 days' },
  { name: 'Mohit', role: 'Hospitality Manager', location: 'Sharjah', image: '/images/mohit.jpg', tagline: 'Secured a hotel management role after 6 months' },
  { name: 'Sheethal Raj', role: 'HR Executive', location: 'Dubai', image: '/images/sheethal.jpg', tagline: 'Fresher placed in HR role' },
  { name: 'Kavya', role: 'Marketing Specialist', location: 'Abu Dhabi', image: '/images/kavya.jpg', tagline: 'Transitioned to digital marketing role' },
  { name: 'Shruthi', role: 'Finance Executive', location: 'Dubai', image: '/images/shruthi.jpg', tagline: 'Landed an Accounts role in 30 days' }
]

export default function Home() {
  return (
    <Layout>
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">SOSA Consulting & Services</h1>
        <p className="max-w-2xl mx-auto mb-6">Professional resume writing, job support, Power BI training and business setup help for India & UAE.</p>
        <div className="space-x-4">
          <Link href="/sosa"><a className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold">Explore SOSA Services</a></Link>
          <Link href="/blog"><a className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold">Read Our Blog</a></Link>
        </div>
      </section>

      <section className="py-12 container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
        <Carousel items={stories} />
        <div className="text-center mt-6">
          <Link href="/success-stories"><a className="px-6 py-3 bg-indigo-600 text-white rounded-lg">See All Success Stories →</a></Link>
        </div>
      </section>

    </Layout>
  )
}
