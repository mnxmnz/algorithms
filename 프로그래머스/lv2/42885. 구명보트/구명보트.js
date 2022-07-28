/**
 * 1. people 배열 정렬
 * 2. 가장 가벼운 사람 + 가장 무거운 사람 <= 무게 제한
 * 3. 두 사람의 합이 무게 제한보다 작으면 함께 타고 구명보트 개수 추가
 * 4. 크면 가장 무거운 사람만 타고 구명보트 개수 추가
 * 5. 반복하기
 */

function solution(people, limit) {
    let answer = 0;
    
    // 1. people 배열 정렬
    const asc = [...people];
    asc.sort((a, b) => a - b);
    
    let start = 0;
    let end = asc.length - 1;
    
    while (start < end) {
        // 2. 가장 가벼운 사람 + 가장 무거운 사람 <= 무게 제한
        if (asc[start] + asc[end] <= limit) {
            start++;
            end--;
            answer++;
        } else {
            end--;
            answer++;
        }
        
        if (start === end) answer++;
    }
    
    return answer;
}