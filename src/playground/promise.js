const  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Atsushi',
        //     age: 26
        // })
        reject('Something went wrong')
    }, 5000)
})

console.log('before')

promise.then((data) => {
    console.log('1',data)
}).catch((error) => {
    console.log(error)
})

// const getPromise = async () => {
//     promise.then((data) => console.log('1', data))
//     promise.then((data) => console.log('2', data))
// }

console.log('after')
