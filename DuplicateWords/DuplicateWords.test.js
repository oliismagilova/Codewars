const removeDuplicateWords= require('./DuplicateWords');

describe ('Duplicate Words', () => {
let string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
let string1 = 'alpha beta 2 gamma gamma gamma 2 alpha beta 3  gamma gamma 3 delta'
test('removeDuplicateWords should remove duplicate words from given string', () => {
    expect(removeDuplicateWords(string)).toStrictEqual('alpha beta gamma delta')
    expect(removeDuplicateWords(string1)).toStrictEqual('alpha beta 2 gamma 3  delta')
}) 
})