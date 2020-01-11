const express = require("express");
const router = express.Router({ mergeParams: true });
const mongo = require("../connection");

router.post("/", function (req, res) {
    let { params } = req;
    const db = mongo.getDb();
    db.collection("comments")
        .deleteOne({ id: params.id })
        .then(result => {
            res.redirect(`/dish-details/${params.dishId}`)
        })
        .catch(err => {
            console.error(err)
        })
});

module.exports = router;
