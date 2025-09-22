import data from '../data/testimonials.json'
export default function Testimonials(){ return (<div className='max-w-5xl mx-auto p-8'><h1 className='text-2xl font-bold'>Testimonials</h1><div className='mt-4 space-y-4'>{data.map(t=> (<div key={t.name} className='p-4 border rounded'><strong>{t.name}</strong><p className='text-sm'>{t.story}</p></div>))}</div></div>) }
