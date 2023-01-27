import React from 'react';
import { getRandomArrayElement, getRandomDate, getRandomMatrix, getRandomNumber } from './utils/random';


function App() {
   //Test 1
   for (let i:number = 0; i < 6; i++) { 
console.log ("test 1.1.1 from 0 till 5, randNamder: 0 - 4", getRandomNumber(0, 5, true, false));
console.log ("test 1.1.2 from 0 till 5, randNamder: 0 - 5", getRandomNumber(0, 5, true, true));
console.log ("test 1.1.3 from 0 till 5, randNamder: 1 - 4", getRandomNumber(0, 5, false, false));
 console.log ("test 1.1.4 from 0 till 5, randNamder: 1 - 5", getRandomNumber(0, 5, false, true));
}
 console.log ("test 1.2 from 5 till 0, randNamder: 0 - 4", getRandomNumber(5, 0));
 //console.log ("test 1.3 min = max", getRandomNumber (5,5));
 //console.log ("test 1.4 from 2 till 3, false-false", getRandomNumber (2, 3, false, false))
   
 // Test 2
console.log (getRandomMatrix(3, 3, 0, 5))

// Test 3
for (let i:number = 0; i < 6; i++) { 
console.log ("Test 3, array: 1, 2, 3, 4, 5, element: ", getRandomArrayElement ([1, 2, 3, 4, 5]))
}

//Test 4 
for (let i:number = 0; i < 6; i++) { 
console.log ("Test 4, Year 2015 - 2024:", getRandomDate(2015, 2024).toDateString())
}

   return <div>

   </div> 
 
}

export default App;

