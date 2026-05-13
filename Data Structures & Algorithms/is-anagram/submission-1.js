class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1 = s.toLowerCase().split("").sort((a,b) => a.localeCompare(b)).join("");
        let t1 = t.toLowerCase().split("").sort((a,b) => a.localeCompare(b)).join("");

        return s1 === t1;
    }
}
