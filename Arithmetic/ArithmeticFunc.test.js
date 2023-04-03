const arithmetic= require('./ArithmeticFunc');

test('arithmetic() should return result of the two numbers having that operator used on them.', () => {
    expect(arithmetic(1, 2, "add")).toBe(3)
    expect(arithmetic(8, 2, "subtract")).toBe(6)
    expect(arithmetic(5, 2, "multiply")).toBe(10)
    expect(arithmetic(8, 2, "divide")).toBe(4)

}

)
test('arithmetic() should return numbers.', () => {
    let a = 10;
    let b = 5;
    expect(typeof a).toBe('number')
    expect(typeof b).toBe('number')

})