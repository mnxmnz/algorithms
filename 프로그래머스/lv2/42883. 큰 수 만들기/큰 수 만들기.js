/**
 * 1. arr 배열의 크기가 0일 때 number 배열의 첫 번째 요소 삽입
 * 2. arr 배열의 값과 number 배열의 값 비교해서 arr 배열의 작은 값을 제거하고 number 배열의 큰 값 삽입
 * 3. k 값 감소하고 반복
 */

function solution(number, k) {
    const arr = [];
    let answer = '';
    
    for(let i = 0; i < number.length; i++) {
        const el = number[i];
        
        while(0 < k && arr[arr.length - 1] < el) {
            arr.pop();
            k--;
        }
        
        arr.push(el);
    }
    
    arr.splice(arr.length - k, k);
    answer = arr.join("");
    
    return answer;
}