function solution(my_str, n) {
    let answer = [];
    let words = [...my_str];
    
    while(words.length) {
        answer.push(words.splice(0, n).join(""));
    }
    
    return answer;
}