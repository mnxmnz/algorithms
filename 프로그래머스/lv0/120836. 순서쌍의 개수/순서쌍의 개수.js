function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0 && i * i === n) answer++; 
        else if(n % i === 0) answer += 2;
    }
    
    return answer;
}