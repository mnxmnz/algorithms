function solution(n) {
    let arr = n.toString().split('');
    let num = [];
    
    for (let value of arr) {
        num.push(Number(value));
    }

    return num.reduce((acc, cur) => acc + cur);
}