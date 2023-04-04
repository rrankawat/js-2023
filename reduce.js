// ------------- EXAMPLE 1 -------------

// const items = [
//   { name: 'Rice', price: 5 },
//   { name: 'Book', price: 20 },
//   { name: 'Chicken', price: 10 },
//   { name: 'Monitor', price: 100 },
// ]

// let totalPrice = 0
// items.forEach((item) => {
//   console.log(`total ${totalPrice} + item ${item.price}`)
//   totalPrice += item.price
// })

// const totalPrice = items.reduce((total, item) => {
//   console.log(`total ${total} + item ${item.price}`)
//   return total + item.price
// }, 0)

// console.log(totalPrice)

// ------------- EXAMPLE 2 -------------

// const people = [
//   { name: 'Kyle', age: 26 },
//   { name: 'John', age: 31 },
//   { name: 'Jake', age: 31 },
//   { name: 'Sara', age: 31 },
//   { name: 'Sally', age: 42 },
//   { name: 'Jill', age: 42 },
// ]

// const res = people.reduce((groupedPeople, person) => {
//   const age = person.age
//   if (groupedPeople[age] == null) groupedPeople[age] = []
//   groupedPeople[age].push(person.name)
//   return groupedPeople
// }, {})

// console.log(res)

// ------------- EXAMPLE 3 -------------

// const numbers = [13, 2, 5]

// const sum = numbers.reduce((total, number, index, array) => {
//   return total + number
// }, 0)

// console.log(sum)

// ------------- EXAMPLE 4 -------------

// const arr = [
//   { a: 2, b: 1 },
//   { a: 4, b: 2 },
//   { a: 5, b: 3 },
// ]

// const res = arr.reduce((acc, item) => {
//   if (!acc['a']) acc['a'] = 1
//   if (!acc['b']) acc['b'] = 0
//   acc['a'] *= item.a
//   acc['b'] += item.b
//   return acc
// }, {})

// console.log(res)
