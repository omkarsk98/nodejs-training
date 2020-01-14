const _ = require("lodash")
const { people } = require("./data")

// using javascript
let average = people.reduce(function (total = 0, obj) {
    return total + obj.age
}, 0) / people.length
console.log("Average using js:",average)

// using lodash
let avg = _.meanBy(people, function (person) { return person.age })
console.log("Average using lodash",avg)