function solution(my_string) {
    return my_string.split(/[^0-9]/).reduce((acc, cur) => acc + Number(cur), 0);
}