function solution(a, b) {
    const len = a.length;
    let sum = 0;
    
    for(let i = 0; i < len; i++) {
        sum += a[i] * b[i];
    }
    
    return sum;
}