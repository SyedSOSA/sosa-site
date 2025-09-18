import Layout from '../components/Layout'
export default function Contact(){
  return (
    <Layout>
      <section className="py-12 container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-4">Phone: +919535143786 | Email: syed@sosaconsult.com</p>
        <form action="https://formsubmit.co/syed@sosaconsult.com" method="POST" className="space-y-4">
          <input type="hidden" name="_subject" value="New SOSA contact" />
          <input name="name" placeholder="Your name" className="w-full p-3 border rounded" required />
          <input name="email" placeholder="Your email" className="w-full p-3 border rounded" required />
          <input name="phone" placeholder="Phone" className="w-full p-3 border rounded" />
          <textarea name="message" placeholder="Message" rows="6" className="w-full p-3 border rounded" required></textarea>
          <button className="btn-primary" type="submit">Send Message</button>
        </form>
      </section>
    </Layout>
  )
}
