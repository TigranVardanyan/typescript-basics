class Department {
    // private id: string;
    // private name: string;
    private developers: string[] = []

    constructor(private readonly id: string, private name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.id + ' ' + this.name)
    }

    addDeveloper(employee: string) {
        // this.id = "d2" //Attempt to assign to const or readonly variable
        this.developers.push(employee)
    }

    printDeveloperInformation() {
        console.log(this.developers.length)
        console.log(this.developers)
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

plugin_team.addDeveloper('Hakob');
plugin_team.addDeveloper('Tigran');
plugin_team.addDeveloper('Karen');
plugin_team.addDeveloper('Anahit');
plugin_team.addDeveloper('Tigran');

// plugin_team.employees[7] = "Nik" // wrong way

plugin_team.printDeveloperInformation();

// const plugin_team_copy = {name: 's', describe: plugin_team.describe}
//
// plugin_team_copy.describe();

console.log(core_team.devops)

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "IT");
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

accounting.printReports()
