const square = require('./ArrayMethods');
const cube = require('./ArrayMethods');
const sum = require('./ArrayMethods');
const average = require('./ArrayMethods');
const even = require('./ArrayMethods');
const odd = require('./ArrayMethods');

describe ('Array Methods', () => {
var numbers = [1, 2, 3, 4, 5];

test('square() should return the square of each element', () => {
   expect(numbers.square()).toStrictEqual([ 1, 4, 9, 16, 25 ])
})

test('cube() should return el ** 3', () => {
   expect(numbers.cube()).toStrictEqual([ 1, 8, 27, 64, 125 ])
})

test('sum() should return the sum of all elements', () => {
   expect(numbers.sum()).toStrictEqual(15)
})

test('average() should return the average element among others', () => {
   expect(numbers.average()).toStrictEqual(3)
})

test('even() should return the new array of even numebrs', () => {
   expect(numbers.even()).toStrictEqual([ 2, 4 ])
})

test('odd() should return the new array of odd numbers', () => {
   expect(numbers.odd()).toStrictEqual([ 1, 3, 5 ])
}) 
})




