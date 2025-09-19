import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const usersPath = path.join(process.cwd(), 'api/users.json');
    const users = JSON.parse(fs.readFileSync(usersPath));
    const { email, password } = req.body;

    if (users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    users.push({ email, password });
    fs.writeFileSync(usersPath, JSON.stringify(users));
    res.status(200).json({ message: 'User created' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
