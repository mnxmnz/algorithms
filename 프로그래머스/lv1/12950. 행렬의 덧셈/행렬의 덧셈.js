function solution(arr1, arr2) {
    let answer = [];
    let num = [];
    
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr1[i].length; j++) {
            num.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(num);
        num = [];
    }
    
    return answer;
}