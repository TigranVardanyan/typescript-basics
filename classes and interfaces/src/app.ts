class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = []

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

    printEmployeesInformation() {
        console.log(`Employees count - ${this.employees.length}`)
        console.log(this.employees)
    }
}

class ITDepartment extends Department{
    constructor(id: string, public devops:string[]) {
        super(id, 'IT');
    }
}

const core_team = new ITDepartment('d2', ["Armen", "Vardan"])

const plugin_team = new Department('d1', "Plugin team")

plugin_team.describe()

plugin_team.addEmployee('Hakob');
plugin_team.addEmployee('Tigran');
plugin_team.addEmployee('Karen');
plugin_team.addEmployee('Anahit');
plugin_team.addEmployee('Tigran');

// plugin_team.employees[7] = "Nik" // wrong way

plugin_team.printEmployeesInformation();

// const plugin_team_copy = {name: 's', describe: plugin_team.describe}
//
// plugin_team_copy.describe();

console.log(core_team.devops)

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "IT");
    }

    addEmployee(employee: string) {
        if (employee == 'Max') {
            return
        }
        this.employees.push(employee) //Property 'employees' is private and only accessible within class 'Department'.
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment('d3', [])

accounting.addReport("new papers")
accounting.addReport("salary")
accounting.addReport("monitoring")

accounting.addEmployee('Narek')

accounting.printReports()

accounting.printEmployeesInformation()