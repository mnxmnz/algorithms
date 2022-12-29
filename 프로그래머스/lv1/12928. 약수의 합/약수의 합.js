function solution(n) {
    let divisor = [];
    
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            if(i !== n / i) divisor.push(i, n / i);
            else divisor.push(i);
        }
    }
    
    return divisor.reduce((acc, cur) => acc + cur, 0);
}