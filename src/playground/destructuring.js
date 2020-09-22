// const person = {
//     name: 'Atsushi Nonaka',
//     age: 26,
//     location: {
//         city: 'Fujisawa',
//         temp: 92
//     }
// }

// // const name = person.name
// // const age = person.age

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperture } = person.location
// if(city && temperture){
//     console.log(`It's ${temperture} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)


// const address = []

// const [, , prefecture = 'New York'] = address

// console.log(`You are in ${prefecture}`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75']

const [drink, , price] = item

console.log(`A medium ${drink} costs ${price}`)