function solution(n) {    
    let answer = 0;
    const num = Math.sqrt(n);
    
    if(num % 1 === 0) answer = (num + 1) * (num + 1);
    else answer = -1;
        
    return answer
}