import { useState } from 'react'

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0)
  const visible = 3
  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(i + 1, Math.max(0, items.length - visible)))

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <button onClick={prev} className="px-3 py-1 bg-white rounded shadow">◀</button>
        <button onClick={next} className="px-3 py-1 bg-white rounded shadow">▶</button>
      </div>

      <div className="overflow-hidden">
        <div style={{ display: 'flex', gap: '1rem', transform: `translateX(-${index * (100 / visible)}%)`, transition: 'transform 0.4s ease' }}>
          {items.map((it, idx) => (
            <div key={idx} style={{ minWidth: `${100 / visible}%` }} className="p-2">
              <div className="p-4 bg-white rounded-lg shadow h-full">
                <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">Image</div>
                <h4 className="font-semibold">{it.name}</h4>
                <div className="text-sm text-gray-500">{it.role} — {it.location}</div>
                <p className="mt-2 text-gray-700">{it.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
