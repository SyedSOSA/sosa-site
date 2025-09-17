import Link from 'next/link'

export default function SosaLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
      <header className="w-full max-w-4xl mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">SOSA Consulting & Services</h2>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/recruiters">Recruiters</Link></li>
              <li><Link href="/business-setup">Business Setup</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <hr className="mt-4" />
      </header>
      <main className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        {children}
      </main>
      <footer className="mt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} SOSA Consulting & Services — Built with ❤️
      </footer>
    </div>
  )
}
