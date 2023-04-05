const pluck = require('./pluck');

test('pluck() should a sequence containing the named property of each object', () => {
    expect(pluck([{a:1}, {a:2}], 'a')).toStrictEqual([1,2])
    expect(pluck([{a:1, b:3}, {a:2}], 'b')).toStrictEqual([3, undefined])
    expect(pluck([{a:1, b:3}, {a:2}], '')).toStrictEqual([undefined, undefined])
    expect(pluck([{a:'a', b:3}, {a:2}], 'a')).toStrictEqual(['a',2])


})
