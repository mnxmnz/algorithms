/*
 * B의 큰 숫자로 A의 큰 숫자 이겨서 승점 얻기
 */


function solution(A, B) {
    const sortedA = [...A].sort((a, b) => b - a);
    const sortedB = [...B].sort((a, b) => b - a);
    let answer = 0;
    let num = 0;
    
    for(const x of sortedA) {
        if(x < sortedB[num]) {
            answer++;
            num++;
        }
    }
    
    return answer;
}