const { fromJSON } = require("convert-source-map");

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let fromDollarToYen = (dollarValor) => {
    let euros = dollarValor/oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}
let fromEuroToDollar = (euroValor) => {
    return euroValor * oneEuroIs.USD;
}
let fromYenToPound = (yenValor) => {
    let yen = yenValor / oneEuroIs.JPY
    return yen * oneEuroIs.GBP;
}
module.exports = {
    fromDollarToYen, fromEuroToDollar, fromYenToPound

};