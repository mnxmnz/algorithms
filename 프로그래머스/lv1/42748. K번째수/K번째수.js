function solution(array, commands) {
    let answer = [];
    
    for(let x of commands) {
        let arr = array.slice(x[0] - 1, x[1]).sort((a, b) => a - b);
        answer.push(arr[x[2] - 1]);
    }
    
    return answer;
}