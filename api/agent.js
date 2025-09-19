import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    const response = await fetch('https://api.googleapis.com/gemini/v1/query?key=AIzaSyDIKc96jiFKaI2iBxe3WFa_ExZfhRpfzNU', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    res.status(200).json({ output: data });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
