class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = nums.reduce((acc, num) => {
            acc[num] =(acc[num] || 0) + 1;
            return acc;
        }, {});
const arr = Object.entries(freq).map(([num, freq]) => [
            freq,
            num        ]);
        arr.sort((a,b) => b[0] - a[0]);

        return arr.slice(0,k).map((pair) => pair[1])

    }
}
