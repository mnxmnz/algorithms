function solution(x) {
    const sum = String(x).split('').reduce((a, b) => Number(a) + Number(b), 0);
    
    return x % sum ? false: true;
}