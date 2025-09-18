import Layout from '../components/Layout'
export default function Login(){
  return (
    <Layout>
      <section className="py-12 container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <input className="w-full p-3 border rounded" placeholder="Password" type="password" />
          <button className="btn-primary">Login</button>
        </form>
      </section>
    </Layout>
  )
}
