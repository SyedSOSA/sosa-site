import Head from 'next/head'
import SosaLayout from '../../components/SosaLayout'

export default function ResumeCVWritingServices() {
  return (
    <SosaLayout>
      <Head>
        <title>Resume & CV Writing Services | SOSA</title>
        <meta name="description" content="Professional resume & CV writing services by SOSA Consulting." />
      </Head>
      <section className="py-6">
        <h1 className="text-3xl font-bold mb-4">Land More Interviews with a Professionally Written Resume & CV</h1>
        <p>We craft resumes that highlight your strengths, optimize for ATS, and get noticed by recruiters.</p>
      </section>

      <section className="py-6 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Packages</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Basic Resume Revamp</h3>
            <p>Resume optimization + 1 revision</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Premium Resume + LinkedIn</h3>
            <p>Resume + Cover Letter + LinkedIn revamp</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Executive Resume</h3>
            <p>Leadership resume + strategy call</p>
          </div>
        </div>
      </section>
    </SosaLayout>
  )
}
