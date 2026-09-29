/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Easy
 *
 * Task: given a string of brackets '()[]{}', determine whether it is
 * valid — every bracket is closed by the same type, in the right order.
 *
 * Approach: stack — push opening brackets; each closing bracket must
 * match the top of the stack (then pop it), otherwise the string is
 * invalid. It is valid if the stack ends empty.
 * Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let count = [];
    for(let index = 0; index < s.length; index++) {
        if(s[index] === '(' || s[index] === '{' || s[index] === '[') {
            count.push(s[index]);
        }
        else {
            if(s[index] === ')' && count[count.length - 1] === '(') {
                count.pop();
            }
            else if(s[index] === '}' && count[count.length - 1] === '{') {
                count.pop();
            }
            else if(s[index] === ']' && count[count.length - 1] === '[') {
                count.pop();
            }
            else
                return false;
        }
    }

    return count.length > 0 ? false : true;
};