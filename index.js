const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world king kah");
});

app.get("/todos", (req, res) => {
  res.json({ name: "pankaj", age: 25, address: "Kolkata" });
});

app.get("/return/:id", (req, res) => {
  const message = req.params.id;

  res.send(message);
});

app.listen(3000, () => console.log("Server is runnign on port 3000...."));
