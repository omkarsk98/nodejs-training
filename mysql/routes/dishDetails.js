const express = require("express");
const router = express.Router({ mergeParams: true });
const { conn } = require("../connection");
const moment = require("moment");

router.get("/", function(req, res, next) {
  let id = req.params.id;
  conn.query(
    `select * from dishes where id = ?; select id, dishId, rating, comment, author, date from comments where dishId = ?;`,
    [id, id],
    function(err, result) {
      if (err) {
        console.warn(err);
      } else {
        const data = {};
        data.dish = result.shift().shift();
        data.comments = result.shift();
        res.render("dishDetails", { data: data, moment: moment });
      }
    }
  );
});

module.exports = router;
