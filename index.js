const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user — query parameters
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";

  res.json({ firstname, lastname });
});

// POST /user — path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;

  res.json({ firstname, lastname });
});

// POST /users — JSON body
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];

  res.json(users);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});