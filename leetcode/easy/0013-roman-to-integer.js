/**
 * 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * Easy
 *
 * Task: convert a Roman numeral string to an integer.
 *
 * Approach: map each symbol to its value and scan left to right; a
 * symbol smaller than the next one is subtractive (IV, IX, XL, ...), so
 * subtract it, otherwise add it.
 * Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let count = 0;


    for(let index = 0; index < s.length; index++) {
        const current   = values[s[index]];
        const next = values[s[index + 1]];

        if(current < next)
            count -= current;
        else 
            count += current;
    }


    return count;
};
