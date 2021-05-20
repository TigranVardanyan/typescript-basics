interface Person {
    // properties
    name:string,
    age:number,
    //methods
    greet(phrase:string):void,
}

let user1:Person ;

user1 = {
    name:"Tigran",
    age:25,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

user1.greet('Hi there,I am')
