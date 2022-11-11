/*
 * 현재 뜯은 스티커 + 다음에 뜯을 스티커의 누적 합이 최대가 되는 경우 찾기
 * 이전에 구한 값을 활용하는 형태이므로 중복 계산은 DP를 통해 최적화
 * 
 * 두 개의 분기점
 * 1. 첫 번째 스티커의 값을 더하면 마지막 스티커의 값을 더할 수 없음
 * 2. 첫 번째 스티커의 값을 더하지 않으면 마지막 스티커의 값을 더할 수 있음
 * 
 * 점화식
 * dp[i] = Math.max(dp[i-1], dp[i-2] + sticker[i])
 * dp[i-1]: 이미 직전 스티커를 뜯어서 현재 스티커는 뜯을 수 없을 때 누적 합
 * dp[i-2] + sticker[i]: 직전 스티커를 뜯지 않아서 현재 스티커를 뜯을 수 있을 때 누적 합
 */

function solution(sticker) {
    const length = sticker.length + 2;
    // 누적 합을 구하기 위해 스티커의 개수만큼 0으로 초기화
    // dp[0]: 첫 번째 스티커까지 뜯었을 때 누적 합
    // dp[1]: 두 번째 스티커까지 뜯었을 때 누적 합
    // dp1: 첫 번째 스티커의 값을 더하는 경우
    const dp1 = new Array(length).fill(0);
    // dp2: 첫 번째 스티커의 값을 더하지 않는 경우
    const dp2 = new Array(length).fill(0);
    
    if(sticker.length === 1) return sticker[0];
    
    // 첫 번째 스티커의 값을 더하는 경우
    for(let i = 2; i < length-1; i++)
        // dp1[2] = Math.max(dp1[1], dp1[0] + sticker[0])
        // dp1[1]: 0
        // dp1[0] + sticker[0]: sticker[0]의 값
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i-2]);
    
    // 첫 번째 스티커의 값을 더하지 않는 경우
    for(let i = 3; i < length; i++)
        // dp2[3] = Math.max(dp2[2], dp2[1] + sticker[1])
        // dp2[3]: 0
        // dp2[1] + sticker[1]: sticker[1]의 값
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i-2]);
    
    // dp1은 마지막 스티커를 떼지 않으므로 dp1[len-2]에 최댓값
    // dp2는 마지막 스티커를 뗄 수 있으므로 dp2[len-1]에 최댓값
    return Math.max(dp1[length-2], dp2[length-1]);
}