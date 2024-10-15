/**
 * @param {number[]} nums
 * @return {number}
 */
nums=[1,1,0,1,1,1]
var findMaxConsecutiveOnes = function(nums) {
    let [ans,cnt]=[0,0];
    for(const x of nums){
        // 1,1,0,1,1,1
        // 0,1(1) 1,2(2) 2,0 2,1(2) 2,2(2) 2,3(3)
     if(x){
         ans=Math.max(ans,++cnt);
     }else{
         cnt=0; 
     }
    }
    return ans;
};