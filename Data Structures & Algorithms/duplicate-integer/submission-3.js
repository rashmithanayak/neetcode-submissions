class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set(nums);
        return !(seen.size == nums.length)

        // for(let i of nums){
        //     if(seen.has(i)){
        //         return true;
        //     }else{
        //         seen.add(i);
        //     }
        // }
        // return false;
    }
}