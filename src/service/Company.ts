import { Employee } from "../model/Employee";
import { getRandomNumber } from "../utils/random";
import employeeConfig from "../config/employee-config.json"

export class Company {
    private employees: Employee[] = [];
    addEmployee(empl: Employee): void {
        const {minId, maxId, departments,
            minBirthYear, maxBirthYear, minSalary, maxSalary} = employeeConfig;
        console.log ("comp empl", empl)
            empl.id = getRandomNumber(minId, maxId,true, true);
            console.log ("comp empl2", empl) 
        this.employees.push(empl);
    }
    updateEmployee(empl: Employee): void {
        const index = this.employees.findIndex(e => e.id == empl.id);
        
        if (index >= 0 ) {
           
           this.employees[index] = empl;
        }
        
    }
    getEmployee(id: number): Employee | null {
        const index: number = this.employees.findIndex(e => e.id === id);
        return index < 0 ? null : this.employees[index];
    }
    removeEmployee(id: number): void {
        const index: number = this.employees.findIndex(e => e.id === id);
        index >= 0 && this.employees.splice(index, 1) ;
    }
    getAllEmployees(): Employee[] {
        return this.employees.slice();
    }
}