function solution(my_string) {
    const nums = my_string.split(" ");
    let answer = +nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === "+") answer += +nums[i + 1];
        else if(nums[i] === "-") answer -= +nums[i + 1];
    }
    
    return answer;
}