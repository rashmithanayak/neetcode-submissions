class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let preIdx = {};

        for(const i in nums){
            let item = nums[i];
            if((target-item) in preIdx){
                return [Number(i), Number(preIdx[target-item])]
            }
            preIdx[item] = i;
        }
    }
}
