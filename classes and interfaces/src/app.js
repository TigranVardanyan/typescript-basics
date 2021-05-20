let user1;
user1 = {
    name: "Tigran",
    age: 25,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there,I am');
