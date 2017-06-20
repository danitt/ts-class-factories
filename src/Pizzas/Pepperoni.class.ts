import { Pizza, PizzaOptionsInterface } from './_Pizza.class'

export class Pepperoni extends Pizza {
  constructor(private pizzaOptions: PizzaOptionsInterface = {
    name: 'Pepperoni'
  }) {
    super(pizzaOptions)
  }
}
