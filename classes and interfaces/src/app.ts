class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = []

    static fiscalYear = 2020;

    constructor(private readonly id: string, private name: string) {
        // this.name = n;
        // console.log(this.fiscalYear) //Property 'fiscalYear' is a static member of type 'Department'.
        console.log(`Print fiscal year static field in class constructor: ${Department.fiscalYear}`)
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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(employee: string) {
        if (employee == 'Max') {
            return
        }
        this.employees.push(employee) //Property 'employees' is private and only accessible within class 'Department'.
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment('d3', [])


accounting.mostRecentReport = 'Year end report';
accounting.addReport("new papers");

console.log('Most recent - ' + accounting.mostRecentReport)

accounting.addReport("salary")
accounting.addReport("monitoring")

accounting.addEmployee('Narek')

accounting.printReports()

accounting.printEmployeesInformation()
console.log(`Fiscal year: ${Department.fiscalYear}`);