import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-4">Reach out via email or send a quick message using the form. We usually reply within 24-48 hours.</p>

        <form action="https://formsubmit.co/syed@sosaconsult.com" method="POST" className="space-y-4 max-w-xl">
          <input type="hidden" name="_subject" value="New contact from SOSA site" />
          <input type="text" name="name" className="w-full p-3 border rounded" placeholder="Your name" required />
          <input type="email" name="email" className="w-full p-3 border rounded" placeholder="Your email" required />
          <input type="text" name="phone" className="w-full p-3 border rounded" placeholder="Phone (optional)" />
          <textarea name="message" className="w-full p-3 border rounded" placeholder="Message" rows="6" required></textarea>
          <button type="submit" className="px-6 py-3 bg-[var(--sosa-primary)] text-white rounded">Send Message</button>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Our Office (Optional)</h3>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">Google Map Embed Placeholder</div>
        </div>
      </section>
    </Layout>
  )
}
