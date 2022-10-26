function solution(hp) {
    const ants = [5, 3, 1];
    let target = hp;
    let answer = 0;
    
    for(let x of ants) {
        answer += Math.floor(target / x);
        target %= x;
    }
    
    return answer;
}