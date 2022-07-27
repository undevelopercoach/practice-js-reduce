let PNG = require('pngjs').PNG
let fs = require('fs')

const writePng = (width, height, data, dstFilename, scale = 1) => {
  const pngFile = new PNG({ width: width * scale, height: height * scale })

  let pngIdx = 0;
  for (let y = 0; y < height; y++) {
    for (let yRepeat = 0; yRepeat < scale; yRepeat++) {
      for (let x = 0; x < width; x++) {
        for (let xRepeat = 0; xRepeat < scale; xRepeat++) {
          let pixel = data[y][x]
          for (let colorByte = 2; colorByte >= 0; colorByte--) {
            pngFile.data[pngIdx + colorByte] = pixel & 0xff
            pixel >>= 8
          }
          pngFile.data[pngIdx + 3] = 0xff // Full opacity
          pngIdx += 4
        }
      }
    }
  }

  pngFile.pack().pipe(fs.createWriteStream(dstFilename))
}

module.exports = writePng