import { PizzaStoreFactory, StorePizzaTypeInterface } from './_PizzaStore.factory'

import { Cheese } from './../Pizzas/Cheese.class'
import { Pepperoni } from './../Pizzas/Pepperoni.class'

const chicagoTypes: StorePizzaTypeInterface[] = [
  { name: 'Cheese', pizza: new Cheese }
]

export class ChicagoPizzaStore extends PizzaStoreFactory {
  constructor() {
    super(
      'Chicago Pizzeria',
      chicagoTypes
    )
  }
}
