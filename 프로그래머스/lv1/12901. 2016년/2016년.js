function solution(a, b) {
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    let sum = 0;
    
    for(let i = 0; i < a - 1; i++) {
        sum += months[i];
    }
    
    return days[(sum += b) % 7];
}