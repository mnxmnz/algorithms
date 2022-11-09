/*
 * B의 큰 숫자로 A의 큰 숫자 이겨서 승점 얻기
 * 투포인터
 */

function solution(A, B) {
    const sortedA = [...A].sort((a, b) => b - a);
    const sortedB = [...B].sort((a, b) => b - a);
    let answer = 0;
    let num = 0;
    
    for(const x of sortedA) {
        // A보다 B가 더 클 때
        if(x < sortedB[num]) {
            answer++;
            // B의 인덱스 값 증가
            num++;
        }
    }
    
    return answer;
}