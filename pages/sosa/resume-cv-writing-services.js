import Layout from '../../components/Layout'

export default function ResumeCVWritingServices() {
  return (
    <Layout>
      <section className="py-8 container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Resume & CV Writing Services</h1>
        <p>We create ATS-friendly resumes, targeted cover letters and LinkedIn profiles so you get noticed by recruiters.</p>

        <section className="py-6 bg-gray-50 p-6 rounded-lg mt-6">
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
      </section>
    </Layout>
  )
}
