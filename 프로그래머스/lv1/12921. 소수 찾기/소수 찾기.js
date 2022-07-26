function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    
    return true;
}

function solution(n) {
    let cnt = 0;
    
    for(let i = 2; i <= n; i++) {
        if(isPrime(i)) cnt++;
    }
    
    return cnt;
}