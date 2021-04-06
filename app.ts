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

printResult(add(10,20));

printResultUndefined(add(25,35));