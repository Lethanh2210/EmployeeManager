import {Employee} from "./Employee";
export class EmployeeManager{
    static employees: Employee[] = [];
    static renderAll(): void{
        for (let i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i]);
        }
    }
    static renderEmployee(employee): void{
        console.log(`${employee._name}, ${employee._birth}, ${employee._address}, role: ${employee._role}`);
    }
    static addEmployee(name, birth, address, role): void{
        let employee = new Employee(name,birth,address,role);
        this.employees.push(employee);
    }
    static removeEmployee(index): void{
        this.employees.splice(index,1);
    }
    static editEmployee(i: number,name: string, birth: string, address, role){
        this.employees[i].setName(name);
        this.employees[i].setBirth(birth);
        this.employees[i].setAddress(address);
        this.employees[i].setRole(role);
    }
}