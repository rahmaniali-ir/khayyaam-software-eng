export interface Position {
  x: number
  y: number
}

export class Animal {
  name: string
  speed: number
  position: Position

  constructor(
    name: string,
    speed: number,
    position: Position = { x: 0, y: 0 }
  ) {
    this.name = name
    this.speed = speed
    this.position = position
  }

  move() {
    console.log("#")
  }

  makeSound() {
    console.log("!")
  }
}

export interface Hunter {
  attack: (p: Prey) => boolean
}

export interface Prey {
  escape: (p: Hunter) => boolean
}
