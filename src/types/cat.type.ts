import { Animal, Hunter, Prey } from "./animal.type"

export class Cat extends Animal implements Hunter {
  attack(p: Prey) {
    return true
  }
}

export class PersianCat extends Cat {
  private makePersianCatSound() {
    console.log("Persian Meow :)")
  }

  makeSound(): void {
    this.makePersianCatSound()
  }
}
export class BritishCat extends Cat {
  private makeBritishCatSound() {
    console.log("British Meow :)")
  }

  makeSound(): void {
    this.makeBritishCatSound()
  }
}
