import { Animal, Hunter, Prey } from "./animal.type"

export class Mouse extends Animal implements Prey {
  escape(h: Hunter) {
    return true
  }
}

export class HouseMouse extends Mouse {
  private makeHouseMouseSound() {
    console.log("House Mouse Sound!")
  }

  makeSound() {
    this.makeHouseMouseSound()
  }
}

export class DeerMouse extends Mouse {
  private makeDeerMouseSound() {
    console.log("Deer Mouse Sound!")
  }

  makeSound() {
    this.makeDeerMouseSound()
  }
}
