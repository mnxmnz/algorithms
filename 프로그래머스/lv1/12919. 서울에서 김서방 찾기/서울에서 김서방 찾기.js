function solution(seoul) {
    let idx = 0;
    
    for (let x in seoul) {
        if (seoul[x] === "Kim") idx = x; 
    }
    
    
    return `김서방은 ${idx}에 있다`;
}