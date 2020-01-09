const express = require("express");
const router = express.Router({ mergeParams: true });
const { conn } = require("../connection");
const uuid = require("uuid");

router.get("/", function(req, res, next) {
  res.render("addDish");
});

router.post("/", function(req, res) {
  let { body} = req;
  let id = uuid.v1();
  let query = `insert into dishes (id,name, category, label, price, featured, description) values(?,?,?,?,?,?,?)`;
  conn.query(
    query,
    [
      id,
      body.name,
      body.category,
      body.label,
      body.price,
      true,
      body.description
    ],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.redirect(`/list`);
      }
    }
  );
});

module.exports = router;
