/**
 * @param {number[]} nums
 * @return {number[]}
 */

//[-4,-1,0,3,10]
// 1. 함수 안에서 제곱하기
// 
let makeSquares = (num) => {
    num = num*num;
    return num;
    
}

var sortedSquares = function(nums) {
    let SqNum=0;
    let arr =[];
    for (num of nums){
        SqNum = makeSquares(num);
        arr.push(SqNum);
    }
    arr.sort((a, b) => a - b);
     console.log(arr);
    return arr;
};