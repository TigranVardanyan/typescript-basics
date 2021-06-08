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
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
// console.log(merge({name: "Tigran"}, {age:23}))
const mergedObj = merge({ name: "Tigran" }, { age: 23 });
console.log(mergedObj.name);
