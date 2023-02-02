import { getDefaultFormatCodeSettings } from "typescript";
import { getRandomMatrix } from "../utils/random";

export class LifeMatrix {
    constructor (private _numbers: number[][]) {

    }

    get numbers () {
        return this._numbers;
    }

    nextStep(): number[][] {
  
  console.log ("ArrIn", this._numbers)

 return this._numbers = this._numbers.map((row,i)=> 
        row.map((__,j) => this.getNewCell(i, j)));

}

getNewCell (i:number, j:number): number {

  const liveNum: number = this.getLiveNum(i,j);
  return this._numbers[i][j] ? this.getLive (liveNum) : this.getDead(liveNum);
  
 // return newCell;
}

getLiveNum (i: number, j: number): number {
const indNeib: number[][]= [[-1,-1],[-1, 0],[-1, 1],
                             [0,-1],[0,1],
                             [1,-1],[1,0],[1,1]]
let liveNum: number = 0;                             
for (let ind: number = 0; ind< indNeib.length; ind++) {
  const ind1New: number = i+indNeib[ind][0];
  const ind2New: number = j+indNeib[ind][1];

liveNum = (ind1New >= 0 && ind1New < this._numbers.length &&
 ind2New >= 0 && ind2New < this._numbers[i].length) ?
  liveNum += this._numbers[ind1New][ind2New] : liveNum;
}    
             
  return liveNum;
}



getLive (liveNum: number): number {

  return (liveNum === 2 || liveNum === 3) ? 1 : 0
}

getDead (liveNum: number): number {

  return liveNum === 3 ? 1 : 0
}
}
