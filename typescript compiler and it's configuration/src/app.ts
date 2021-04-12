const button = document.querySelector('button');

// function add(n1: number, n2: number):string { //A function whose declared type is neither 'void' nor 'any' must return a value.
//     if (false) {
//         return n1.toString() + n2.toString()
//     }
//     // return
// }

function clickHandler(message: string, age: number) {
    // let userName = message
    console.log('Clicked!' + message)
}

// a comment
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "hello", 1))
}