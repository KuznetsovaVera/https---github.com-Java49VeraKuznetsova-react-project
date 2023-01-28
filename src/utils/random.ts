export {}


export function getRandomNumber(min: number, max: number,
    isMinInclusive: boolean=true, isMaxInclusive: boolean=false): number {
   if (isMinInclusive === false) {
                min++;  }
   if (isMaxInclusive === true)   {
                max++; }   
                 /* V.R.  !!!
    max = isMaxInclusive ? max : max-1;
    */                
   if (max < min) { 
     [min, max] = [max, min]
        }
    else if (max === min) {
        throw "min may not be equaled to max";
    }
    
    const randNumder: number = Math.floor(Math.random()*(max-min)) + min;
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


export function getRandomArrayElement(array: any[]): any {
return array [getRandomNumber(0, array.length)]
}    



export function getRandomDate(minYear: number, maxYear: number): Date {
    const numberMonth = 12;
    const numberDate30 = 30;
    const numberDate31 = 31;
    const numberFebr = 28;
    const randYear: number =
      getRandomNumber (minYear, maxYear);
   
   const randMonth: number =
             getRandomNumber(0, numberMonth);

   let randDate: number 
    if (randMonth === 3 || randMonth === 5 || randMonth === 8 || randMonth === 10) {
       randDate = getRandomNumber(1, numberDate30, true, true);
    }
    else if (randMonth === 1) {
        randYear%4 ===0 ? randDate =getRandomNumber(1, numberFebr+1, true, true) :
                          randDate = getRandomNumber(1, numberFebr, true, true)
  
    }
    else 
    {
        randDate = getRandomNumber(1, numberDate31, true, true)
    }
    
    return  new Date (randYear, randMonth, randDate);;
}
