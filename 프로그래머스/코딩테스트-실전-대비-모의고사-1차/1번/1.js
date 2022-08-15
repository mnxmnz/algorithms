function solution(X, Y) {
	let answer = [];

	let xMap = new Map();
	let yMap = new Map();

	for (let x of X) {
		xMap.set(x, (xMap.get(x) || 0) + 1);
	}

	for (let y of Y) {
		yMap.set(y, (yMap.get(y) || 0) + 1);
	}

	let temp = new Map();

	for (let num of xMap.keys()) {
		if (yMap.has(num)) {
			temp.set(num, Math.min(xMap.get(num), yMap.get(num)));
		}
	}

	for (let [key, value] of temp) {
		for (let i = 0; i < value; i++) {
			answer.push(key);
		}
	}

	if (answer[0] === '0') return '0';

	return answer.length ? answer.sort((a, b) => b - a).join('') : '-1';
}
