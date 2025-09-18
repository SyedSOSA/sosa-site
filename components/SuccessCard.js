export default function SuccessCard({ person }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <img src={person.image} alt={person.name} className="card-img mb-4" />
      <h3 className="text-lg font-semibold">{person.name}</h3>
      <div className="text-sm text-gray-500">{person.role} — {person.location}</div>
      <p className="mt-3 text-gray-700">{person.story}</p>
    </div>
  )
}
