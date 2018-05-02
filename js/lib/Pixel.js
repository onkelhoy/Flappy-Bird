class Pixel {
  /**
  * Takes pixs array and reduce the size to whatever whised,
  *
  * @param {Array} pixs
  * @param {Number} orginal_width
  * @param {Number} orginal_height
  * @param {Number} width
  * @param {Number} height
  */
  static Reduce (pixs, orginal_width, orginal_height, width, height) {
    let steps = Math.floor(orginal_width / width) + Math.floor(orginal_height / height)

    for (let i=0; i<orginal_height; i++) {
      for (let j=0; j<orginal_width; j++) {
        let index = (i * orginal_width + j) * 4 // four channels

      }
    }
  }

  /**
  * Takes pixel array and gives the black & white
  *
  * @param {Array} pixs
  */
  static BlackWhite (pixs) {
    return pixs.filter((v, i) => (i+1) % 4 === 0)
  }
}
