function solution(num, k) {
    return -1 < String(num).indexOf(k) ? String(num).indexOf(k) + 1 : -1;
}