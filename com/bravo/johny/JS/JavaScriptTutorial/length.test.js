const { length } = require('./Function');

test('should return the length of a stringgg', () => {
  expect(length('hello')).toBe(5);
});
