function solution(s) {    
    const arr = s.split("");
    let stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}