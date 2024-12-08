import { Animal, Hunter, Prey } from "./types/animal.type"
import { PersianCat, BritishCat } from "./types/cat.type"
import { HouseMouse, DeerMouse } from "./types/mouse.type"

const animals = {
  meeshki: new PersianCat("Meshki", 90),
  tom: new BritishCat("Tom", 110),
  jerry: new HouseMouse("Jerry", 120),
  mickey: new DeerMouse("Mickey", 50),
}

const hunters: Hunter[] = [animals.meeshki, animals.tom]

const preys: Prey[] = [animals.jerry, animals.mickey]

const animalsArray: Animal[] = [
  animals.meeshki,
  animals.tom,
  animals.jerry,
  animals.mickey,
]

animalsArray.forEach(animal => animal.makeSound())
