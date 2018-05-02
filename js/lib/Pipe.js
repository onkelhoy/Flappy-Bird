class Pipe extends GameObject {
  /**
  * wdith & height of gamescreen
  *
  * @param {Scalar} width
  * @param {Scalar} height
  */
  constructor (width, height) {
    super(width + 60, 0)

    this.gap = Math.random() * (height - 150)
    this.h = height - this.gap + 150
  }

  hit (bird) {
    let x = bird.x + 32 >= this.x && bird.x <= this.x + 60
    let y = bird.y >= 0 && bird.y <= this.gap ||
            bird.y + 28 >= this.y + this.gap + 150 && bird.y <= this.h
    return x && y
  }

  update (speedx) {
    this.x -= speedx
  }
  render (ctx) {
    this.renderShape(ctx, 'black', 'fill',
      draw => {
        draw.rect(this.x, this.y, 60, this.gap)
        draw.rect(this.x, this.y + this.gap + 150, 60, this.h)
      }
    )
  }
}
