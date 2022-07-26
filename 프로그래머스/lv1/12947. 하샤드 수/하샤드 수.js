function solution(x) {
    let sum = 0;
    
    for(let val of x.toString()) {
        sum += Number(val);
    }

    return (x % sum === 0);
}