/*
 * 
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