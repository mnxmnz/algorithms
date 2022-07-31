function solution(a, b) {
    if (a === b) return a;
    
    let answer = 0;
    
    let smaller = a < b ? a : b;
    let bigger = a > b ? a : b;
    
    for(i = smaller; i <= bigger; i++) answer += i;
    
    return answer;
}
