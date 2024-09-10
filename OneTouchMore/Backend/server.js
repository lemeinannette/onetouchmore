const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS
const path = require("path");
const app = express();
const port = 5000; // Change port to avoid conflicts with React

// Middleware to parse JSON and form data
app.use(cors()); // Use CORS middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files if needed
app.use(express.static(path.join(__dirname, "public")));

// Basic route to test the server
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Mock user data (replace this with real user data from your database)
  const mockUser = {
    username: "testuser",
    password: "testpassword",
  };

  // Simple login logic with redirection
  if (username === mockUser.username && password === mockUser.password) {
    // Respond with success status
    res.json({ message: "Login successful!", redirect: "/dashboard" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

// Dashboard route
app.get("/dashboard", (req, res) => {
  res.send("Welcome to the dashboard!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
