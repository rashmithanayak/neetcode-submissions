class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => acc += str.length + '#' +str ,"");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let res=[];
        let i=0;

        while(i < str.length){
            let j = i;
            while(str[j] != '#'){
                j++;
            }

            const strLength = parseInt(str.substring(i,j));
            res.push(str.substring(j+1,j+1+strLength));
            i=j+1+strLength;
        }

        return res;
    }
}
