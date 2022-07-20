/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 1. nums 배열 오름차순 정렬
 * 2. nums 배열 총 길이의 중간 지점 선정
 * 3. 중간 지점을 기준으로 작은 값, 큰 값으로 구분
 * 4. 배열의 짝수 index에 작은 값 내림차순 정렬
 * 5. 배열의 홀수 index에 큰 값 내림차순 정렬
 */

const wiggleSort = function(nums) {
    let smaller = [];
    let bigger = [];
    const ceilLength = Math.ceil(nums.length / 2);
    const floorLength = Math.floor(nums.length / 2);
    
    // 1. 오름차순 정렬
    nums.sort((a, b) => a - b);
    
    // 2. 중간 지점 선정
    const mid = ceilLength;
    
    // 3. 작은 값, 큰 값 구분
    smaller = nums.slice(0, mid);
    bigger = nums.slice(mid, nums.length);
    
    for (let i = 0; i < ceilLength; i++) {
        // 4. 짝수 index 정렬
        nums[2 * i] = smaller[smaller.length - 1 - i];
        // 5. 홀수 index 정렬
        bigger[floorLength - 1 - i] && (nums[2 * i + 1] = bigger[floorLength - 1 - i]);
    }
};