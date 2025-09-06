export default function Home() {
  return (
    <section
      className="h-96 flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.jpg')" }}
    >
      <h1 className="text-4xl font-bold">SOSA Consulting & Services</h1>
      <p className="mt-4 text-xl">Transforming Resumes, Coaching Careers, Building Futures.</p>
      <div className="mt-6">
        <a href="/services" className="bg-yellow-500 px-4 py-2 rounded text-black mr-3">Explore Services</a>
        <a href="/contact" className="bg-white px-4 py-2 rounded text-blue-900">Book Consultation</a>
      </div>
    </section>
  )
}
