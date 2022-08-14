function solution(n, lost, reserve) {
	const lostNum = lost.filter(person => !reserve.includes(person)).sort((a, b) => a - b);
	const lostNumLen = lostNum.length;

	const reserveNum = reserve.filter(person => !lost.includes(person)).sort((a, b) => a - b);
	const reserveNumLen = reserveNum.length;

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