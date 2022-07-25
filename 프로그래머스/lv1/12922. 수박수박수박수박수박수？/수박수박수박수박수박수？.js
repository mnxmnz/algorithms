function solution(n) {
    let answer = '';
    let num = Math.floor(n/2);
    
    if (n % 2 === 0) {
        answer = "수박".repeat(num);
    } else {
        answer = "수박".repeat(num) + "수";
    }
    
    return answer;
}