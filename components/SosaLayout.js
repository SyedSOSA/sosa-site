import Link from 'next/link'

export default function SosaLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
      <header className="w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-bold">SOSA Services</h2>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><Link href="/sosa">Home</Link></li>
            <li><Link href="/sosa/personalize-job-support">Job Support</Link></li>
            <li><Link href="/sosa/resume-cv-writing-services">Resume Writing</Link></li>
            <li><Link href="/sosa/master-power-bi-and-land-your-dream-job-in-dubai">Power BI</Link></li>
          </ul>
        </nav>
      </header>
      <main className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        {children}
      </main>
      <footer className="mt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} SOSA Consulting & Services
      </footer>
    </div>
  )
}
