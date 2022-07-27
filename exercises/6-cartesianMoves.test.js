/*
cartesianMoves is a function which takes a start point like [x, y]
and an array of moves like [ [dx0, dy0], [dx1, dy1], [dx2, dy2], etc...]
and returns information on where you end up after making all the moves.

The result is of the form:

{
  endPosition: [x, y],
  distanceTravelled: n,
}

Hints:
- To calculate the endPosition, sum all the moves in each dimension, i.e.:
[end_x, end_y] = [start_x + dx0 + dx1 + dx2 + ..., start_y + dy0 + dy1 + dy2 + ...]
- To calculate distanceTravelled, apply pythagorus' theorem to each move and sum, i.e.:
distanceTravelled = sqrt((dx0 ** 2) + (dy0 ** 2)) + sqrt((dx1 ** 2) + (dy1 ** 2)) + ...

*/
const cartesianMoves = (startPosition, moves) =>
  moves.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should return the distance travelled and final position', () => {
  const startPosition = [2, 4]
  const moves = [
    [3, 4],
    [8, 6],
    [-4, 3],
    [-9, -12],
  ]

  const result = cartesianMoves(startPosition, moves)
  expect(result).toEqual({
    endPosition: [0, 5], 
    distanceTravelled: 35,
  })
})
