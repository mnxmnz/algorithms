function solution(s1, s2) {
    let answer = 0;
    
    for(const x of s1) {
        for(const y of s2) {
            if(x === y) answer++;
        }
    }
    
    return answer;
}