
const services = [
  { title: "Resume Writing & Review", img: "/images/resume.png" },
  { title: "Career Development Coaching", img: "/images/coaching.png" },
  { title: "Interview Preparation", img: "/images/interview.png" },
  { title: "Corporate Training", img: "/images/training.png" },
  { title: "Team Building", img: "/images/team.png" },
  { title: "Leadership Development", img: "/images/leadership.png" },
  { title: "Executive Coaching", img: "/images/executive.png" },
  { title: "Life Coaching", img: "/images/life.png" },
  { title: "Business Setup (UAE)", img: "/images/business.png" }
];

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-xl border border-gray-200 text-center">
            <img src={service.img} alt={service.title} className="h-20 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">Expert guidance in {service.title.toLowerCase()}.</p>
            <a href="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition">Book Consultation</a>
          </div>
        ))}
      </div>
    </div>
  )
}
