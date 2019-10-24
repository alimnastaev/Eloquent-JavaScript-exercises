const chessboard = require('../Ch.2:_Program_Structure/2.3_Chessboard')

describe('invalid inputs', () => {
  test('string', () => {
    expect(chessboard('wrong_type')).toEqual('')
  })
})

describe('valid input', () => {
  test('integer', () => {
    expect(chessboard(8)).toEqual(
      ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n',
    )
  })
})

describe('simple', () => {
  test('real string as an output', () => {
    expect(chessboard(8)).not.toBeNull()
  })
})
