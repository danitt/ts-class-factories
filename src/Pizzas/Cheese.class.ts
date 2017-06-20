import { Pizza, PizzaOptionsInterface } from './_Pizza.class'

export class Cheese extends Pizza {
  constructor(private pizzaOptions: PizzaOptionsInterface = {
    name: 'Cheese'
  }) {
    super(pizzaOptions)
  }
}
