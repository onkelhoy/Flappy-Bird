class Pipe extends GameObject {
  /**
  * wdith & height of gamescreen
  *
  * @param {Scalar} width
  * @param {Scalar} height
  */
  constructor (width, height) {
    super(width + 60, 0)

    this.gap = 150
    this.top = Math.random() * (height - this.gap)
    this.bottom = this.top + this.gap

    this.h = height - this.bottom
    this.w = 64
    this.scored = false
  }

  hit (bird) {
    let x = bird.x + bird.w >= this.x && bird.x <= this.x + this.w
    let y = bird.y > this.top && bird.y + bird.h < this.bottom
    return x && !y
  }

  pass (bird) {
    if (this.scored) return false
    let x = bird.x + bird.w >= this.x && bird.x <= this.x + this.w
    let y = bird.y > this.top && bird.y + bird.h < this.bottom

    let passed = x && y
    if (passed) this.scored = true
    return passed
  }

  update (speedx) {
    this.x -= speedx
  }
  render (ctx) {
    this.renderShape(ctx, 'black', 'fill',
      draw => {
        draw.rect(this.x, this.y, this.w, this.top)
        draw.rect(this.x, this.bottom, this.w, this.h)
      }
    )
  }
}
