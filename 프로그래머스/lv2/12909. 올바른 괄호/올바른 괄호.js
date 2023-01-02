function solution(s) {
    let count = 0;
    
    for(const x of s) {
        if(x === "(") count++;
        else count--;
        
        if(count < 0) return false;
    }
    
    return count === 0 ? true : false;
}