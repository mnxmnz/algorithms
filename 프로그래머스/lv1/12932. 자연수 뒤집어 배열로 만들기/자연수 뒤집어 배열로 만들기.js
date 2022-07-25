function solution(n) {
    let answer = [];
    
    let num = n.toString().split('').reverse();
    
    for (let value of num) {
        answer.push(Number(value));
    }
    
    return answer;
}