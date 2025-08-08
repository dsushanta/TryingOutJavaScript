const { length } = require('./Function');

test('should return the length of a string', () => {
  expect(length('hello')).toBe(5);
});
