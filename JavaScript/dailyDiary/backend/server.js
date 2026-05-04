import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;
const token = process.env.ADMIN_TOKEN;

console.log("ADMIN_TOKEN loaded, length:", token ? token.length : "undefined");
if (token) {
  console.log(
    "Token starts with:",
    token.substring(0, 5),
    "ends with:",
    token.substring(token.length - 5),
  );
}

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.get("/api/entries", (req, res) => {
  const entries = db.prepare("SELECT * FROM entries ORDER BY date DESC").all();
  res.json(entries);
});

const checkAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === token) {
    next();
  } else {
    res.status(401).json({ error: "Invalid token" });
  }
};

app.post("/api/entries", checkAuth, (req, res) => {
  const { title, content } = req.body;
  const info = db
    .prepare("INSERT INTO entries (title, content) VALUES (?, ?)")
    .run(title, content);
  res.status(201).json({ id: info.lastInsertRowid, title, content });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
