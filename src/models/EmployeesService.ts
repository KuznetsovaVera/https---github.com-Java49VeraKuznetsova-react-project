import { EmployeeProps } from "./employeeProps";
import { getRandomArrayElement, getRandomDate, getRandomMatrix, getRandomNumber } from "../utils/random";
import dataEmployee from "../config/employee-config.json"

export type MinMaxMiddleProps ={
  min: number,
  max: number,
  middle: number
}

export function createRandomEmplyee(): EmployeeProps  {
 
  const emploeeys: EmployeeProps = {
    birthDate:  (getRandomDate(dataEmployee.MIN_YEAR, dataEmployee.MAX_YEAR).toISOString()).substring(0,10), 
    id: getRandomNumber(dataEmployee.MIN_ID, dataEmployee.MAX_ID,true,true),
    department: getRandomArrayElement(dataEmployee.DEPARTMENTS),
    salary: getRandomNumber (dataEmployee.MIN_SALARY, dataEmployee.MAX_SALARY, true, true),
    name: getRandomName()
   
  }
    console.log ("EmpSer: RandEmpl:", emploeeys)
    return emploeeys;
}

export function statAge(employees: Array<EmployeeProps>): 
    MinMaxMiddleProps {
  const currentDate = new Date();    
 
  const emplBirthDate: Array<string> = employees.map (el => el.birthDate);
  
  const emplBirthNumber: Array<number> = emplBirthDate[0] ?
  getAges(emplBirthDate) : [0]

  return {min: getMin(emplBirthNumber),
          max: getMax (emplBirthNumber),
          middle: getMiddle(emplBirthNumber) }
}

export function statSalary(employees: Array<EmployeeProps>): 
    MinMaxMiddleProps {
  const emplSalary: Array<number> = employees.map (el => el.salary);
  return {min: getMin(emplSalary),
          max: getMax (emplSalary),
          middle: getMiddle(emplSalary)}
  
 
}


function getMax (resArray: Array<number>): number {
    return  Math.max.apply(null, resArray)
  /* V.R. It is possible without apply
  return Math.max(...resArray);
  */

}
function getMin (resArray: Array<number>): number {
    return Math.min.apply(null, resArray)
}
function getMiddle (resArray: Array<number>): number {
    return (resArray.reduce ((rec, el) => (rec + el), 0)/resArray.length)
 /* V.R. 
  return Math.trunc(resArray.reduce ((rec, el) => (rec + el), 0)/resArray.length);
  */
  }

function getRandomName(): string {
  const LenghtName: number = 9;
  const randomLengthName = getRandomNumber(1, LenghtName, true, true);
  const numbersForName: number[][] = getRandomMatrix(1, randomLengthName,  'a'.charCodeAt(0), 'z'.charCodeAt(0));
 //console.log("RanName", numbersForName)
  return numbersForName[0].reduce((res,el) => {
    res = res + String.fromCharCode(el);
    return res;
  },'')
  
}

function getAges (emplBirthDate: Array<string>): Array<number> {
return emplBirthDate.map(el => getAge (el))

}

function getAge (dateString: string): number {
  const year: number = parseInt(dateString.substring(0,4));
  const month: number = parseInt(dateString.substring(5,7));
  const day: number = parseInt(dateString.substring(8,10));

  const today: Date = new Date();
  const birthDate: Date = new Date(year, month - 1, day) 

  /* V.R. The following is more simple and better 
  const birthDate: Date = new Date(dateString);
  */
    
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const m: number = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  
  return age;
}
