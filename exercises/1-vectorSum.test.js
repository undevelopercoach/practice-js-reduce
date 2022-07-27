/*
vectorSum is a function which takes an array of vectors like [ [i0, j0], [i1, j1], [i2, j2], etc...]
and returns a single equivalent vector [i, j]

Hints:
- To sum vectors, you simply sum all the dimensions separately, i.e.:
[i, j] = [i0 + i1 + i2 + ..., j0 + j1 + j2 + ...]

*/
const vectorSum = (vectors) =>
  vectors.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should return the correctly summed vector', () => {
  const vectors = [
    [2, 4],
    [3, 4],
    [8, 6],
    [-4, 3],
    [-9, -12],
  ]

  const result = vectorSum(vectors)
  expect(result).toEqual([0, 5])
})
