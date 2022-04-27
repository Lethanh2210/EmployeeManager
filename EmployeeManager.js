"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.renderAll = function () {
        for (var i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i]);
        }
    };
    EmployeeManager.renderEmployee = function (employee) {
        console.log("".concat(employee._name, ", ").concat(employee._birth, ", ").concat(employee._address, ", role: ").concat(employee._role));
    };
    EmployeeManager.addEmployee = function (name, birth, address, role) {
        var employee = new Employee_1.Employee(name, birth, address, role);
        this.employees.push(employee);
    };
    EmployeeManager.removeEmployee = function (index) {
        this.employees.splice(index, 1);
    };
    EmployeeManager.editEmployee = function (i, name, birth, address, role) {
        this.employees[i].setName(name);
        this.employees[i].setBirth(birth);
        this.employees[i].setAddress(address);
        this.employees[i].setRole(role);
    };
    EmployeeManager.employees = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
