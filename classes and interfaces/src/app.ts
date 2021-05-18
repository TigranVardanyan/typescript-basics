class Department {
    name: string;
    constructor(n:string) {
        this.name = n;
    }
}

const plugin_team = new Department("Plugin team")

console.log(plugin_team)