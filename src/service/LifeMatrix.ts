import { getRandomMatrix } from "../utils/random";


export class LifeMatrix {
    constructor (private _numbers: number[][]) {

    }

    get numbers () {
        return this._numbers;
    }

   
    nextStep(): number[][] {                             
        
    //    console.log ("Arr in",this._numbers);
    const numbersNew: number[][] = this._numbers.slice();            
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
     return numbersNew;  
}
}
