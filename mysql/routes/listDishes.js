const express = require("express");
const router = express.Router();
const { conn } = require("../connection");

router.get("/", function(req, res, next) {
  conn.query("select * from dishes;", function(err, result) {
    if (err) {
      console.warn(err);
    } else {
      res.render("list", { data: result });
    }
  });
});

module.exports = router;
