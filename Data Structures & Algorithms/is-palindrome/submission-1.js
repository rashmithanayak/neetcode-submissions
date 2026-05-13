class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char){
        return (char >= 'a' && char <= 'z' || 
        char >= 'A' && char <= 'Z' ||
        char >= '0' && char <= '9')
    }

    isPalindrome(s) {
        let right = s.length - 1;
        let left = 0;

    while(left < right){

    if(!this.isAlphaNumeric(s[left])){
left++;
continue;
    }
    if(!this.isAlphaNumeric(s[right])){
 right--;
 continue;
    }

    if(s[left].toLowerCase() != s[right].toLowerCase()){
        return false;
    }

    left++;
    right--;

  }
  return true;
    }
}
