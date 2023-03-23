const rgb = require('./RGBToHexConversion');

test('rgb() should return 6-char HEX', () => {
    expect(rgb(0,0,0)).toBe('000000')
    expect(rgb(0, 0, -20)).toBe('000000')
    expect(rgb(300,255,255)).toBe('FFFFFF')
    expect(rgb(173,255,47)).toBe('ADFF2F')
}
)


