/**
 * @param {number[]} nums
 * @return {number[]}
 */

//[-4,-1,0,3,10]
var sortedSquares = function(nums) {
    const n = nums.length;
    const ans = Array(n).fill(0);
    for(let i = 0, j = n - 1, k = n -1; i <= j; --k ){ //i=2, j=2, k=0
        const [a,b] = [nums[i] * nums[i], nums[j] * nums[j]]; //16,100 / 16,9 / 1,9 / 1,0
        if (a > b) {
            ans[k] = a;
            ++i;
        }else {
            ans[k] = b;
            --j;
        }
    }
    return ans; //[0,1,9,16,100]
};