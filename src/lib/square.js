const testIfSumIsSquare = (term1, term2) => Math.sqrt(term1 + term2) % 1 === 0

export const findBranches = (target, source) => {
  const lastValue = target.slice().pop()
  let possibleBranches = []

  source.forEach(number => {
    if (testIfSumIsSquare(lastValue, number)) {
      possibleBranches.push(number)
    }
  })

  return possibleBranches
}

export const deepSearch = (target, source) => {
  // console.log(`deepSearch: target = [${target.toString()}], source = [${source.toString()}]`)

  if (source.length === 0) {
    console.log('Search ended because source is empty', target)
    return target
  }

  const branches = findBranches(target, source)
  if (branches.length === 0) {
    // console.log('Search ended because no more viable branches found', target)
    return -1
  }

  // console.log('branches', branches)
  let searchResults = []
  branches.forEach(branchingNumber => {
    const newSource = source.slice()
    const newTarget = target.slice()
    const index = source.indexOf(branchingNumber)
    const start = newSource.splice(index, 1)[0]
    newTarget.push(start)
    const result = deepSearch(newTarget, newSource)

    if (result !== -1 && result.length !== 0) {
      searchResults = result
    }
  }, searchResults)

  return searchResults
}

const square = () => {
  const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  let searchResults = []

  // Try different starting numbers
  NUMBERS.forEach(number => {
    let source = NUMBERS.slice()
    let target = []

    const start = source.splice(source.indexOf(number), 1)[0]
    target.push(start)

    const result = deepSearch(target, source)

    if (result.length === NUMBERS.length) {
      searchResults.push(result)
    }
  }, searchResults)

  return searchResults
}

export default square
