import square, { deepSearch, findBranches } from './square'

describe('findBranches', () => {
  it('finds all possible branches that forms a square', () => {
    expect(findBranches([1], [2, 3, 4, 5, 6])).toEqual([3])
  })

  it('finds all possible branches that forms a square', () => {
    expect(findBranches([1, 3], [2, 4, 5, 6])).toEqual([6])
  })

  it('finds all possible branches that forms a square', () => {
    expect(findBranches([2], [2, 4, 5, 6, 7])).toEqual([2, 7])
  })

  it('finds all possible branches that forms a square', () => {
    expect(findBranches([], [2, 3, 4])).toEqual([])
  })

  it('finds all possible branches that forms a square', () => {
    expect(findBranches([1], [6, 7])).toEqual([])
  })
})

describe('deepSearch', () => {
  it('searches', () => {
    expect(deepSearch([1], [3])).toEqual([1, 3])
  })

  it('searches', () => {
    expect(deepSearch([1], [2, 3])).toEqual([])
  })

  it('searches', () => {
    expect(deepSearch([1], [2, 3, 4, 5, 6])).toEqual([])
  })

  it('searches', () => {
    expect(deepSearch([1], [2, 3, 4, 5, 6, 7, 8])).toEqual([])
  })

  it('searches', () => {
    expect(deepSearch([3], [1, 2, 4, 5, 6, 7, 8])).toEqual([])
  })
})

describe('square', () => {
  it('finds all solutions', () => {
    expect(square()).toEqual([
      [8, 1, 15, 10, 6, 3, 13, 12, 4, 5, 11, 14, 2, 7, 9],
      [9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8],
    ])
  })
})
