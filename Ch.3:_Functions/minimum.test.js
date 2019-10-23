function min(a, b) {
  if (a < b) return a
  else return b
}

// console.log(min(0, 10))
// // → 0
// console.log(min(0, -10))
// // -10

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
