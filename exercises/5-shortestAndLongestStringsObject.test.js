const shortestAndLongestStringsObject = (arr) =>
  arr.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should return the shortest and the longest string in a list of strings as an object', () => {
  const strings = [
    'Ganymede',
    'Io',
    'Europa',
    'Thebe',
  ]

  const shortestAndLongest = shortestAndLongestStringsObject(strings)
  expect(shortestAndLongest).toEqual({
    shortest: 'Io', 
    longest: 'Ganymede'
  })
})
