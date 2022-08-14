function solution(n, lost, reserve) {
	let lostNum = lost.filter(person => !reserve.includes(person)).sort((a, b) => a - b);
	let lostNumLen = lostNum.length;

	let reserveNum = reserve.filter(person => !lost.includes(person)).sort((a, b) => a - b);
	let reserveNumLen = reserveNum.length;

	let answer = n - lostNum.length;

	for (let i = 0; i < lostNumLen; i++) {
		for (let j = 0; j < reserveNumLen; j++) {
			if (lostNum[i] === reserveNum[j] - 1 || lostNum[i] === reserveNum[j] + 1) {
				reserveNum.splice(j, 1);
				answer++;
			}
		}
	}

	return answer;
}