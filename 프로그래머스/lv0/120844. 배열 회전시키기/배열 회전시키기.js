function solution(numbers, direction) {
    switch(direction) {
        case "left": 
            return [...numbers.slice(1), numbers[0]];
        case "right":
            return [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];
    }
}