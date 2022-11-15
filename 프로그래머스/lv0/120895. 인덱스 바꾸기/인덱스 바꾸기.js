function solution(my_string, num1, num2) {
    const arr = [...my_string];
    const str1 = arr[num1];
    const str2 = arr[num2];
    
    arr.splice(num2, 1, str1);
    arr.splice(num1, 1, str2);
    
    return arr.join("");
}