function solution(n, s) {
    if(s < n) return [-1];
    
    const answer = new Array(n).fill(Math.floor(s / n));
    
    for(let i = 0; i < s % n; i++) {
        answer[i]++;
    }
    
    return answer.sort((a, b) => a - b);
}