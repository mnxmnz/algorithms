function solution(age) {
    const ages = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let answer = "";
    
    for(const x of String(age)) {
        answer += ages[x];
    }
    
    return answer;
}