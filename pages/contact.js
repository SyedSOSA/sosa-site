
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <form className="space-y-4 bg-white p-6 shadow rounded-xl">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="tel" placeholder="Phone" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Service Interested</option>
          <option>Resume Writing</option>
          <option>Interview Prep</option>
          <option>Coaching</option>
          <option>Business Setup</option>
        </select>
        <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition">Submit</button>
      </form>
    </div>
  )
}
