type AddFn = (a:number,b:number) =>number

let add:AddFn

add = (n1:number, n2:number) => {
    return n1 + n2
}

interface Person {
    // properties
    readonly name:string,
    age:number,
    //methods
    greet(phrase:string):void,
}

interface Named {
    readonly name:string;
}

interface Greetable extends Named{
    greet(phrase: string):void,
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

class Persons implements Greetable {
    name:string;
    age = 30;
    constructor(n:string, ) {
        this.name = n
    }
    greet(phrase: string) {
        console.log(phrase)
    }
}

let tigran = new Persons("Tigran")

tigran.greet('hello from Tigran')