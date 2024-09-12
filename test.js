// const { default: expect } = require('expect');
// const { sum, fromEuroToDollar } = require('./app.js');
// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14,9);
//     expect(total).toBe(23);
// });

// const { test } = require('picomatch');

test('fromEuroToDollar', function(){
    const { fromEuroToDollar} = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745)
});
test('fromDollarToYen', function(){
    const { fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724)
});
test('fromYenToPound', function(){
     const {fromYenToPound} = require('./app.js');
     expect(fromYenToPound(56)).toBeCloseTo(0.3113099)
});