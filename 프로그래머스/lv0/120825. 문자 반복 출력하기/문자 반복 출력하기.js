function solution(my_string, n) {
    const strings = my_string.split('');
    let answer = [];
    
    for(let x of strings) {
        answer.push(x.repeat(n));
    }
    
    return answer.join('');
}