function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
// const number1 = '5'; // error Argument of type 'string' is not assignable to parameter of type 'number'.
const number2 = 2.8;

const result = add(number1, number2)

console.log(result)