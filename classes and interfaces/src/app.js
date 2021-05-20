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
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let tigran = new Persons("Tigran");
tigran.greet('hello from Tigran');
