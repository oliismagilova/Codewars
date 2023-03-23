const twoSum = require('./TwoSum');

test('twoSum() should return indexes of 2 elements that are equal to target', () => {
    expect(twoSum([-457, 928, -962, 491, -335, 5, -142, 883, 181, -974, 457], 426)).toStrictEqual([0, 7])
    expect(twoSum([1,2,3],4)).toStrictEqual([0,2])
    expect(twoSum([1234,5678,9012], 14690)).toStrictEqual([1,2])
    expect(twoSum([2,2,3],4)).toStrictEqual([0,1])
    expect(twoSum([2,3,1],4)).toStrictEqual([1,2])
}
)