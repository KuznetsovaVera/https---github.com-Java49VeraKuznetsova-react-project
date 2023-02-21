import { Employee } from "../model/Employee";
const SALARY: number = 20000;
const PER_CENT: number = 10;
export class Company {
    private employees: Employee[] = [];

  
    addEmployee(empl: Employee): void {
        this.employees.push(empl)
    }
  updateEmployee (empl: Employee): void {
  const emplUpdated = this.getEmployee(empl.id);
  if (emplUpdated != null) {
            this.removeEmployee(empl.id)
            console.log (emplUpdated)
            empl.birthDate = emplUpdated.birthDate;
            empl.department = emplUpdated.department;
            empl.name = emplUpdated.name
            if (emplUpdated.salary  < SALARY) {
                empl.salary = emplUpdated.salary+Math.round(emplUpdated.salary*PER_CENT/100);
                console.log("empl.salary", empl.salary);
                                            }
             else {
                empl.salary = emplUpdated.salary-Math.round(emplUpdated.salary*PER_CENT/100);
                 }  
             this.addEmployee(empl);            
        }
       
       }
    
    getEmployee(id: number): Employee | null {
        const index: number = this.employees.findIndex(e => e.id === id)
        return index < 0? null : this.employees[index]
    }
    removeEmployee(id:number): void {
      
        const index: number = this.employees.findIndex(e => e.id === id)
        index >= 0 && this.employees.splice(index,1);
    }
    getAllEmployees(): Employee[] {
        return this.employees.slice();
    }
}
