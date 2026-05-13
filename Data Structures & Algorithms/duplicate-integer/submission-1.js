class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();

        for(let i in nums){
            if(seen.has(nums[i])){
                return true;
            }else{
                seen.add(nums[i]);
            }
        }
        return false;
    }
}
