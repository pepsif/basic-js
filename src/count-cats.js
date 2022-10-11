// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *General task description
Your task is to write several functions that are the solution to the subtasks. Subtasks descriptions, as well as instructions on how to run tests and submit solutions are below.
 */
function countCats( backyard ) {
  const arr = backyard;
  let countCat = 0;
  
  let findCatEl = arr.forEach( arr => {
      arr.forEach( element => {
        
        if(element === "^^") {
           countCat++
         } 
    
      });
    if(countCat === 0 ) { return 0 }
  });
 
    return countCat
  }

module.exports = {
  countCats
};

console.log( countCats( [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) )