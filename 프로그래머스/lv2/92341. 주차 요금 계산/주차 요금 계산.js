function solution(fees, records) {
    const answer = [];
    
    const getNumberTime = (time) => {
        const arr = time.split(":");
        return Number.parseInt(arr[0]) * 60 + Number.parseInt(arr[1]);
    }
    
    const getParkTime = (start, end) => { 
        return getNumberTime(end) - getNumberTime(start); 
    }
    
    const getTotalFee = (time) => {
        // 기본 시간
        let cost = fees[1];
        time -= fees[0];
        
        // 추가 단위 시간
        if(time > 0) {
            cost += Math.ceil(time/fees[2]) * fees[3];
        }
        
        return cost;
    }
    
    // 차량 번호가 작은 순서대로 정렬
    // 차량 번호가 같다면 시간이 빠른 순서대로 정렬
    const park = records.map((item) => item.split(" ")).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    
    let time = 0;
    
    for(let i = park.length-1; 0<= i;i--) {
        if(park[i][2] === 'IN') {
            // 나간 기록이 없는 차량
            time += getParkTime(park[i][0], "23:59");
        } else {
            // 나간 기록이 있는 차량
            time += getParkTime(park[i-1][0], park[i][0]);
            i--;
        }
        
        // 차량 종류가 바뀌면 answer 맨 앞에 주차 요금 추가
        if(i === 0 || (park[i][1] !== park[i-1][1])) {
            answer.unshift(getTotalFee(time));
            time = 0;
        }
    }
    
    return answer;
}