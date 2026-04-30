import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Get all entries
app.get('/api/entries', (req, res) => {
  const entries = db.prepare('SELECT * FROM entries ORDER BY date DESC').all();
  res.json(entries);
});

// Add entry
app.post('/api/entries', (req, res) => {
  const { title, content } = req.body;
  const info = db.prepare('INSERT INTO entries (title, content) VALUES (?, ?)').run(title, content);
  res.status(201).json({ id: info.lastInsertRowid, title, content });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
