/**
 * @param {number} x
 * @return {number}
 */

const mySqrt = function(x) {
    if (x <= 1) return x;
    
    let low = 1;
    let mid = 0;
    let high = Math.floor(x / 2);
    
    
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        
        if (mid * mid === x) return mid;
        else if (mid * mid < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    if (x < mid * mid) return mid - 1;
    
    return mid;
};