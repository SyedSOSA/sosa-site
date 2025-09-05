
export default function Recruiters(){
  const list=[
    {name:"ABC Talent",focus:"Technology",email:"hr@abc.com"},
    {name:"Global Recruiters",focus:"Leadership Hiring",email:"info@globalrec.com"}
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Recruiter Directory</h1>
      <ul className="space-y-2">
        {list.map(r=>(
          <li key={r.name} className="p-3 border border-gray-800 rounded">
            <strong>{r.name}</strong> – {r.focus} ({r.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
