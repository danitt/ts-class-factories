import { PizzaStoreFactory, StorePizzaTypeInterface } from './_PizzaStore.factory'

import { Cheese } from './../Pizzas/Cheese.class'
import { Pepperoni } from './../Pizzas/Pepperoni.class'

const newYorkPizzaTypes: StorePizzaTypeInterface[] = [
  { name: 'Cheese', pizza: new Cheese },
  { name: 'Pepperoni', pizza: new Pepperoni }
]

export class NYPizzaStore extends PizzaStoreFactory {
  constructor() {
    super(
      'New York Pizzeria',
      newYorkPizzaTypes
    )
  }
}
