// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam( members ) {
  if( !Array.isArray( members) ) return false
  const resultArr = [];
     // add words in array
     let sortedAbc = members.forEach( element => {
     // console.log( element )
          if( typeof element === "string") { 
       resultArr.push( element.toUpperCase() )
      } else  return;
    }) 
 
    //---DELETE-WHITESPACE---
   let noSpace = [];
   
   resultArr.forEach( e => {
    let a = e.split(' ').join('')
     noSpace.push(a[0])
    // console.log(  a  ) 
    
   });
      // sort array in ABC
 noSpace.sort();
   console.log( resultArr, noSpace )
  return noSpace.join('')
 }

module.exports = {
  createDreamTeam
};
