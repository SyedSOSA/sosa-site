
import Link from 'next/link';

export default function Home(){
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to SOSA Consulting & Services</h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        We help professionals and businesses with Career Development, Interview Preparation, 
        Corporate Training, Business Setup, and more. 
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/services" className="px-4 py-2 bg-indigo-600 text-white rounded">Our Services</Link>
        <Link href="/contact" className="px-4 py-2 border border-gray-700 rounded">Get in Touch</Link>
      </div>
    </div>
  )
}
