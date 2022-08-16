/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function(nums) {
    const len = nums.length;
    const total = len * (len + 1) / 2;
    const sum = nums.reduce((a, b) => a + b);
    
    return total - sum;
};