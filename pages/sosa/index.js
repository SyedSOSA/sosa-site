import Head from 'next/head'
import SosaLayout from '../../components/SosaLayout'
import Link from 'next/link'

export default function SosaHome() {
  return (
    <SosaLayout>
      <Head>
        <title>SOSA Services | SOSA</title>
        <meta name="description" content="Explore all SOSA services in one place." />
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-center">Explore SOSA Services</h1>
      <div className="flex flex-col space-y-4">
        <Link href="/sosa/personalize-job-support" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">Personalize Job Support</Link>
        <Link href="/sosa/resume-cv-writing-services" className="px-6 py-3 bg-green-600 text-white rounded-lg text-center hover:bg-green-700">Resume & CV Writing Services</Link>
        <Link href="/sosa/master-power-bi-and-land-your-dream-job-in-dubai" className="px-6 py-3 bg-purple-600 text-white rounded-lg text-center hover:bg-purple-700">Master Power BI & Land Your Dream Job in Dubai</Link>
      </div>
    </SosaLayout>
  )
}
