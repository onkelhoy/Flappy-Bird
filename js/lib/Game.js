class Game {
  constructor (width = window.innerWidth, height = window.innerHeight) {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width = width
    this.height = this.canvas.height = height
    this.center = {
      x: this.width / 2,
      y: this.height / 2
    }
  }

  loadImage (src) {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
  }

  Pixels () {
    return this.ctx.getImageData(0, 0, this.width, this.height)
  }
  clear (color = 'rgba(0,0,0,0)') {
    this.ctx.fillStyle = color
    this.ctx.fillRect(0, 0, this.width, this.height)
  }
}
