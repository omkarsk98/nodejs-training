const express = require("express");
const router = express.Router({ mergeParams: true });
const { conn } = require("../connection");

router.get("/", function(req, res, next) {
  let id = req.params.id;
  let query = `select * from dishes where id = ?;`;
  conn.query(query, [id], (err, result) => {
    if (err) res.send(err);
    if (result.length === 0) res.render("noData");
    else {
      res.render("updateDish", { data: result.shift() });
    }
  });
});

router.post("/", function(req, res) {
  console.log("Saving dish")
  let { body, params } = req;
  let query = `update dishes set name=?, category=?, label=?, price=? where id=?;`;
  conn.query(
    query,
    [body.name, body.category, body.label, body.price, params.id],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        console.log(result);
        res.redirect(`/list`);
      }
    }
  );
});

module.exports = router;
