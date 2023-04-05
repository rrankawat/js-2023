// ------------- EXAMPLE 1 -------------

// const names = ['Florin', 'Liam', 'Jai', 'Ivan']

// names.sort()

// console.log(names)

// ------------- EXAMPLE 2 -------------

// const numbers = [74, 18, 10, 5, 84, 24, 105]

// numbers.sort(compareFunction)

// console.log(numbers)

// function compareFunction(a, b) {
//   // 1. diff < 0 then a comes first
//   // 2. diff > 0 then b comes first
//   // 3. diff = 0 then no change
//   return a - b
// }

// ------------- EXAMPLE 3 -------------

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Desktop', price: 1500 },
//   { name: 'Phone', price: 500 },
// ]

// // products.sort((a, b) => a.price - b.price)
// products.sort((a, b) => {
//   const fa = a.name.toLowerCase(),
//     fb = b.name.toLowerCase()

//   if (fa < fb) {
//     return -1
//   }

//   if (fa > fb) {
//     return 1
//   }

//   return 0
// })

// console.log(products)
