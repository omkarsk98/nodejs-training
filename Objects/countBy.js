const _ = require("lodash");
const { vehicles } = require("./data")

//  javascript count by name
let counts = {};
vehicles.forEach(function (vehicle) {
    counts[vehicle.name] = (counts[vehicle.name] || 0) + 1
})
console.log("count of each name using js",counts)

// using lodash
let countsL = _.countBy(vehicles, function(i){
    return i.name
})

console.log("count of each name using lodash",countsL)