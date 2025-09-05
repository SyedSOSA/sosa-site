
export default function Services() {
  const services = [
    "Resume Writing & Review",
    "Career Development Coaching",
    "Interview Preparation",
    "Corporate Training",
    "Team Building",
    "Leadership Development",
    "Executive Coaching",
    "Life Coaching",
    "Business Setup (UAE)"
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{service}</h2>
            <p className="text-gray-600 mb-4">Expert guidance and solutions in {service.toLowerCase()}.</p>
            <a href="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition">Book Consultation</a>
          </div>
        ))}
      </div>
    </div>
  )
}
