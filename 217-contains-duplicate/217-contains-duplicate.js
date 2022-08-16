/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function(nums) {
    const hash = new Map();
    
    for(let x of nums) {
        hash.set(x, (hash.get(x) || 0) + 1);
        if(1 < hash.get(x)) return true;
    }
    
    return false;
};