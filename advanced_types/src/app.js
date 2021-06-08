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
const el = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // console.log("Name: " + emp.privileges) // not always emp has privileges field
    if ('privileges' in emp) {
        console.log("Name: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("StartDate: " + emp.startDate);
    }
}
printEmployeeInformation(el);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount) {
        console.log("Loading amount: " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicles(vehicles) {
    vehicles.drive();
    // if ('loadCargo' in vehicles) {
    //     vehicles.loadCargo(100)
    // }
    if (vehicles instanceof Truck) {
        vehicles.loadCargo(1000);
    }
}
useVehicles(v1);
useVehicles(v2);
function moveAnimal(animal) {
    let speed;
    // if ('flyingSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.flyingSpeed)
    // }
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 15 });
const paragraph = document.getElementById('message-output');
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!  conflict with react
// ! not need with type casting \|/
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'hi';
console.log(paragraph);
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character'
};
