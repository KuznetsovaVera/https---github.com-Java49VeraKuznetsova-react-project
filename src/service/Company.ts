import { Employee } from "../model/Employee";
const SALARY: number = 20000;
const PER_CENT: number = 10;
export class Company {
    private employees: Employee[] = [];

  
    addEmployee(empl: Employee): void {
        this.employees.push(empl)
    }
  updateEmployee (empl: Employee): void {

 const index: number = this.employees.findIndex(e => e.id === empl.id)

 if (index >= 0) {

            empl.birthDate = this.employees[index].birthDate;
            empl.department = this.employees[index].department;
            empl.name = this.employees[index].name
            
            if (this.employees[index].salary  < SALARY) {
                empl.salary = this.employees[index].salary+Math.round(this.employees[index].salary*PER_CENT/100);
                console.log("empl.salary", empl.salary);
                                            }
             else {
                empl.salary = this.employees[index].salary-Math.round(this.employees[index].salary*PER_CENT/100);
                 }  
                      
             this.employees.splice(index, 1, empl )    
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
