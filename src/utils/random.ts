export {}

console.log (getRandomNumber (3, 5, true, false))

function getRandomNumber(min: number, max: number,
    isMinInclusive: boolean=true, isMaxInclusive: boolean=false): number {
   
   if (max < min) { 
     let i: number = min;
     min = max;
     max = i;
    }
    else if ( max === min) {
        throw "min may not be equaled to max";
    }
    let randNumder: number = min + Math.round(Math.random())*(max-min+1);
    
    return randNumder;
    }  


function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {
let randMatrix: number[][];
//randMatrix.forEach (el => {

//})
for (let i: number = 0; i<rows; i++) {
    for (let  j: number =0; j < columns; j++) {
        randMatrix[i][j] = getRandomNumber(min, max)
    }

    //randMatrix[i][j]
}
return randMatrix;
    }   


function getRandomArrayElement(array: any[]): any {

}    

/*
function getRandomDate(minYear: number, maxYear: number): Date {
   let randDate: Date;
    return randDate;
}
*/