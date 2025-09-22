export default function handler(req, res){ 
  if (req.method === 'POST') {
    console.log('Received job post', req.body);
    return res.status(200).json({ ok: true });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
