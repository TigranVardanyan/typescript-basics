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

function add(a:Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string' ) {
        return a.toString() + b.toString();
    }
    return a + b
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name)
    // console.log("Name: " + emp.privileges) // not always emp has privileges field
    if ('privileges' in emp) {
        console.log("Name: " + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log("StartDate: " + emp.startDate)
    }

}

printEmployeeInformation(el)

class Car {
    drive() {
        console.log("Driving...")
    }
}

class Truck {
    drive() {
        console.log("Driving...")
    }

    loadCargo(amount:number) {
        console.log("Loading amount: " + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()


function useVehicles(vehicles: Vehicle) {
    vehicles.drive()
    // if ('loadCargo' in vehicles) {
    //     vehicles.loadCargo(100)
    // }
    if (vehicles instanceof Truck) {
        vehicles.loadCargo(1000)
    }
}