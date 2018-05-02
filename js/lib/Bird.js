class Bird extends GameObject {
  constructor (x, y) {
    super(x, y)

    this.vel = new Vector2(0, 0)
    this.dead = false
    this.score = 0
    this.w = 32
    this.h = 32
  }

  update (h) {
    this.score += .01
    this.vel.y += GRAVITY * .9

    this.addFrom(this.vel)
    if (this.y > h - 18)
      this.dead = true
  }

  jump () {
    this.vel.y = -8.8
  }

  render (ctx) {
    super.renderShape(ctx, 'black', 'fill',
      draw => draw.rect(this.x, this.y, this.w, this.h)
    )
  }
}
