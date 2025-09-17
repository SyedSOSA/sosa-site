import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">SOSA Consulting & Services</h1>
      <p className="mb-6 max-w-2xl text-center">Professional resume writing, job support, Power BI training and business setup help for India & UAE.</p>
      <div className="space-x-4">
        <Link href="/about" className="px-4 py-2 bg-white rounded shadow">About</Link>
        <Link href="/recruiters" className="px-4 py-2 bg-white rounded shadow">Recruiters</Link>
        <Link href="/business-setup" className="px-4 py-2 bg-white rounded shadow">Business Setup</Link>
        <Link href="/sosa" className="px-4 py-2 bg-blue-600 text-white rounded shadow">SOSA Services</Link>
        <Link href="/contact" className="px-4 py-2 bg-white rounded shadow">Contact</Link>
      </div>
    </div>
  )
}
