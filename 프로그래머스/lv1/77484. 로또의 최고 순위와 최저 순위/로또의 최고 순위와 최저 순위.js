function solution(lottos, win_nums) {    
    let winsCount = 0;
    let zeroCount = 0;
    
    for(let x of lottos) {
        if(win_nums.includes(x)) winsCount++;
        else if(x === 0) zeroCount++;
    }
    
    const min = winsCount < 2 ? 6 : 7 - winsCount;
    const max = (winsCount + zeroCount) < 2 ? 6 : 7 - (winsCount + zeroCount);
    
    return [max, min];
}