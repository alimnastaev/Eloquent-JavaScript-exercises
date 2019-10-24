// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern,
// define a binding size = 8 and change the program so that it works
// for any size, outputting a grid of the given width and height.

function chessboard(size) {
  let board = ''

  for (let height = 0; height < size; height++) {
    for (let width = 0; width < size; width++) {
      if ((height + width) % 2 == 0) {
        board += ' '
      } else {
        board += '#'
      }
    }
    board += '\n'
  }
  return board
}

module.exports = chessboard

/* Solution 1.

// let pattern = '#_'
// let counter = 0
// let size = 8

// while (counter < size) {
//   if (counter % 2 == 0) {
//     console.log(
//       pattern
//         .split('')
//         .reverse()
//         .join('')
//         .repeat(size / pattern.length),
//     )
//   } else {
//     console.log(pattern.repeat(size / pattern.length))
//   }
//   counter += 1
// }

*/
