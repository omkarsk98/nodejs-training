const _ = require('lodash')
const { vehicles } = require("./data")
let expected = JSON.stringify({
    "audi": {
        "car": [
            { name: "audi", type: "car" }
        ],
        "bus": [
            { name: "audi", type: "bus" }
        ],
        "truck": [
            { name: "audi", type: "truck" }
        ],
        "van": [
            { name: "audi", type: "van" }
        ]
    },
    "ferrari": {
        "car": [
            { name: "ferrari", type: "car" }
        ],
        "van": [
            { name: "ferrari", type: "van" }
        ]
    },
    "bmw": {
        "car": [
            { name: "bmw", type: "car" }
        ],
        "van": [
            { name: "bmw", type: "van" }
        ]
    }
})

let byTypeL = _.groupBy(vehicles, 'name')
// console.log("By Type", byTypeL)
let resL = _.forEach(byTypeL, function (value, key) {
    byTypeL[key] = _.groupBy(value, function (i) { return i.type })
})
console.log(JSON.stringify(resL) === expected)

// using javascript
let res = {}
for (i of vehicles) {
    (res[i.name] = res[i.name] || []).push(i)
}
let final = {}
Object.keys(res).forEach(function (i) {
    final[i] = {}
    for (j of res[i]) {
        (final[i][j.type] = final[i][j.type] || []).push(j)
    }
})
console.log(JSON.stringify(final)===expected)
