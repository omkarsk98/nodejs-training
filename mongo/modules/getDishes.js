const mongo = require("../connection")

const getDish = async function (id) {
    var db = mongo.getDb();
    let details = db.collection('dishes')
        .find({ id: parseInt(id) })
        .toArray()
    return details;
}

exports.getDish = getDish;