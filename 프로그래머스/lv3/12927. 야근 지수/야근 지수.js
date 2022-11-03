/*
 * 제일 큰 값을 우선으로 1 빼기
 */

function solution(n, works) {
    if(works.reduce((a, b) => a + b, 0) <= n) return 0;
    
    const sorted = [...works].sort((a, b) => a - b);
    const length = sorted.length;
    
    while(n) {
        const max = sorted[length - 1];
        
        for(let i = length - 1; 0 <= i; i--) {
            if(sorted[i] >= max) {
                sorted[i]--;
                n--;
            }
            
            if(!n) break;
        }
    }
    
    return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}