class Particles {

    constructor(x, y, radius) {

this.body=Bodies.circle(x, y, radius)
this.color=color( random(0, 255), random(0, 255), random(0, 255))
World.add(world, this.body)
this.radius=radius
    }

    display() {

    push()
    fill(this.color)
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    circle(0, 0, this.radius)
    pop()

    }
}