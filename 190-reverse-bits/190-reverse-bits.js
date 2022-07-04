/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const reverseBits = function(n) {
    const reverseNum = n.toString(2).split("").reverse().join("").padEnd(32, "0");
    const answer = parseInt(reverseNum, 2);
    
    return answer;
};