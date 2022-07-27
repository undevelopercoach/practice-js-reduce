const shortestAndLongestStringsTuple = (arr) =>
  arr.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should return the shortest and the longest string in a list of strings as a tuple', () => {
  const strings = [
    'Ganymede',
    'Io',
    'Europa',
    'Thebe',
  ]

  const shortestAndLongest = shortestAndLongestStringsTuple(strings)
  expect(shortestAndLongest).toEqual(['Io', 'Ganymede'])
})
