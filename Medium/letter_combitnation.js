/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === "") return [];
    const keys = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    if (digits.split("").length === 1) return keys[digits].split("");
    const digitArr = digits.split("");
    const result = [];
    const key1 = keys[digitArr[0]];
    const key2 = keys[digitArr[1]];

    for(let i = 0; i < key1.length; i++){
        const letter = key1[i];
        const key2Arr = key2.split("");
        for(let j = 0; j < key2Arr.length; j++){
            result.push(letter + key2Arr[j]);
        }
    }
    return result;
};

console.log(letterCombinations("23"));


// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].