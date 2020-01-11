const express = require("express");
const router = express.Router({ mergeParams: true });
const mongo = require("../connection")
const uuid = require("uuid-int");

router.get("/", function (req, res, next) {
    res.render("addDish");
});

router.post("/", function (req, res) {
    let { body } = req;
    let id = uuid(0).uuid();
    const db = mongo.getDb();
    const myObj = {
        id: id,
        name: body.name,
        category: body.category,
        label: body.label,
        price: parseFloat(body.price),
        featured: true,
        description: body.description
    }
    db.collection("dishes")
        .insertOne(myObj)
        .then(result => {
            res.redirect('/list')
        })
        .catch(err => {
            res.send(err);
            console.log(err);
        })
});

module.exports = router;
