const longestString = (arr) =>
  arr.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should calcuate the longest string in a list of strings', () => {
  const strings = [
    'Ganymede',
    'Io',
    'Europa',
    'Thebe',
  ]

  const longest = longestString(strings)
  expect(longest).toEqual('Ganymede')
})
