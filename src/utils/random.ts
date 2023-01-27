export {}


export function getRandomNumber(min: number, max: number,
    isMinInclusive: boolean=true, isMaxInclusive: boolean=false): number {
   if (isMinInclusive === false) {
                min++;  }
   if (isMaxInclusive === true)   {
                max++; }                   
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


//randMatrix.forEach (el => {

//})
/*
randMatrix.forEach (elRows => {
    elRows.forEach (elCol => {
        randMatrix[elRows][elCol] = getRandomNumber(min, max)
    }) 

}) */

const randMatrix: number[][] = Array(rows).fill(getRandomNumber(min, max)).map(() => 
     Array(columns).fill(getRandomNumber(min, max)))

//var arr = Array(row).fill().map(() => Array(column).fill(0));
let randMatrix1: number[][] = new Array(rows);

//console.log (randMatrix1);
//randMatrix1 = randMatrix1.map (el => new Array(columns));
//console.log (randMatrix1);
let randMatrix2: number[][] = Array.from(Array(rows), () => new Array(columns));
console.log (randMatrix2)
//randMatrix2.map (el => getRandomNumber(min,max))
//console.log ("2", randMatrix2)
//randMatrix = Array.from({length: rows}, el => {}).map(Array.from({length: columns}, el => {})

for (let i: number = 0; i<rows; i++) { 
    for (let  j: number =0; j < columns; j++) {
        randMatrix2[i][j] = getRandomNumber(min, max)
       
    }
    console.log ("2", randMatrix2)
    //randMatrix[i][j]
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
