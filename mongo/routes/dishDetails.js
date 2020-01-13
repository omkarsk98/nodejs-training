const express = require("express");
const router = express.Router({ mergeParams: true });
const moment = require('moment');
const mongo = require("../connection");

router.get("/", function (req, res) {
    let id = req.params.id;
    const db = mongo.getDb();
    db.collection("dishes")
        .aggregate([
            { $match: { "id": parseInt(id) } },
            {
                $lookup:
                    { from: "comments", localField: "id", foreignField: "dishId", as: "comments" }
            }
        ])
        .toArray()
        .then(result => {
            res.render("dishDetails", { details: result.shift(), moment: moment })
        })
        .catch(error => {
            console.error(error)
        });
})

module.exports = router;