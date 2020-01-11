const mongo = require("../connection")

const getComments = function (id) {
    var db = mongo.getDb();
    return db.collection('comments')
        .find({ dishId: parseInt(id) })
        .toArray()
}

exports.getComments = getComments;