function solution(sizes) {
    let small = [];
    let big = [];
    
    for(let x of sizes) {
        x.sort((a, b) => a - b);
        small.push(x[0]);
        big.push(x[1]);
    }
    
    let min = Math.max(...small);
    let max = Math.max(...big);
    
    return min * max;
}