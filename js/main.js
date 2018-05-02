// initilize
let game
let Input

let bird
let pipes = []
let distance = 200
let jumped = false

// ### GAME INIT ###
window.onload = function init () {
  game = new Game(400, 500)
  Input = new EventInput(game.canvas)

  load()
}

// ### GAME LOAD ###
async function load () {
  bird = new Bird(100, game.height / 2)

  pipes.push(new Pipe(game.width, game.height))
  gameLoop()
}

// ### GAME LOGIC ###
function update () {
  if (bird.dead)
    return
  if (pipes[pipes.length-1].x <= game.width - distance) {
    pipes.push(new Pipe(game.width, game.height))
  }
  for (let i=0; i<pipes.length; i++) {
    pipes[i].update(4)

    if (pipes[i].hit(bird)) {
      bird.dead = true
      return
    }

    if (pipes[i].x + 60 < 0) {
      pipes.splice(i, 1)
      i--
    }
  }

  bird.update(game.height)
  if (Input.GetKey(' ') && !jumped) {
    jumped = true
    bird.jump()
  } else if (!Input.GetKey(' ')) {
    jumped = false
  }
}
// ### GAME RENDER ###
function render () {
  game.clear('white')

  for (let pipe of pipes) {
    pipe.render(game.ctx)
  }
  bird.render(game.ctx)
}

// ### GAME HEART ###
function gameLoop () {
  update()
  render()
  requestAnimationFrame(gameLoop)
}
