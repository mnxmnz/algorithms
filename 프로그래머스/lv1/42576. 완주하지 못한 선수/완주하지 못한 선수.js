function solution(participant, completion) {
    const hash = new Map();
    
    for(let x of participant) {
        if(hash.has(x)) {
            hash.set(x, hash.get(x) + 1);
        } else {
            hash.set(x, 1);
        }
    }
    
    for(let x of completion) {
        if(hash.has(x)) {
            hash.set(x, hash.get(x) - 1);
        }
    }
    
    for(let cnt of hash.keys()) {
        if(hash.get(cnt) === 1) {
            answer = cnt;
        }
    }
    
    return answer;
}