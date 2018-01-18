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

const search = (number, source, target) => {
  let newSource = source.slice()
  let newTarget = target.slice()

  const index = newSource.indexOf(number)
  const start = newSource.splice(index, 1)[0]
  newTarget.push(start)

  return deepSearch(newTarget, newSource)
}

export const deepSearch = (target, source) => {
  if (source.length === 0) {
    console.log('Search ended because source is empty', target)
    return target
  }

  const branches = findBranches(target, source)
  if (branches.length === 0) {
    return -1
  }

  let searchResults = []
  branches.forEach(branchingNumber => {
    const result = search(branchingNumber, source, target)

    if (result !== -1 && result.length !== 0) {
      searchResults = result
    }
  })

  return searchResults
}

export default NUMBERS => {
  let searchResults = []

  // Try different starting numbers
  NUMBERS.forEach(seed => {
    const result = search(seed, NUMBERS, [])

    if (result.length === NUMBERS.length) {
      searchResults.push(result)
    }
  })

  return searchResults
}
