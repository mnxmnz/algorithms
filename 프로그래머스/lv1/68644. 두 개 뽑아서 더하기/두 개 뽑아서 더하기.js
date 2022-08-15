function solution(numbers) {
    const set = new Set();
    const len = numbers.length;
    let sum = 0;
    
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            sum = numbers[i] + numbers[j];
            set.add(sum);
            sum = 0;
        }
    }
    
    return [...set].sort((a, b) => a - b);
}