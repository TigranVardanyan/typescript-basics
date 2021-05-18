var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var plugin_team = new Department("Plugin team");
plugin_team.describe();
var plugin_team_copy = { name: 's', describe: plugin_team.describe };
plugin_team_copy.describe();
