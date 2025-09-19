import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const usersPath = path.join(process.cwd(), 'api/users.json');
    const users = JSON.parse(fs.readFileSync(usersPath));
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Logged in' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
