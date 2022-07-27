const winlines = [
]

const ticTacToeWinner = (board) =>
  winlines.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should return a blank (space) if the game is a stalemate', () => {
  const board = [
    'O', 'X', 'O',
    'X', 'O', 'O',
    'X', 'O', 'X', 
  ]

  const win = ticTacToeWinner(board)
  expect(win).toBe(' ')
})

const _ = ' ' // Blank entry in board, for convenience

;[['O', 'X'], ['X', 'O']].forEach(([P, O]) => {
  it(`should return ${P} if ${P} wins on the first row`, () => {
    const board = [
      P, P, P,
      _, O, _,
      O, _, _, 
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the second row`, () => {
    const board = [
      _, O, _,
      P, P, P,
      O, _, _, 
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the third row`, () => {
    const board = [
      _, O, _,
      O, _, _, 
      P, P, P,
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the first column`, () => {
    const board = [
      P, O, _,
      P, _, _, 
      P, O, _,
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the second column`, () => {
    const board = [
      O, P, _,
      _, P, _, 
      O, P, _,
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the third column`, () => {
    const board = [
      O, _, P,
      _, _, P, 
      O, _, P,
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the / diagonal`, () => {
    const board = [
      O, _, P,
      _, P, O, 
      P, O, P,
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })
  
  it(`should return ${P} if ${P} wins on the \\ diagonal`, () => {
    const board = [
      P, _, P,
      _, P, O, 
      O, O, P,
    ]
  
    const win = ticTacToeWinner(board)
    expect(win).toBe(P)
  })  
})
