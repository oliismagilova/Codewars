const convertHashToArray = require('./HashToArray')

describe ('Find duplicates', () => {
var obj1 = {name: "Jeremy"}
var res1 = [["name", "Jeremy"]]

var obj2 = {name: "Jeremy", age: 24}
var res2 = [["age", 24], ["name", "Jeremy"]]

var obj3 = {name: "Jeremy", age: 24, role: "Software Engineer"}
var res3 = [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

var obj4 = {product: "CodeWars", powerLevelOver: 9000}
var res4 = [["powerLevelOver", 9000], ["product", "CodeWars"]]

var obj5 = {}
var res5 = []

test('convertHashToArray() should return an array in the format [["key", "value"]]', () => {
    expect(convertHashToArray(obj1)).toStrictEqual(res1)
    expect(convertHashToArray(obj2)).toStrictEqual(res2)
    expect(convertHashToArray(obj3)).toStrictEqual(res3)
    expect(convertHashToArray(obj4)).toStrictEqual(res4)
    expect(convertHashToArray(obj5)).toStrictEqual(res5)
})
})
