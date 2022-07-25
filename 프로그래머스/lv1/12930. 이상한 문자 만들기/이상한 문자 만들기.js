function solution(s) {
    let answer = '';
    let words = s.split(' ');
    
    for (let i in words) {
        for (let j in words[i]) {
            if(j % 2 === 0) answer += words[i][j].toUpperCase();
            else answer += words[i][j].toLowerCase();
        }
        if (i < words.length - 1) answer += ' ';
    }
    
    return answer;
}