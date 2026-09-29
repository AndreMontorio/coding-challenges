/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * Easy
 *
 * Task: return the indices of the two numbers in nums that add up to
 * target (exactly one solution exists and the same element can't be
 * used twice).
 *
 * Approach: brute force — for each element, check every element before
 * it and record both indices when the pair sums to target.
 * Complexity: O(n^2)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arrayIndex = [];
    nums.forEach((item, index) => {
        if(index == 0) 
            return;

        for(let index2 = 0; index2 < nums.length; index2++) {
            if(index2 == index)
                return;

            if(item + nums[index2] == target) {
                arrayIndex.push(index2);
                arrayIndex.push(index);
            }
        }
    });

    return arrayIndex;
};