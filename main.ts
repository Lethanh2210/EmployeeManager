import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";
let employ1 = new Employee("Hong","4/9/1991","Cam Giang", "thu quy");
EmployeeManager.addEmployee("Hong","4/9/1991","Cam Giang", "thu quy");
console.log(EmployeeManager.employees);
EmployeeManager.renderAll();
EmployeeManager.renderEmployee(employ1);