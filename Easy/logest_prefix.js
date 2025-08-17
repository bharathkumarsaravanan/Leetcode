// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pref = "";
    for (let i = 0; i < strs[0].length; i++) {
        let char =  strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return pref?pref:"";
            }
        }
        pref = pref + char
    }
    return pref;
};