import Link from 'next/link'
export default function Services(){
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold">Our Services</h1>
      <ul className="mt-4 space-y-2">
        <li><Link href="/services/resume-writing"><a className="text-blue-600">Resume Writing</a></Link></li>
        <li><Link href="/services/personalized-assistance"><a className="text-blue-600">Personalized Job Assistance</a></Link></li>
        <li><Link href="/services/job-application-support"><a className="text-blue-600">Job Application Support</a></Link></li>
        <li><Link href="/services/interview-prep"><a className="text-blue-600">Interview Preparation</a></Link></li>
      </ul>
    </div>
  )
}
