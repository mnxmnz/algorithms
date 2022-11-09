function solution(n, stations, w) {
    // 전파 범위
    const range = 2 * w + 1;
    // 기지국 개수
    let answer = 0;
    // 기지국 설치가 필요한 구간의 시작점
    let start = 1;
    
    for(const x of stations) {
        if(start < x - w) answer += Math.ceil((x - w - start) / range);
        start = x + w + 1;
    }
    
    // 기존 기지국 뒤 영역 계산
    return answer += Math.ceil((n - start + 1) / range);
}
