const express = require("express");
const router = express.Router({ mergeParams: true });
const uuid = require("uuid");
const mongo = require("../connection");

router.get("/", function (req, res) {
    let id = req.params.id;
    res.render("addComment", { id: id })
})

router.post("/", function (req, res) {
    let id = uuid.v1();
    let { body, params } = req;
    const db = mongo.getDb();
    const myObj = {
        id: id,
        dishId: parseInt(params.id),
        rating: parseInt(body.rating),
        comment: body.comment,
        author: body.name,
        date: new Date()
    }
    db.collection("comments")
        .insertOne(myObj)
        .then(result => {
            res.redirect(`/dish-details/${params.id}`)
        })
        .catch(err => console.error(err))
})

module.exports = router;