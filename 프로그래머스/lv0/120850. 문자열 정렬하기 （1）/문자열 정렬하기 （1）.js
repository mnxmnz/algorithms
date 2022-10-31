function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split("").sort((a, b) => a-b).map((v) => Number(v));;
}