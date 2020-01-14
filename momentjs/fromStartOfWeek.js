const moment = require('moment');

function getStartOfWeek(date = new Date()) {
    let dayDiff = date.getDay() - 1;
    dayDiff = dayDiff === -1 ? 6 : dayDiff;
    let start = new Date()
    start = new Date(start.setDate(date.getDate() - dayDiff))
    let dates = []
    for (let i = 0; i <= date.getDay() - 1; i++) {
        let temp = new Date()
        let j = new Date(temp.setDate(start.getDate() + i))
        dates.push(`${j.getDate()}/${j.getUTCMonth() + 1}/${j.getFullYear()}`)
    }
    return dates
}

console.log(getStartOfWeek(new Date()))
console.log(getStartOfWeek(new Date("Fri Jan 17 2020 11:35:57 GMT+0530 (India Standard Time)")))
// console.log(getStartOfWeek(new Date("Sun Jan 19 2020 11:35:57 GMT+0530 (India Standard Time)")))
// console.log(getStartOfWeek(new Date("Mon Jan 20 2020 11:35:57 GMT+0530 (India Standard Time)")))

console.log("\nUsing moment")
function getStartOfWeekUsingMoment(date = moment().format()) {
    let dates = []
    for (let i = 1; i <= moment(date).day() ; i++) {
        dates.push(moment(date).day(i).format("DD/M/YYYY"))
    }
    return dates
}
console.log(getStartOfWeekUsingMoment(moment().format()))
console.log(getStartOfWeekUsingMoment(moment("17/01/2020", "DD/MM/YYYY").format()))
console.log(getStartOfWeekUsingMoment(moment("01/01/2020", "DD/MM/YYYY").format()))
// console.log(getStartOfWeekUsingMoment(moment("20/01/2020", "DD/MM/YYYY").format()))

// start = moment().day(1);
// console.log(start.format("DD/MM/YYYY"))