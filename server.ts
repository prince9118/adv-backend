import express from "express";

const app = express();
app.use(express.json());

// In-memory user store for demonstration
const users = new Map();

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (users.has(username)) {
    return res.status(409).json({ error: "Username already exists" });
  }
  users.set(username, { username, email, password });
  console.log("Signup attempt:", { username, email });
  res.status(201).json({ message: "User created successfully" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const user = users.get(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ message: "Login successful", username: user.username });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});