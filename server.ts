import express from "express";

const app = express();
app.use(express.json());

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  // In a real app, hash password and save to DB
  console.log("Signup attempt:", { username, email });
  res.status(201).json({ message: "User created successfully" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});