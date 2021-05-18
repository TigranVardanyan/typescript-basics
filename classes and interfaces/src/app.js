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
        this.employees = [];
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.id + ' ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        // this.id = "d2" //Attempt to assign to const or readonly variable
        this.employees.push(employee);
    };
    Department.prototype.printEmployeesInformation = function () {
        console.log("Employees count - " + this.employees.length);
        console.log(this.employees);
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
console.log(core_team.devops);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee == 'Max') {
            return;
        }
        this.employees.push(employee); //Property 'employees' is private and only accessible within class 'Department'.
    };
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
accounting.addEmployee('Narek');
accounting.printReports();
accounting.printEmployeesInformation();
