export {}


export function getRandomNumber(min: number, max: number,
    isMinInclusive: boolean=true, isMaxInclusive: boolean=false): number {
   if (!isMinInclusive) {
                min++;  }
   if (isMaxInclusive)   {
                max++; }   
               
   if (max < min) { 
     [min, max] = [max, min]
        }
    else if (max === min) {
        throw "min may not be equaled to max";
    }
    
    const randNumder: number = Math.trunc(Math.random()*(max-min)) + min;
    return randNumder;
    }  


export function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {

let randMatrix: number[][] = Array.from(Array(rows), () => new Array(columns));
for (let i: number = 0; i<rows; i++) { 
    for (let  j: number =0; j < columns; j++) {
        randMatrix[i][j] = getRandomNumber(min, max, true, true)
       
    }
} 
return randMatrix;
    }   


export function getRandomArrayElement<T>(array: T[]): T {
return array [getRandomNumber(0, array.length)]
}    



export function getRandomDate(minYear: number, maxYear: number): Date {
    const numberMonth = 12;
    const numberDateMax = 31;
    const randYear: number =
      getRandomNumber (minYear, maxYear);
   
   const randMonth: number =
             getRandomNumber(0, numberMonth);
    
   let randDate: number = 
      getRandomNumber(1, numberDateMax, true, true);
   
    return  new Date (randYear, randMonth, randDate);
}