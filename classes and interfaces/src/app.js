// type AddFn = (a:number,b:number) =>number
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let user1;
user1 = {
    name: "Tigran",
    age: 25,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there,I am');
class Persons {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let tigran = new Persons();
tigran.greet('hello from Tigran');
