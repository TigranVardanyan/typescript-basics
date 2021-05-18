var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.developers = [];
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.id + ' ' + this.name);
    };
    Department.prototype.addDeveloper = function (employee) {
        // this.id = "d2" //Attempt to assign to const or readonly variable
        this.developers.push(employee);
    };
    Department.prototype.printDeveloperInformation = function () {
        console.log(this.developers.length);
        console.log(this.developers);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, devops) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.devops = devops;
        return _this;
    }
    return ITDepartment;
}(Department));
var core_team = new ITDepartment('d2', ["Armen", "Vardan"]);
var plugin_team = new Department('d1', "Plugin team");
plugin_team.describe();
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
console.log(core_team.devops);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment('d3', []);
accounting.addReport("new papers");
accounting.addReport("salary");
accounting.addReport("monitoring");
accounting.printReports();
