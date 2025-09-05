
import Link from 'next/link';

export default function Services(){
  const items=[
    {title:"Resume Writing & Review",desc:"ATS-optimized resumes and LinkedIn profiles."},
    {title:"Career Development Coaching",desc:"Personalized roadmaps, skill gap analysis, and mentoring."},
    {title:"Interview Preparation",desc:"Mock interviews with expert panels for tech & leadership roles."},
    {title:"Corporate Training",desc:"Workshops for communication, productivity, and strategy."},
    {title:"Team Building",desc:"Interactive programs to enhance collaboration & trust."},
    {title:"Leadership Development",desc:"Transform managers into effective, inspiring leaders."},
    {title:"Executive Coaching",desc:"Confidential coaching for senior executives."},
    {title:"Life Coaching",desc:"Guidance for personal growth, clarity, and resilience."},
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(it=>(
        <div key={it.title} className="p-4 border border-gray-800 rounded bg-gray-900">
          <h3 className="font-semibold text-lg">{it.title}</h3>
          <p className="text-gray-300 mb-3">{it.desc}</p>
          <Link href="/contact" className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">Book Consultation</Link>
        </div>
      ))}
    </div>
  )
}
