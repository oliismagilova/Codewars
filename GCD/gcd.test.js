const mygcd = require('./gcd');

test('mygcd() should return Greatest common divisor of 2 given positive integers', () => {
    expect(mygcd(30, 12)).toBe(6)
    expect(mygcd(36, 12)).toBe(12)
    expect(mygcd(8, 9)).toBe(1)
    expect(mygcd(1, 1)).toBe(1)

})