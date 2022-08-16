/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    const hash = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        if(hash.has(diff)) return [i, hash.get(diff)];
        else hash.set(nums[i], i);
    }
};