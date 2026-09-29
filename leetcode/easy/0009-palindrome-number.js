/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * Easy
 *
 * Task: return whether the integer x reads the same backward as forward.
 *
 * Approach: negative numbers are never palindromes (because of the '-'
 * sign); otherwise convert x to a string, reverse it and compare it with
 * the original.
 * Complexity: O(d), where d is the number of digits
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    
    x = String(x);
    let aux = x.split('').reverse().join('');

    return x === aux;
};