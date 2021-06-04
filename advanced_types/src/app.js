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
