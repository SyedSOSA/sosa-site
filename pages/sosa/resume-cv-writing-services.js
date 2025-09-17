import Head from 'next/head'
import SosaLayout from '../../components/SosaLayout'

export default function ResumeCVWritingServices() {
  return (
    <SosaLayout>
      <Head>
        <title>Resume & CV Writing Services | SOSA</title>
        <meta name="description" content="Professional resume & CV writing services by SOSA Consulting." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Resume & CV Writing Services</h1>
      <p>Our expert writers craft ATS-friendly resumes and CVs that highlight your strengths and improve your chances of landing interviews.</p>
    </SosaLayout>
  )
}
