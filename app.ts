// function add(n1: number, n2: number): number { //Type 'string' is not assignable to type 'number'
//     return n1.toString() + n2.toString();
// }

// function add(n1: number, n2: number): string { //Type 'number' is not assignable to type 'string'
//     return n1 + n2;
// }

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void{
    console.log("Result: " + num)
}

function printResultUndefined(num: number): undefined{
    console.log("Result: " + num)
    return
}

function addAndHandle(n1:number, n2:number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}
// let combineValues;
// combineValues = 5; // throw error in runtime, if
// console.log(combineValues(8,28));

// let combineValues: Function;
// combineValues = printResult; // return undefined because printResult takes 1 parameter
// console.log(combineValues(8,28));

let combineValues: (a: number, b:number) => number; // takes function with
// only 2 params: number and return number
combineValues = add;
console.log(combineValues(8,28));

printResult(add(10,20));

printResultUndefined(add(25,35));

addAndHandle(10, 20, (result) => {
    console.log(result)
});