/*
 * n개의 원소가 모두 같거나 편차가 가장 적게 설정하기
 * 나머지를 n개의 몫에 다시 배분하기
 */

function solution(n, s) {
    const share = Math.floor(s / n);
    
    if(!share) return [-1];
    
    const rest = s % n;
    const answer = new Array(n).fill(share);
    
    for(let i = 0; i < rest; i++) {
        answer[answer.length - 1 - i]++;
    }
    
    return answer;
}