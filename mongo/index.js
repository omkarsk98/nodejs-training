const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./connection")
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const PORT = 3000;

const home = require('./routes/home');
const listDishes = require('./routes/listDishes');
const dishDetails = require('./routes/dishDetails');
const addComment = require("./routes/addComment");
const updateDish = require("./routes/updateDish");
const addDish = require("./routes/addDish");
const deleteComment = require("./routes/deleteComment");

mongo.connectToServer(function (err, client) {
  if (err) console.log(err);
  // start the rest of your app here
});

app.use("/", home);
app.use('/list', listDishes);
app.use("/add-dish", addDish);
app.use('/dish-details/:id', dishDetails);
app.use('/dish/:id/add-comment', addComment);
app.use("/dish/:id/update", updateDish);
app.use("/dish/delete-comment/:id/:dishId", deleteComment);

app.listen(PORT, () => console.info(`REST API running on port ${PORT}`))