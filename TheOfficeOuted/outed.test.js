const outed = require('./outed');

test('outed() should return the overall happiness rating of the group', () => {
let obj = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}
  expect(outed(obj, 'laura')).toBe('Get Out Now!');
});
test('outed() should return the overall happiness rating of the group', () => {
let obj = {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}
  expect(outed(obj, 'katie')).toBe('Nice Work Champ!');
});
test('outed() should return the overall happiness rating of the group', () => {
let obj = {'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}
  expect(outed(obj, 'john')).toBe('Get Out Now!');
});
test('outed() should return the overall happiness rating of the group', () => {
let obj = {'tim':0, 'jim':0, 'randy':10, 'sandy':2, 'andy':6, 'katie':7, 'laura':8, 'saajid':6, 'alex':10, 'john':10, 'mr':0}
  expect(outed(obj, '')).toBe('Nice Work Champ!');
});
test('outed() should return the overall happiness rating of the group', () => {
let obj = {'tim':0, 'jim':0, 'randy':0, 'sandy':0, 'andy':0, 'katie':0, 'laura':0, 'saajid':0, 'alex':0, 'john':0, 'mr':0}
  expect(outed(obj, '')).toBe('Get Out Now!');
});