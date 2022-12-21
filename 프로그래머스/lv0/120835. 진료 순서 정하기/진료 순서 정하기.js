function solution(emergency) {    
    const descending = [...emergency].sort((a, b) => b - a);
    
    return emergency.map(x => descending.indexOf(x) + 1);
}