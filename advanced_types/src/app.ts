// type Admin = {
//     name: string;
//     privileges: string[];
// }
//
// type Employee = {
//     name: string;
//     startDate: Date;
// }
//
// type ElevatedEmployee = Admin & Employee;

interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {
}

const el: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:string, b:number):string;
function add(a:number, b:number):string;
function add(a:Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string' ) {
        return a.toString() + b.toString();
    }
    return a + b
}

const result = add('Tigran', 'Vardanyan')
// result.split(' ')  error result is type Combinable!!!


//after function overload if work
result.split(' ')

const numberResult = add(5,10);


const fetchedUserData = {
    id: 'u1',
    name: 'Tigran',
    job: {title: 'Software engineer',salary:50}
}

// console.log(fetchedUserData.job.title)

//JS way
// console.log(fetchedUserData.job && fetchedUserData.job.title)

//Typescript way
console.log(fetchedUserData?.job?.title)


//Nullish Coalescing

const userInput = null;

//JS way
const storedData = userInput || "DEFAULT"

//Typescript way
const storedDataTs = userInput ?? "DEFAULT"

console.log(storedData)
console.log(storedDataTs)
// numberResult.split(' ') typescript know that is number


// type UnknownEmployee = Employee | Admin;
//
// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log("Name: " + emp.name)
//     // console.log("Name: " + emp.privileges) // not always emp has privileges field
//     if ('privileges' in emp) {
//         console.log("Name: " + emp.privileges)
//     }
//     if ('startDate' in emp) {
//         console.log("StartDate: " + emp.startDate)
//     }
//
// }
//
// printEmployeeInformation(el)
//
// class Car {
//     drive() {
//         console.log("Driving...")
//     }
// }
//
// class Truck {
//     drive() {
//         console.log("Driving...")
//     }
//
//     loadCargo(amount:number) {
//         console.log("Loading amount: " + amount)
//     }
// }
//
// type Vehicle = Car | Truck;
//
// const v1 = new Car()
// const v2 = new Truck()
//
//
// function useVehicles(vehicles: Vehicle) {
//     vehicles.drive()
//     // if ('loadCargo' in vehicles) {
//     //     vehicles.loadCargo(100)
//     // }
//     if (vehicles instanceof Truck) {
//         vehicles.loadCargo(1000)
//     }
// }
//
// useVehicles(v1)
// useVehicles(v2)
//
// interface Bird {
//     type: 'bird',
//     flyingSpeed:number
// }
//
// interface Horse {
//     type: 'horse',
//     runningSpeed:number
// }
//
// type Animal = Bird | Horse
//
// function moveAnimal(animal: Animal) {
//     let speed;
//     // if ('flyingSpeed' in animal) {
//     //     console.log('Moving with speed: ' + animal.flyingSpeed)
//     // }
//     switch (animal.type) {
//         case "bird":
//             speed = animal.flyingSpeed
//             break
//         case "horse":
//             speed = animal.runningSpeed
//             break
//     }
//     console.log('Moving with speed: ' + speed)
// }
//
// moveAnimal({type:"bird", flyingSpeed:10})
// moveAnimal({type:"horse", runningSpeed:15})
//
// const paragraph  = document.getElementById('message-output')
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!  conflict with react
// // ! not need with type casting \|/
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
// userInputElement.value = 'hi'
// console.log(paragraph)
//
// interface ErrorContainer { //{email:'not a valid email, username: 'Must start with character'}
//     [prop:string]:string
// }
//
// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character'
// }