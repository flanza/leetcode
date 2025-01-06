/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0, chars = new Set(), l = 0;

  for(let r = 0; r < s.length; r++) {
    const rChar = s.charAt(r);
    let lChar = s.charAt(l);
    
    while(chars.has(rChar) && l < r) {
      chars.delete(lChar);
      l++;
      lChar = s.charAt(l);
    }
    
    const size = r - l + 1;
    result = Math.max(result, size);
    chars.add(rChar);
  }

  return result;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("ohvhjdml"));
