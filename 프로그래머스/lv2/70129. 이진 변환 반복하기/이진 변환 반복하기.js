function solution(s) {
    let transCount = 0;
    let zeroCount = 0;
    
    while(s !== "1") {
        if(s.indexOf("0") !== -1) {
            zeroCount++;
            s = s.replace("0", "");
        } else {
            transCount++;
            s = s.length.toString(2);
        }
    }

    return [transCount + 1, zeroCount];
}