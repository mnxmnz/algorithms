function solution(s){
    const words = s.toLowerCase();
    const p = words.split("p").length;
    const y = words.split("y").length;

    return p === y;
}