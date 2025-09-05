
export default function Contact(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form action="https://formspree.io/f/mayvowqe" method="POST" className="space-y-3 max-w-md">
        <input name="name" placeholder="Name" required className="w-full p-2 border border-gray-800 rounded"/>
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 border border-gray-800 rounded"/>
        <input type="tel" name="phone" placeholder="Phone" className="w-full p-2 border border-gray-800 rounded"/>
        <select name="service" className="w-full p-2 border border-gray-800 rounded">
          <option>Resume Writing & Review</option>
          <option>Career Development Coaching</option>
          <option>Interview Preparation</option>
          <option>Corporate Training</option>
          <option>Team Building</option>
          <option>Leadership Development</option>
          <option>Executive Coaching</option>
          <option>Life Coaching</option>
          <option>Business Setup</option>
        </select>
        <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-800 rounded"/>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </div>
  )
}
