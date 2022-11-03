/*
 * 하나의 상자 그룹에 속한 상자의 수 저장하기
 * 상자 확인 여부를 배열에 저장하고 처음 확인한 상자에 대해서만 다음 상자 갱신하기
 */

function solution(cards) {
    const length = cards.length;
    let visited = new Array(length).fill(false);
    let group = [];
    let count = 0;
    let nextIndex = 0;
    
    for(let i = 0; i < length; i++) {
        if(!visited[i]) {
            count++;
            visited[i] = true;
            nextIndex = cards[i] - 1;
        }
        
        while(true) {
            if(!visited[nextIndex]) {
                count++;
                visited[nextIndex] = true;
                nextIndex = cards[nextIndex] - 1;
            } else {
                group.push(count);
                count = 0;
                break;
            }
        }
    }
    
    group.sort((a, b) => b - a);
    
    return group.length < 2 ? 0 : group[0] * group[1];
}