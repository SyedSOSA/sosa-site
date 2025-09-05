
export default function Recruiters() {
  return (
    <div className="text-center py-20">
      <img src="/images/lock.png" alt="Secure Access" className="mx-auto mb-6 h-32" />
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Recruiter Directory 🔒</h1>
      <p className="text-gray-700 mb-6">Please sign in to access the recruiter directory.</p>
      <form className="max-w-md mx-auto bg-white p-6 shadow rounded-xl space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition">Sign In</button>
      </form>
    </div>
  )
}
