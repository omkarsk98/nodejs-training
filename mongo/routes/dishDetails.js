const express = require("express");
const router = express.Router({ mergeParams: true });
const moment = require('moment');
const { getDish } = require("../modules/getDishes");
const { getComments } = require("../modules/getComments");

router.get("/", function (req, res) {
    let id = req.params.id;

    Promise.all([getDish(id), getComments(id)])
        .then(result => {
            const details = result.shift().shift();
            details.comments = result.shift();
            res.render("dishDetails", { details: details, moment: moment })
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router;