const express = require("express");
const router = express.Router({ mergeParams: true });
const { conn } = require("../connection");
const uuid = require("uuid");

router.get("/", function(req, res, next) {
  let id = req.params.id;
  res.render("addComment", { id: id });
});

router.post("/", function(req, res) {
  let id = uuid.v1();
  let { body, params } = req;
  let query = `insert into comments(id,dishId, rating, comment, author) values(?,?,?,?,?)`
  conn.query(query,[id,params.id, body.rating,body.comment,body.name],(err,result)=>{
    if(err)
      res.send(err)
    else
      res.redirect(`/dish/${params.id}`)
  })
});

module.exports = router;
