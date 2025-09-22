import Link from 'next/link'
export default function Home(){
  return (
    <div className="max-w-5xl mx-auto p-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Find Jobs Through Our Strategy</h1>
        <p className="mt-4 text-gray-600">SOSA helps professionals land roles in UAE & India with resume, interview prep and strategic applications.</p>
        <div className="mt-6">
          <Link href="/contact"><a className="btn">Book a Free Consultation</a></Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Resume Writing</h3>
          <p className="text-sm mt-2">Stand-out resumes tailored for UAE roles.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Interview Prep</h3>
          <p className="text-sm mt-2">Mock interviews and feedback.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Job Marketplace</h3>
          <p className="text-sm mt-2">Browse curated job listings.</p>
        </div>
      </section>
    </div>
  )
}
