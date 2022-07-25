function solution(n, m) {
    let min = 0;
    let max = 0;
    
    for (let i = 1; i <= n; i++) {
        if((n % i === 0) && (m % i === 0)) {
            if(i > min) min = i;
        }
    }
    
    max = min * (n / min) * (m / min);
    
    return [min, max];
}