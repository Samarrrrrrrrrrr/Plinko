class Plinkos {

constructor(x, y) {

this.body=Bodies.circle(x, y, 10,{isStatic:true})
World.add(world, this.body)

this.radius = 10
}

display() {

    push()

    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    circle(0, 0, this.radius)

    pop()
}
}