const findDuplicatePhoneNumbers = require('./PhoneNumbers')

describe ('Find duplicates', () => {
var testArr1 = [
"7399425",
"SEXY-GAL",
"Sexy-GAL",
"sexy-gal",
"SEXY-425",
"S-E-X-Y-G-A-L"
]
var res1 = ["739-9425:6"]

var testArr2 =  [
"4873279",
"ITS-EASY",
"888-4567",
"3-10-10-10",
"888-GLOP",
"TUT-GLOP",
"967-11-11",
"310-GINO",
"F101010",
"888-1200",
"-4-8-7-3-2-7-9-",
"487-3279"]

var res2 =  [
"310-1010:2",
"487-3279:4",
"888-4567:3"]

test('findDuplicatePhoneNumbers() should return an array in the format [phoneNumber: count of dups]', () => {
    expect(findDuplicatePhoneNumbers(testArr1)).toStrictEqual(res1)
    expect(findDuplicatePhoneNumbers(testArr2)).toStrictEqual(res2)
})
})