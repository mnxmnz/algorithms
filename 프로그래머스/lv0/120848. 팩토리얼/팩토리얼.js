function solution(n) {
    let total = 1;
    let num = 1;
    
    while(total <= n) {
        num += 1;
        total *= num;
    }
    
    return num - 1;
}