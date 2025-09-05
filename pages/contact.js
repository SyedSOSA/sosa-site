
export default function Contact(){
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form action="https://formspree.io/f/mayvowqe" method="POST" className="space-y-3 max-w-md">
        <input name="name" placeholder="Name" className="w-full p-2 border border-gray-800 rounded"/>
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-800 rounded"/>
        <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-800 rounded"/>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </div>
  )
}
