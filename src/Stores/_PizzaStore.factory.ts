import { Pizza, PizzaOptionsInterface } from './../Pizzas/_Pizza.class'

export interface StorePizzaTypeInterface {
  name: string,
  pizza: Pizza
}

export abstract class PizzaStoreFactory {

  constructor(
    private storeName: string,
    private storePizzaTypes: StorePizzaTypeInterface[]
  ) {
    console.log(`Store Instantiated: ${storeName}`)
  }

  availablePizzas = (): string[] => this.storePizzaTypes.map(pizzaType => pizzaType.name)

  createPizza(pizzaName: string): StorePizzaTypeInterface | false {
    const pizzaType = this.storePizzaTypes.find(type => type.name === pizzaName)
    if (!pizzaType) {
      console.warn(`❗ ${this.storeName} attempted to order invalid pizza type: ${pizzaName}
        Available pizzas: ${ this.availablePizzas().join(', ')}`)
      return false
    } else return pizzaType
  }

  orderPizza(pizzaName: string) {
    const pizzaType = this.createPizza(pizzaName)
    if (pizzaType) {
      console.log(`${this.storeName} is ordering a ${pizzaType.name} pizza`)
      pizzaType.pizza.prepare()
      pizzaType.pizza.bake()
      pizzaType.pizza.cut()
      pizzaType.pizza.box()
    }
  }

}
