import Head from 'next/head'
import SosaLayout from '../../components/SosaLayout'

export default function PowerBIPage() {
  return (
    <SosaLayout>
      <Head>
        <title>Master Power BI | SOSA</title>
        <meta name="description" content="Master Power BI and secure your dream job in Dubai with SOSA Consulting." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Master Power BI & Land Your Dream Job in Dubai</h1>
      <p>Our tailored Power BI training equips you with the skills to succeed in competitive markets like Dubai.</p>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Course Highlights</h2>
        <ul className="list-disc ml-6">
          <li>Hands-on dashboarding</li>
          <li>Data modelling & DAX</li>
          <li>Real-world projects</li>
          <li>Placement assistance</li>
        </ul>
      </section>
    </SosaLayout>
  )
}
