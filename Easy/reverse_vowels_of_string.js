
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let reversed = s.reverse();
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let vowReversed = s.map(letter => {
    if (vowels.includes(letter)) {
        vowReversed.map(revLetter => {
            if (vowels.includes(revLetter)) {
                
            }
        })
    } else {
        return letter;
    }
  })  
};
// 345. Reverse Vowels of a String
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.