function solution(numbers) {
    let answer = 0;
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let x of numbers) {
        for (let i in arr) {
            if (x === arr[i]) arr.splice(i, 1);
        }
    }
    
    for (let n of arr) {
        answer = answer += n;
    }
    
    return answer;
}