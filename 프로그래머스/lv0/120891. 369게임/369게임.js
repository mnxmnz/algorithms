function solution(order) {
    const orderArray = String(order).split("");
    let answer = 0;
    
    for(const x of orderArray) {
        if(x !== "0" && Number(x) % 3 === 0) answer++;
    }
    
    return answer;
}