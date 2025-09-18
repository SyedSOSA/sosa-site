import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">SOSA Consulting & Services</div>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li><Link href='/'><a>Home</a></Link></li>
              <li><Link href='/about'><a>About</a></Link></li>
              <li><Link href='/sosa'><a>Services</a></Link></li>
              <li><Link href='/blog'><a>Blog</a></Link></li>
              <li><Link href='/success-stories'><a>Success Stories</a></Link></li>
              <li><Link href='/contact'><a>Contact</a></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto p-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} SOSA Consulting & Services — Built with ❤️
        </div>
      </footer>
    </div>
  )
}
