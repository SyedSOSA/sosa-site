import Layout from '../../components/Layout'
import Link from 'next/link'
const sampleJobs = [
  {id:1,title:'Power BI Analyst',company:'ABC Corp',location:'Dubai',type:'Full-time'},
  {id:2,title:'HR Executive',company:'Hospitality Hub',location:'Sharjah',type:'Full-time'},
  {id:3,title:'Marketing Specialist',company:'Digital Ads',location:'Abu Dhabi',type:'Contract'}
]
export default function Marketplace(){
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Job Marketplace</h1>
        <p className="mb-6">Browse curated job listings — click apply to send a quick inquiry.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {sampleJobs.map(job=> (
            <div key={job.id} className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-500">{job.company} · {job.location}</div>
              <p className="mt-2">{job.type}</p>
              <div className="mt-3">
                <Link href="/contact"><a className="btn-primary">Apply / Inquire</a></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
