export interface PizzaOptionsInterface {
  name: string
}

export class Pizza {
  protected name: string
  constructor(pizzaOptions: PizzaOptionsInterface) {
    this.name = pizzaOptions.name
  }

  prepare = () => console.log(`\tPreparing ${this.name}`)
  bake = () => console.log(`\tBaking ${this.name}`)
  cut = () => console.log(`\tCutting ${this.name}`)
  box = () => console.log(`\tBoxing ${this.name}`)
}
