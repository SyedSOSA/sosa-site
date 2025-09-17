import Head from 'next/head'
import SosaLayout from '../../components/SosaLayout'

export default function PersonalizeJobSupport() {
  return (
    <SosaLayout>
      <Head>
        <title>Personalize Job Support | SOSA</title>
        <meta name="description" content="Get personalized job support from SOSA Consulting." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Personalize Job Support</h1>
      <p>We provide end-to-end personalized job support, helping you navigate interviews, technical challenges, and workplace expectations.</p>
    </SosaLayout>
  )
}
