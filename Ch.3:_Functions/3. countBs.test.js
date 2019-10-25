// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position
// string.length - 1. In other words, a two-character string has length 2,
// and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes
// a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters).

// Rewrite countBs to make use of this new function.

/* 

Expected output:

console.log(countBs("BBC"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4

*/

function countBs(str) {
  return countChar(str, 'B')
}

function countChar(str, letter) {
  let result = 0
  for (let l = 0; l < str.length; l++) {
    if (str[l] == letter) {
      result += 1
    }
  }
  return result
}

describe('countBs testing', () => {
  test('succes case to count Bs', () => {
    expect(countBs('BBC')).toEqual(2)
  })

  test('fail case to count Bs if wrong type argument', () => {
    expect(countBs(2)).not.toEqual(2)
  })
})

describe('countChar testing', () => {
  test('succes case to count char', () => {
    expect(countChar('kakkerlak', 'k')).toEqual(4)
  })

  test('fail case to count char if argument is missing', () => {
    expect(countChar('kakkerlak')).not.toEqual(4)
  })

  test('fail case to count char if type of arguments is wrong', () => {
    expect(countChar('kakkerlak', 4)).not.toEqual(4)
  })
})
