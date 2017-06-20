import { NYPizzaStore } from './Stores/NYPizzaStore.factory'
import { ChicagoPizzaStore } from './Stores/ChicagoPizzaStore.factory'

const NewYork = new NYPizzaStore()
const Chicago = new ChicagoPizzaStore()

NewYork.orderPizza('Pepperoni')
Chicago.orderPizza('Pepperoni')
