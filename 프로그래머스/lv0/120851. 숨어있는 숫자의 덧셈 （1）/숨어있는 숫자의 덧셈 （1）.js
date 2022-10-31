function solution(my_string) {
    let answer = 0;
    const arr = my_string.split("");
    
    for(const x of arr) {
        if(!isNaN(x)) answer += Number(x);
    }
    
    return answer;
}