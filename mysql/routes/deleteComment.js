const express = require("express");
const router = express.Router({ mergeParams: true });
const { conn } = require("../connection");

router.post("/", function(req, res) {
  let { params } = req;
  let query = `delete from comments where id=?;`;
  conn.query(query, [params.id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.redirect(`/dish/${params.dishId}`);
    }
  });
});

module.exports = router;
