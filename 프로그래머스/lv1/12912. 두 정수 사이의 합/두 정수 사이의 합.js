function solution(a, b) {
    if (a === b) return a;
    
    let answer = 0;
    
    let smaller = a;
    let bigger = b;
    
    if (b < a) {
        smaller = b;
        bigger = a;
    }
    
    for(i = smaller; i <= bigger; i++) answer += i;
    
    return answer;
}