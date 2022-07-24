function solution(absolutes, signs) {
    let answer = absolutes.reduce((acc, cur) => acc + cur, 0);
    
    for (i in signs) {
        if (!signs[i]) answer = answer - (absolutes[i] * 2);
    }

    return answer;
}