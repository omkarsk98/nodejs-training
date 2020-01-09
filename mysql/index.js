const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const list = require("./routes/listDishes");
const dishDetails = require("./routes/dishDetails");
const addComment = require("./routes/addComment");
const updateDish = require("./routes/updateDish");
const addDish = require("./routes/addDish");
const deleteComment = require("./routes/deleteComment");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/list", list);
app.use("/add-dish", addDish);
app.use("/dish/:id", dishDetails);
app.use("/dish/:id/add-comment", addComment);
app.use("/dish/:id/update", updateDish);
app.use("/dish/delete-comment/:id/:dishId", deleteComment);


const PORT = 3000;
app.listen(PORT, () => {
  console.log("App running on http://localhost:3000");
});
