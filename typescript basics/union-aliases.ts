type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(
    input1: Combinable,
    input2: Combinable,
    // resultConversion: string
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2=== 'number' || resultConversion === 'as-number') { // runtime
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     result.toString();
    // }
    return result;
}

const combineAges = combine(30, 26, "as-number")
console.log(combineAges)

const combineStringAges = combine("30", "26", "as-number")
console.log(combineStringAges)

const combineNames = combine('Vardanyan', "Tigran", "as-text");
console.log(combineNames)