export default function SuccessCard({ person }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="h-40 w-full bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">Image</div>
      <h3 className="text-lg font-semibold">{person.name}</h3>
      <div className="text-sm text-gray-500">{person.role} — {person.location}</div>
      <p className="mt-3 text-gray-700">{person.story}</p>
    </div>
  )
}
