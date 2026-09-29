/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Easy
 *
 * Task: remove the duplicates in-place from a sorted array so each
 * unique element appears only once, and return the number of unique
 * elements.
 *
 * Approach: walk the array and splice out each element equal to a
 * neighbor, stepping the index back after every removal.
 * Complexity: O(n^2) in the worst case, since each splice shifts the
 * remaining elements
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let index = 0; index < nums.length; index++) {
        if(index === 0) {
            continue;
        }
        else if(nums[index] === nums[index -1] || nums[index] === nums[index +1]) {
            nums.splice(index, 1);
            index--;
        }
    }

    return nums.length;
};