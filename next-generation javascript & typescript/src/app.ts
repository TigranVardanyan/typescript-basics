const userName = 'Tigran';
// userName = 'Tigrann';
let age = 30;
age++;

var result;

// function add(a:number, b:number) {
//     var result;
//     result = a + b;
//     return result
// }

// console.log(result); // Cannot find name 'result'.
// var has function and global scope
// let has additional block scope

// let myAge = 24;

console.log(result)

// if (age) {
//     let myAge = 23
//
// }
//
// console.log(myAge)

const add = (a:number, b:number = 1) => {
    return a + b
}

const printOutput: (a:number | string) => void = output => console.log(output)

const button = document.querySelector('button')

if (button) {
    button.addEventListener('click', event => console.log(event))
}
printOutput(add(5,2))
//short syntax
// const add = (a:number, b:number) => a + b
// const add = a:number => a + b

console.log(add(2))

const hobbies = ['sport', 'cooking']

const activeHobbies = ['hiking']

const allHobbies = [...hobbies, ...activeHobbies];

activeHobbies.push(...hobbies)
console.log()