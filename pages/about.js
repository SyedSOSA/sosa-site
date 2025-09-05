
export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <img src="/images/about.jpg" alt="Teamwork" className="mb-6 rounded-lg shadow" />
      <h1 className="text-3xl font-bold text-blue-900 mb-6">About Us</h1>
      <p className="mb-4">
        At <strong>SOSA Consulting & Services</strong>, we empower professionals, students, and corporates across India, UAE, and global markets.
        With over a decade of expertise, our mission is to unlock opportunities, accelerate growth, and shape future leaders.
      </p>
      <h2 className="text-2xl font-bold text-blue-800 mt-8">Our Core Values</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <li className="p-4 bg-white shadow rounded"><strong>Integrity</strong> – Honest, transparent, and ethical solutions.</li>
        <li className="p-4 bg-white shadow rounded"><strong>Excellence</strong> – Striving for the highest quality in everything we do.</li>
        <li className="p-4 bg-white shadow rounded"><strong>Empowerment</strong> – Helping individuals and teams reach their potential.</li>
        <li className="p-4 bg-white shadow rounded"><strong>Innovation</strong> – Adopting future-ready methods to lead industries.</li>
        <li className="p-4 bg-white shadow rounded"><strong>Collaboration</strong> – Partnering for shared success.</li>
      </ul>
      <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-4">Business Setup Services</h2>
      <img src="/images/dubai.jpg" alt="Dubai Skyline" className="mb-6 rounded-lg shadow" />
      <p className="text-gray-700">
        Expanding into the UAE? We simplify the process for entrepreneurs and businesses by providing Mainland Registration,
        Freezone Licensing, Offshore Setup, and complete PRO & Legal support.
      </p>
    </div>
  )
}
