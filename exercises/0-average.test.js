// Hint: division is distributive
// i.e. (a + b + c) / n === (a / n) + (b / n) + (c / n)

const calculateAverage = (arr) =>
  arr.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should calcuate the average of 10 real numbers', () => {
  const numbers = [1.5, 2.2, 3.7, 4.1, 5.0, 6.2, 7.1, 8.1, 9.9, 10.0]

  const average = calculateAverage(numbers)
  expect(average).toEqual(5.78)
})
