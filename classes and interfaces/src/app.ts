class Department {
    name: string;
    private employees: string[] = []

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const plugin_team = new Department("Plugin team")

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