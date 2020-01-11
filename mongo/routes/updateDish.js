const express = require("express");
const router = express.Router({ mergeParams: true });
const mongo = require("../connection")

router.get("/", function (req, res, next) {
    let id = parseInt(req.params.id);
    const db = mongo.getDb();
    db.collection("dishes")
        .find({ id })
        .toArray()
        .then(result => {
            res.render("updateDish", { dish: result.shift() })
        })
        .catch(err => console.log(err))
});

router.post("/", function (req, res) {
    let { body, params } = req;
    var myQuery = { id: parseInt(params.id) };
    var newValues = { $set: { name: body.name, category: body.category, label: body.label, price: parseFloat(body.price) } };
    const db = mongo.getDb();
    db.collection("dishes")
        .updateOne(myQuery, newValues)
        .then(result => {
            res.redirect("/list")
        })
        .catch(err => console.error(err))
});

module.exports = router;
