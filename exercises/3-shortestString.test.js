const shortestString = (arr) =>
  arr.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should calcuate the shortest string in a list of strings', () => {
  const strings = [
    'Ganymede',
    'Io',
    'Europa',
    'Thebe',
  ]

  const shortest = shortestString(strings)
  expect(shortest).toEqual('Io')
})
