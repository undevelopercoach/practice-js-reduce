const writePng = require('../writePng', 50)

// Change this to true to output the sprites as png files
const DEBUG = false

/*

transparentSprites is a function that accepts an array of 8x8 sprites and
a transparency color, and superimposes the sprites on top of each other
to return a final result.

The rules are:
- later sprites sit on top of earlier sprites, so if sprites[1] has a
non-transparent pixel it will display over any pixel from sprite[0].
- if a sprite has a pixel which matches the transparencyColor then it will
not display, and whatever is underneath it will display.
- if no sprites have a non-transparent pixel in a position, the backgroundColor
will appear there.

e.g. just looking at the first row of 8 pixels, if the backgroundColor is yellow, 
the transparencyColor is pink, and we have sprites like this:
sprite[0][0] = [red, red, green, green, pink, pink, pink, pink]
and 
sprite[1][0] = [pink, pink, blue, blue, red, red, green, pink]

then the result for the first row should be:
result[0] = [red, red, blue, blue, red, red, green, yellow]

*/
const transparentSprites = (sprites, transparencyColor, backgroundColor) =>
  sprites.reduce((acc, item, index, originalArr) => undefined, undefined)

it('should correctly calculate the superimposed sprites', () => {
  const transparencyColor = 0xffc0c0 // pink
  const backgroundColor = 0x000000 // black
  const K = 0x000000 // black
  const W = 0xffffff // white
  const R = 0xff0000 // red
  const G = 0x00ff00 // green
  const _ = transparencyColor

  const alien = [
    [_, _, G, _, _, G, _, _],
    [_, _, G, _, _, G, _, _],
    [_, G, G, G, G, G, G, _],
    [G, G, R, G, G, R, G, G],
    [G, G, G, G, G, G, G, G],
    [G, G, G, G, G, G, G, G],
    [G, _, G, _, _, G, _, G],
    [_, _, G, _, _, G, _, _],
  ]
  if (DEBUG)
    writePng(8, 8, alien, __dirname + '/alien.png', 50)

  const player = [
    [_, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _],
    [_, _, _, W, W, _, _, _],
    [_, _, _, W, W, _, _, _],
    [_, W, W, W, W, W, W, _],
    [W, W, W, W, W, W, W, W],
    [W, W, W, W, W, W, W, W],
  ]
  if (DEBUG)
    writePng(8, 8, player, __dirname + '/player.png', 50)

  const sprites = [player, alien]
  const result = transparentSprites(sprites, transparencyColor, backgroundColor)
  if (DEBUG)
    writePng(8, 8, result, __dirname + '/result.png', 50)

  expect(result).toEqual([
    [K, K, G, K, K, G, K, K],
    [K, K, G, K, K, G, K, K],
    [K, G, G, G, G, G, G, K],
    [G, G, R, G, G, R, G, G],
    [G, G, G, G, G, G, G, G],
    [G, G, G, G, G, G, G, G],
    [G, W, G, W, W, G, W, G],
    [W, W, G, W, W, G, W, W],
  ])
})
