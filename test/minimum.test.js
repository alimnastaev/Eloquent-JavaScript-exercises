const min = require('../Ch.3:_Functions/minimum');

test('find minimum number in 2 numbers', () => {
  expect(min(1, 2)).toBe(1)
})

test('find minimum number in 2 numbers', () => {
  expect(min(1, 2)).not.toBe(2)
})

test('find minimum number in 2 numbers', () => {
  expect(min(0, 10)).toBe(0)
})

test('find minimum number in 2 numbers', () => {
  expect(min(0, -10)).not.toBe(0)
})
