const square = require('./ArrayMethods');
const cube = require('./ArrayMethods');
const sum = require('./ArrayMethods');
const average = require('./ArrayMethods');
const even = require('./ArrayMethods');
const odd = require('./ArrayMethods');

describe ('Array Methods', () => {
var numbers = [1, 2, 3, 4, 5];
var array = [1, 'three', 2,3,4]

test('square() should return the square of each element', () => {
   expect(numbers.square()).toStrictEqual([ 1, 4, 9, 16, 25 ])
    expect(array.square()).toStrictEqual([ 1, 0, 4, 9, 16 ])
})

test('cube() should return el ** 3', () => {
   expect(numbers.cube()).toStrictEqual([ 1, 8, 27, 64, 125 ])
   expect(array.cube()).toStrictEqual([ 1, 0, 8, 27, 64 ]
)
})

test('sum() should return the sum of all elements', () => {
   expect(numbers.sum()).toStrictEqual(15)
   expect(array.sum()).toStrictEqual(10)

})

test('average() should return the average element among others', () => {
   expect(numbers.average()).toStrictEqual(3)
   expect(array.average()).toStrictEqual(2)
})
test('even() should return the new array of even numebrs', () => {
   expect(numbers.even()).toStrictEqual([ 2, 4 ])
   expect(array.even()).toStrictEqual([ 2, 4 ])
   expect([1, 'three', 2,3, ' '].even()).toStrictEqual([ 2 ])

})

test('odd() should return the new array of odd numbers', () => {
   expect(numbers.odd()).toStrictEqual([ 1, 3, 5 ])
   expect(array.odd()).toStrictEqual([ 1, 3 ])

}) 
})
