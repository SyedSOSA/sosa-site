import posts from '../data/blogs.json'
export default function Blogs(){ return (<div className='max-w-5xl mx-auto p-8'><h1 className='text-2xl font-bold'>Blog</h1><ul className='mt-4 space-y-3'>{posts.map(p=> (<li key={p.id} className='border p-4 rounded'><h3 className='font-semibold'>{p.title}</h3><p className='text-sm'>{p.excerpt}</p></li>))}</ul></div>) }
