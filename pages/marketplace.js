import jobs from '../data/jobs.json'
export default function Marketplace(){
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold">Jobs Marketplace</h1>
      <div className="mt-4 space-y-4">
        {jobs.map(job=> (
          <div key={job.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company} — {job.location}</p>
            </div>
            <a className="btn" href={job.apply}>Apply</a>
          </div>
        ))}
      </div>
    </div>
  )
}
