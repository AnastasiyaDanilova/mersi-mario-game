const canvas = document.querySelector('canvas')

canvas.width = innerWidth
canvas.height = innerHeight


const c = canvas.getContext('2d')

const gravity = 1.5
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = 30
    this.height = 30
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y,
      this.width, this.height
    )
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x


    if (this.position.y + this.height +
      this.velocity.y <= canvas.height)
      this.velocity.y += gravity
    else this.velocity.y = 0
  }
}

const player = new Player()
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
}

function animate() {
  requestAnimationFrame(animate)

  c.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
  if (keys.right.pressed) {
    player.velocity.x = 5 
  }
  else if (keys.left.pressed) {
    player.velocity.x = -5 
  }
  else player.velocity.x = 0 

}
animate()

addEventListener('keydown', ({ keyCode }) => {
  console.log(keyCode)
  switch (keyCode) {
    // left
    case 65:
    case 37:
      keys.left.pressed = true
      break

    // down
    case 83:
    case 40:
      break

    // right
    case 68:
    case 39:
      keys.right.pressed = true
      break

    // up
    case 87:
    case 38:
      player.velocity.y -= 20;
      break
  }
  console.log(keys.right.pressed)
})

addEventListener('keyup', ({ keyCode }) => {
  console.log(keyCode)
  switch (keyCode) {
    // left
    case 65:
    case 37:
      keys.left.pressed = false
      break

    // down
    case 83:
    case 40:
      break

    // right
    case 68:
    case 39:
      keys.right.pressed = false
      break

    // up
    case 87:
    case 38:
      // player.velocity.y -= 20;
      break
  }
  console.log(keys.right.pressed)

})