const express = require("express");
const router = express.Router({ mergeParams: true });
const mongo = require("../connection")

router.get("/", function (req, res) {
    var db = mongo.getDb();
    db.collection('dishes').find({})
        .project({ _id: 0, id: 1, name: 1, category: 1, label: 1, price: 1 })
        .toArray()
        .then(result => {
            res.render("listDishes", { dishes: result });
        })
        .catch(err => console.log(err))
})

module.exports = router;