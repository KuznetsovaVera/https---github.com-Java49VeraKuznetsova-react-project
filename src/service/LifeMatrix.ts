import { getRandomMatrix } from "../utils/random";


export class LifeMatrix {
    constructor (private _numbers: number[][]) {

    }

    get numbers () {
        return this._numbers;
    }

   
    nextStep(): number[][] {                             
        console.log ("Arr in",this._numbers);
    //const numbersNew: number[][] = this._numbers.slice(); 
    const numbersNew: number[][] = this._numbers.map ((row,i) => row.map((cell,j) => getNewCell(this._numbers, i,j)));
    /*
          console.log ("1, cellLive", cellLive, index1, index2);

          if (this._numbers[index1][index2] === 1) {
            numbersNew[index1][index2] = (cellLive===2 || cellLive===3) ?  1 :  0;
         console.log("new1", numbersNew[index1][index2], cellLive)
                        }
                 else {
             numbersNew[index1][index2] = cellLive === 3 ? 1 : 0;
           //  console.log("new2", numbersNew[i][j], cellsLive)
                          }
                  
       

    })     */      

   
     return numbersNew;  


}


}

function getNewCell (arrNumbers: number[][], i: number,j: number): number {

const liveNum = getCurNeib (arrNumbers, i, j);

    return 0;
}

function getCurNeib (arrNumbers: number[][], i: number,j: number): number {
    const liveSum = getCurCell(arrNumbers[i-1][j-1]) +
                    getCurCell(arrNumbers[i-1][j]);
    return liveSum;                
}
function getCurCell (curCell: number | undefined): number {
    
    return curCell ? 1 : 0;
}

/*
    //    console.log ("Arr in",this._numbers);
    const arrayNeighbours: number[][] = [[-1, 1], [-1, 0], [-1, 1],
                                        [0, -1], [0, 1],
                                        [1, -1], [1, 0], [1, 1]];
 
     for (let i: number = 0; i<this._numbers.length; i++) { 
             for (let  j: number =0; j < this._numbers[0].length; j++) {
        let cellsLive: number = 0;
        arrayNeighbours.forEach (el => {
         const index1: number =  i+el[0];
         const index2: number =  j+el[1];
         if (index1 >=0 && index1 < this._numbers.length && 
                index2 >=0 && index2 < this._numbers[0].length )  { 
             if (this._numbers[index1][index2] === 1) {
               cellsLive ++;
                        }
        }
                         
    })
   //console.log("old", numbersNew[i][j])
       if (this._numbers[i][j] === 1) {
       numbersNew[i][j] = (cellsLive===2 || cellsLive===3) ?  1 :  0;
    //   console.log("new1", numbersNew[i][j], cellsLive)
                   }
            else {
        numbersNew[i][j] = cellsLive === 3 ? 1 : 0;
      //  console.log("new2", numbersNew[i][j], cellsLive)
                     }
           }   
     }                                              
       //   console.log("numbersNew", numbersNew)      
        /*
    this._numbers.forEach ((el1, index1) => {
        this._numbers[index1].forEach((el2, index2) => {
          const cellLive = 
          this.getCellNeib(numbersNew[index1-1][index2-1])+
                    this.getCellNeib(numbersNew[index1][index2-1]) 
                    // !!!  ERROR
          /* this.getCellNeib(index1-1,index2+1)+ 
          this.getCellNeib(index1,index2-1)+ 
          this.getCellNeib(index1,index2+1)+
          this.getCellNeib(index1+1,index2-1)+
          this.getCellNeib(index1+1,index2)+ 
          this.getCellNeib(index1+1,index2+1);   
         */
       
/*
getCellNeib(cell: number | undefined) : number {
  // console.log ("ind1, ind2:", index1, index2);  
    //let cellCur: number = 0;
    /*
    if (index1 >=0 && index1 < this._numbers.length && 
        index2 >=0 && index2 < this._numbers[0].length ) 
  // let cellCur: number = (this._numbers[index1][index2]== undefined ||   
    //        this._numbers[index1][index2] === 0) ? 0 : 1 
    const cellCur = (cell == undefined || cell === 0) ? 0 : 1
  // console.log ("cellCur:", cellCur, "ind1 , ind2", index1, index2)
    return cellCur; 
    */