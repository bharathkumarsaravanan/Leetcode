// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    
    for (let i = 0; i < s.length; i++) {
        if (!pairs[s[i]]) {
            stack.push(s[i])
        } else if (stack[stack.length-1] === pairs[s[i]]) {
            stack.pop()
        } else if (pairs[s[i]]) {
            return false
        } 
    }
    
    return stack.length === 0;
};