import { useState } from 'react'

export default function Recruiters() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email === 'test@sosa.com' && password === 'sosa123') {
      setLoggedIn(true)
    } else {
      alert('Invalid credentials')
    }
  }

  if (!loggedIn) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">🔒 Recruiter Directory</h2>
        <p className="mb-4">Please sign in to view recruiter details.</p>
        <input placeholder="Email" className="border p-2 m-2" onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" className="border p-2 m-2" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="bg-blue-900 text-white px-4 py-2 rounded">Sign In</button>
      </div>
    )
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Recruiter Directory</h2>
      <p>✅ Welcome, you are signed in! Recruiter details will appear here.</p>
    </div>
  )
}
