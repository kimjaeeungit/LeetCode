/**
 * @param {number[]} nums
 * @return {number}
 */

let hasEvenDigits=function(num){
 let digitCount = 0;
    while(num){
        digitCount++;
        num = Math.floor(num/10);
    }
    return (digitCount & 1) == 0;
}
var findNumbers = function(nums) {
   let evenDigitCount=0;
   for(let num of nums){
        if(hasEvenDigits(num))
        evenDigitCount++;
   }

   return evenDigitCount;
};