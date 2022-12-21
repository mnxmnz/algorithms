function solution(s) {
    const m = new Map();
    
    s.split('').map(v => m.set(v, m.get(v) + 1 || 1));
    
    return [...m].filter(e => e[1] === 1).map(e => e[0]).sort().join("");
}
