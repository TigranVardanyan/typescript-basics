// const names = ['tigran', 'anna'];
// const anyArray = [];

// const names: Array<string> = [];
//
// const ages: Array<number> = [];
//
// const promise: Promise<number> = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })
//
// promice.then(data => {
//     // data.split(' ')
//     console.log(data)
// })



function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return Object.assign(obj1, obj2)
}

// console.log(merge({name: "Tigran"}, {age:23}))

// const mergedObj = merge({name: "Tigran", hobbies: ['hiking', 'gym']}, {age:23})

//err when extend from object
// const mergedObj = merge({name: "Tigran", hobbies: ['hiking', 'gym']}, 30)

const mergedObj = merge({name: "Tigran", hobbies: ['hiking', 'gym']}, {age: 25})

console.log(mergedObj.name);
console.log(mergedObj)

interface Lengthy{
    length: number
}

function countAndDescription<T extends Lengthy>(element: T):[T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element"
    } else if (element.length > 1){
        descriptionText = "Got " + element.length + " elements."
    }
    return [element, descriptionText]
}

console.log(countAndDescription('Hi there!'))
console.log(countAndDescription([]))
console.log(countAndDescription(['sport', 'cookie']))

// error
// console.log(countAndDescription(10))