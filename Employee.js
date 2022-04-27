"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, birth, address, role) {
        this._name = name;
        this._birth = birth;
        this._address = address;
        this._role = role;
    }
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (value) {
        this._name = value;
    };
    Employee.prototype.getBirth = function () {
        return this._birth;
    };
    Employee.prototype.setBirth = function (value) {
        this._birth = value;
    };
    Employee.prototype.getAddress = function () {
        return this._address;
    };
    Employee.prototype.setAddress = function (value) {
        this._address = value;
    };
    Employee.prototype.getRole = function () {
        return this._role;
    };
    Employee.prototype.setRole = function (value) {
        this._role = value;
    };
    return Employee;
}());
exports.Employee = Employee;
