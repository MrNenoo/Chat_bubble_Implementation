const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

// In-memory database for testing purposes
const users = [
  { id: 1, email: "test@example.com", password: "password123" },
  { id: 2, email: "user@example.com", password: "secret456" },
];

// Other necessary imports and configurations

app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // If the email and password are valid, generate a JWT token
  const token = jwt.sign({ email: user.email }, "your_secret_key");

  // Return the token as a response
  return res.json({ token });
});

// Other routes and server configurations

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
