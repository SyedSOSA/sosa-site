import Head from 'next/head'
import SosaLayout from '../../components/SosaLayout'

export default function PersonalizeJobSupport() {
  return (
    <SosaLayout>
      <Head>
        <title>Personalize Job Support | SOSA</title>
        <meta name="description" content="One-on-one job support to help you land roles faster." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Personalize Job Support</h1>
      <p>One-on-one guidance, tailored strategies, and complete support to help you land your dream role faster.</p>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">What we offer</h2>
        <ul className="list-disc ml-6">
          <li>Mentorship & mock interviews</li>
          <li>Resume & LinkedIn alignment</li>
          <li>Job search strategy</li>
          <li>Interview follow-up support</li>
        </ul>
      </section>
    </SosaLayout>
  )
}
