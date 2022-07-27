// Hint: try creating a ?x3 array of "winlines" and reducing over that instead of the board

const winlines = [
]

const ticTacToeWin = (board) =>
  winlines.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should return false if the game is a stalemate', () => {
  const board = [
    'O', 'X', 'O',
    'X', 'O', 'O',
    'X', 'O', 'X', 
  ]

  const win = ticTacToeWin(board)
  expect(win).toBe(false)
})

const _ = ' ' // Blank entry in board, for convenience

;[['O', 'X'], ['X', 'O']].forEach(([P, O]) => {
  it(`should return true if ${P} wins on the first row`, () => {
    const board = [
      P, P, P,
      _, O, _,
      O, _, _, 
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the second row`, () => {
    const board = [
      _, O, _,
      P, P, P,
      O, _, _, 
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the third row`, () => {
    const board = [
      _, O, _,
      O, _, _, 
      P, P, P,
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the first column`, () => {
    const board = [
      P, O, _,
      P, _, _, 
      P, O, _,
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the second column`, () => {
    const board = [
      O, P, _,
      _, P, _, 
      O, P, _,
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the third column`, () => {
    const board = [
      O, _, P,
      _, _, P, 
      O, _, P,
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the / diagonal`, () => {
    const board = [
      O, _, P,
      _, P, O, 
      P, O, P,
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })
  
  it(`should return true if ${P} wins on the \\ diagonal`, () => {
    const board = [
      P, _, P,
      _, P, O, 
      O, O, P,
    ]
  
    const win = ticTacToeWin(board)
    expect(win).toBe(true)
  })  
})
