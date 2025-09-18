import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    setTheme(stored)
    if (stored === 'dark') document.documentElement.classList.add('dark')
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <header className="bg-white dark:bg-gray-900 shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[var(--sosa-primary)] flex items-center justify-center text-white font-bold">S</div>
            <div>
              <div className="text-xl font-bold">SOSA Consulting</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">Career & Training</div>
            </div>
          </div>

          <nav>
            <ul className="flex space-x-4 items-center text-sm">
              <li><Link href="/"><a className="hover:text-[var(--sosa-primary)]">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-[var(--sosa-primary)]">About</a></Link></li>
              <li><Link href="/sosa"><a className="hover:text-[var(--sosa-primary)]">Services</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-[var(--sosa-primary)]">Blog</a></Link></li>
              <li><Link href="/success-stories"><a className="hover:text-[var(--sosa-primary)]">Success Stories</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-[var(--sosa-primary)]">Contact</a></Link></li>
              <li>
                <button onClick={toggle} aria-label="Toggle theme" className="ml-3 px-2 py-1 border rounded">
                  {theme === 'light' ? 'Dark' : 'Light'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white dark:bg-gray-900 border-t">
        <div className="container mx-auto p-6 text-center text-sm text-gray-600 dark:text-gray-300">
          <div className="mb-3">© {new Date().getFullYear()} SOSA Consulting & Services</div>
          <div className="flex items-center justify-center space-x-4 mb-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--sosa-primary)]">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[var(--sosa-primary)]">Instagram</a>
            <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[var(--sosa-primary)]">WhatsApp</a>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Built with ❤️ — Brand: Royal Blue & Teal</div>
        </div>
      </footer>
    </div>
  )
}
