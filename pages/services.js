
export default function Services(){
  const items=[
    {title:"Career Development Coaching",desc:"Personalized career roadmaps and growth plans."},
    {title:"Interview Preparation",desc:"Mock interviews and panel support for tech and leadership roles."},
    {title:"Corporate Training",desc:"Upskilling teams in communication, strategy, and performance."},
    {title:"Team Building",desc:"Activities and coaching to improve collaboration."},
    {title:"Leadership Development",desc:"Coaching programs for managers and executives."},
    {title:"Executive Coaching",desc:"Outcome-driven guidance for senior leaders."},
    {title:"Life Coaching",desc:"Clarity, resilience, and balance for individuals."},
    {title:"Resume Review & Writing",desc:"Professional, ATS-friendly resumes and LinkedIn optimization."},
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(it=>(
        <div key={it.title} className="p-4 border border-gray-800 rounded">
          <h3 className="font-semibold text-lg">{it.title}</h3>
          <p className="text-gray-300">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
