function solution(array, n) {
    let cnt = 0;
    
    for(let x of array) {
        if(x === n) cnt++;
    }
    
    return cnt;
}