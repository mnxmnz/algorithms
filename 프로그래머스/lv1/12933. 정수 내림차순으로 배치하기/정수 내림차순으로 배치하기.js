function solution(n) {
    let num = 0;
    
    num = n.toString().split("").sort().reverse().join("");
    
    return parseInt(num);
}