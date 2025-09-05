
import { useState } from 'react';

export default function Recruiters(){
  const [loggedIn,setLoggedIn]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=(e)=>{
    e.preventDefault();
    if(email==="test@sosa.com" && password==="1234"){ setLoggedIn(true); }
    else alert("Invalid credentials. Use test@sosa.com / 1234");
  };

  if(!loggedIn){
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border border-gray-800 rounded bg-gray-900">
        <h2 className="text-xl font-bold mb-4">Recruiter Directory - Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border border-gray-700 rounded"/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border border-gray-700 rounded"/>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded w-full">Sign In</button>
        </form>
      </div>
    )
  }

  const list=[
    {name:"ABC Talent",focus:"Technology",email:"hr@abc.com"},
    {name:"Global Recruiters",focus:"Leadership Hiring",email:"info@globalrec.com"}
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Recruiter Directory</h1>
      <ul className="space-y-2">
        {list.map(r=>(
          <li key={r.name} className="p-3 border border-gray-800 rounded bg-gray-900">
            <strong>{r.name}</strong> – {r.focus} ({r.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
