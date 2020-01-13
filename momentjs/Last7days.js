const moment = require('moment');

// console.log(Date(new Date()))

// using javascript
let today = new Date();
let offset = today.getTimezoneOffset() * 60 * 1000;
prev = new Date().setDate(today.getDate() - 7)
console.log("Previous date", new Date(prev-offset).toISOString())

let prevM = moment().subtract(7, 'd').format();
console.log("Previous date", prevM);
console.log(moment().format())