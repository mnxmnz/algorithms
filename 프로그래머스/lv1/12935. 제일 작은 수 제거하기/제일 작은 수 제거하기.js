function solution(arr) {
    if(arr.length <= 1) return [-1];

    let min = Number.MAX_SAFE_INTEGER;
    
    for (let value of arr) {
        if(value < min) min = value;
    }
    
    return arr.filter((element) => element !== min);
}