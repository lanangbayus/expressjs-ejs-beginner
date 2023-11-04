const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

const tagsData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/t/:tag", (req, res) => {
  const { tag } = req.params;
  const data = tagsData[tag];
  if (!data) {
    res.render("404", { tag });
  } else {
    res.render("tag", { data });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.render("random", { num });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
