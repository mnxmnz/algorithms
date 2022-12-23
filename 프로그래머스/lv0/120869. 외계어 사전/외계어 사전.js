function solution(spell, dic) {
    const words = spell.sort().join("");
    
    return dic.map(v => v.split("").sort().join("")).find(k => k === words) ? 1 : 2;
}