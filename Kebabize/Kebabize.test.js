const kebabize = require("./Kebabize")


describe ('Kebabize given string', () => {

test('Kebibize should return a kebab case', () => {
    expect(kebabize('myCamelCasedString')).toStrictEqual('my-camel-cased-string')
    expect(kebabize('myCamelHas3Humps')).toStrictEqual('my-camel-has-humps')
    expect(kebabize('CAMEL')).toStrictEqual('c-a-m-e-l')
    expect(kebabize('H')).toStrictEqual('h')
    expect(kebabize('zdN')).toStrictEqual('zd-n')
})
})
