
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Placeholder: integrate with email service or SMTP to send job posts to syed@sosaconsult.com
    res.status(200).json({ ok: true, message: 'Received (skeleton). Configure email sending in api/post-job.js' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
