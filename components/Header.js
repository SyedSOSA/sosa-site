import Link from 'next/link';
export default function Header(){ return (
  <header className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white p-4">
    <div className="max-w-5xl mx-auto flex items-center justify-between">
      <div className="text-xl font-bold">SOSA Consulting</div>
      <nav className="space-x-4">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/services"><a>Services</a></Link>
        <Link href="/marketplace"><a>Jobs</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/login"><a className="ml-2 border px-2 rounded">Login</a></Link>
      </nav>
    </div>
  </header>
)}
