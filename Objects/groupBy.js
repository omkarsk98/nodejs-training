const _ = require('lodash')

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

let vehicles = [
    { name: "audi", type: "car" },
    { name: "audi", type: "bus" },
    { name: "audi", type: "truck" },
    { name: "ferrari", type: "car" },
    { name: "bmw", type: "car" },
    { name: "ferrari", type: "van" },
    { name: "audi", type: "van" },
    { name: "bmw", type: "van" }
]

let byTypeL = _.groupBy(vehicles, function (i) { return i.name })
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
