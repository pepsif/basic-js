// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits( n ) {
  const str = n.toString();
   const a = str.split('');
   const b = a.map( (el,index) => {
        return parseInt( a[index] )
      });
  const c = b.reduce((accum,element) => {
    return accum + element
   },0);
   let resultNum = 0;
   
   if( c.toString().length === 2) {
    resultNum = Number(c.toString()[0]) + Number(c.toString()[1]);
   } else {return c }
   // console.log(  c )
   return resultNum
 }

module.exports = {
  getSumOfDigits
};
