class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = []

    constructor(private readonly id: string, private name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.id + ' ' + this.name)
    }
    addEmployee(employee: string) {
        // this.id = "d2" //Attempt to assign to const or readonly variable
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const plugin_team = new Department('d1', "Plugin team")

plugin_team.describe()

plugin_team.addEmployee('Hakob');
plugin_team.addEmployee('Tigran');
plugin_team.addEmployee('Karen');
plugin_team.addEmployee('Anahit');
plugin_team.addEmployee('Tigran');

// plugin_team.employees[7] = "Nik" // wrong way

plugin_team.printEmployeeInformation();

// const plugin_team_copy = {name: 's', describe: plugin_team.describe}
//
// plugin_team_copy.describe();