const { f } = require('./Function');

test('should return a greeting', () => {
  expect(f('Joey', 30)).toBe('Hello Joey. Your age is : 30');
});

test('should return a greeting with default age', () => {
  expect(f('Joey')).toBe('Hello Joey. Your age is : 20');
});
