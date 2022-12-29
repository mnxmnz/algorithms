function solution(s) {
    const words = s.toLowerCase().split("");
    return words.filter(v => v === "p").length === words.filter(v => v === "y").length;
}