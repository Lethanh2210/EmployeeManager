"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var employ1 = new Employee_1.Employee("Hong", "4/9/1991", "Cam Giang", "thu quy");
EmployeeManager_1.EmployeeManager.addEmployee("Hong", "4/9/1991", "Cam Giang", "thu quy");
console.log(EmployeeManager_1.EmployeeManager.employees);
EmployeeManager_1.EmployeeManager.renderAll();
EmployeeManager_1.EmployeeManager.renderEmployee(employ1);
