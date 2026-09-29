/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * Easy
 *
 * Task: find the longest common prefix among an array of strings
 * (empty string if there is none).
 *
 * Approach: vertical scan — use the first string as the reference and
 * compare each of its characters with the same position in every other
 * string; at the first mismatch, return the prefix up to that point.
 * Complexity: O(n * m), where m is the length of the first string
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const base = strs[0];

  for (let i = 0; i < base.length; i++) {
    const char = base[i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return base.slice(0, i);
      }
    }
  }

  return base;
};