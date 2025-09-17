import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to SOSA Consulting & Services</h1>
      <p className="mb-6">Explore our services and offerings.</p>
      <Link href="/sosa" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Go to SOSA Services
      </Link>
    </div>
  )
}
