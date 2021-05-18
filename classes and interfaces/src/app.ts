class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }
}

const plugin_team = new Department("Plugin team")

plugin_team.describe()

const plugin_team_copy = {name: 's', describe: plugin_team.describe}

plugin_team_copy.describe();