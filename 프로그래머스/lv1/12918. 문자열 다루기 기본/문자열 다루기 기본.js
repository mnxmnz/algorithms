function solution(s) {
    const num = Number(s);
    const length = s.length;

    if (length !== 4 && length !== 6) return false;
    
    for(let x of s) {
        if(!Number.isInteger(Number(x))) return false;
    }
    
    return true;
}