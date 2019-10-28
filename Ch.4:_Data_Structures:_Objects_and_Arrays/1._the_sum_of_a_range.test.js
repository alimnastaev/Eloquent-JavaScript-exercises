function range(start, end, step) {
  let array = []
  //   if 3d arg not provided it is int 1 as default:
  //   that way we can avoid to write else if block if 3 arg is step = 1 in parameters
  if (step == null) {
    step = 1
  }

  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      array.push(i)
    }
  } else {
    for (let i = start; i <= end; i += step) {
      array.push(i)
    }
  }
  return array
}

function sum(array) {
  let result = 0
  for (let i in array) {
    result += array[i]
  }
  return result
}

describe('range testing', () => {
  test('succes case to receive an array of numbers from 1 to 10', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('fail case to receive a proper array if missing arguments', () => {
    expect(range(1)).toEqual([])
  })
})

describe('sum testing', () => {
  test('succes case to count all numbers in array', () => {
    expect(sum([1, 2, 3, 4, 5])).toEqual(15)
  })

  test('succes case to count all numbers in array with range fn supplied', () => {
    expect(sum(range(1, 10))).toEqual(55)
  })

  test('fail case: output is 0 if wrong input in range function', () => {
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).not.toEqual(55)
  })

  test('fail case: output is 0 if wrong input in range function', () => {
    expect(sum(range(1))).toEqual(0)
  })
})

describe('optional arg STEP testing', () => {
  test('succes case to receive an array if 3d arg provided as neg int', () => {
    expect(range(15, 2, -3)).toEqual([15, 12, 9, 6, 3])
  })

  test('if 3d arg not provided it is 1 as default', () => {
    expect(range(10, 15)).toEqual([10, 11, 12, 13, 14, 15])
  })
})
