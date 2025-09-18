import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  useEffect(() => { const t = localStorage.getItem('theme') || 'light'; setTheme(t); if(t==='dark') document.documentElement.classList.add('dark') }, [])
  const toggleTheme = () => { const nt = theme==='light'?'dark':'light'; setTheme(nt); localStorage.setItem('theme', nt); document.documentElement.classList.toggle('dark', nt==='dark') }
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-900 shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--sosa-primary)] text-white flex items-center justify-center font-bold">S</div>
            <div>
              <div className="font-bold">SOSA Consulting</div>
              <div className="text-xs text-gray-500 dark:text-gray-300">Career & Training</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href='/'><a className="header-link">Home</a></Link>
            <Link href='/about'><a className="header-link">About</a></Link>
            <div className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
              <button className="header-link">Services ▾</button>
              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded shadow-lg py-2 z-50">
                  <Link href='/sosa/resume-cv-writing-services'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Resume Writing</a></Link>
                  <Link href='/sosa/personalize-job-support'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Personalize Job Assistance</a></Link>
                  <Link href='/sosa/job-assistance-package'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Job Assistance Package</a></Link>
                  <Link href='/sosa/job-application-support'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Job Application Support</a></Link>
                  <Link href='/sosa/interview-preparation-course'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Interview Preparation</a></Link>
                  <Link href='/sosa/atomic-job-search-strategy'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">30-Day Job Strategy</a></Link>
                  <Link href='/sosa/job-marketplace'><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Job Marketplace</a></Link>
                </div>
              )}
            </div>
            <Link href='/blog'><a className="header-link">Blogs</a></Link>
            <Link href='/contact'><a className="header-link">Contact</a></Link>
            <Link href='/login'><a className="header-link">Login</a></Link>
            <button onClick={toggleTheme} className="px-2 py-1 border rounded">{theme==='light'?'Dark':'Light'}</button>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white dark:bg-gray-900 border-t mt-8">
        <div className="container mx-auto p-8 grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">SOSA Consulting</h4>
            <p className="text-sm">Find jobs through our strategy — land a job in UAE & India.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><Link href='/'><a>Home</a></Link></li>
              <li><Link href='/about'><a>About</a></Link></li>
              <li><Link href='/blog'><a>Blogs</a></Link></li>
              <li><Link href='/contact'><a>Contact</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="text-sm space-y-1">
              <li><Link href='/privacy-policy'><a>Privacy Policy</a></Link></li>
              <li><Link href='/terms-conditions'><a>Terms & Conditions</a></Link></li>
              <li><Link href='/refund-policy'><a>Refund Policy</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">Phone: +919535143786</p>
            <p className="text-sm">Email: syed@sosaconsult.com</p>
            <div className="mt-3 flex gap-3">
              <a href="https://instagram.com">Instagram</a>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://youtube.com">YouTube</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="text-center p-4 text-sm text-gray-500">© {new Date().getFullYear()} SOSA Consulting — All rights reserved</div>
      </footer>
    </div>
  )
}
