/**
 * 1. people 배열 정렬
 * 2. 가장 가벼운 사람 + 가장 무거운 사람 <= 무게 제한
 * 3. 두 사람의 합이 무게 제한보다 작으면 함께 타고 구명보트 개수 추가
 * 4. 크면 가장 무거운 사람만 타고 구명보트 개수 추가
 * 5. 가장 가벼운 사람과 가장 무거운 사람이 같으면 혼자 남은 경우이므로 구명보트 개수 추가
 */

function solution(people, limit) {
    let answer = 0;
    
    // 1. people 정렬
    const asc = [...people];
    asc.sort((a, b) => a - b);
    
    let start = 0;
    let end = asc.length - 1;
    
    while (start < end) {
        // 2. 가장 가벼운 사람 + 가장 무거운 사람 <= 무게 제한
        if (asc[start] + asc[end] <= limit) {
            // 3. 두 사람 함께 타는 경우
            start++;
            end--;
            answer++;
        } else {
            // 4. 가장 무거운 사람만 타는 경우
            end--;
            answer++;
        }
        
        // 5. 혼자 남은 경우
        if (start === end) answer++;
    }
    
    return answer;
}
