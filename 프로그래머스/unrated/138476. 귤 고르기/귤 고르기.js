function solution(k, tangerine) {
	const map = new Map();
	let answer = 0;

	tangerine.forEach(v => map.set(v, map.get(v) + 1 || 1));

	const sorted = [...map].sort((a, b) => b[1] - a[1]);

	for (const x of sorted) {
		if (0 < k) {
			answer++;
			k -= x[1];
		}
	}

	return answer;
}