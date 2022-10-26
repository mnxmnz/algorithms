function solution(dot) {
    if(0 < dot[0] && 0 < dot[1]) return 1;
    else if(dot[0] < 0 && 0 < dot[1]) return 2;
    else if(dot[0] < 0 && dot[1] < 0) return 3;
    else if(0 < dot[0] && dot[1] < 0) return 4;
}