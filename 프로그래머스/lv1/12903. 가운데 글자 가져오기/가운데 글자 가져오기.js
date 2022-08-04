function solution(s) {
    const num = Math.floor(s.length / 2);
    const len = s.length;
    
    return (len % 2 === 0) ? s.slice(num - 1, num + 1) : s[num];
}