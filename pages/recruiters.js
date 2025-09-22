export default function Recruiters() {
  return (
    <main style={{ padding: 40 }}>
      <h1 className="text-2xl font-bold">Recruiters</h1>
      <p className="mt-4 text-gray-700">
        Partner with SOSA Consulting to find the right talent for your organization.
      </p>
      <form className="mt-6 space-y-4 max-w-md" action="https://formsubmit.co/syed@sosaconsult.com" method="POST">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="position"
          placeholder="Position Title"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="details"
          placeholder="Job Details"
          className="w-full border p-2 rounded"
          rows="4"
        ></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </main>
  );
}
