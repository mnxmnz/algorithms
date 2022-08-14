function solution(num) {
	if (num === 1) return 0;

	let count = 0;

	while (num !== 1 && count < 500) {
		if (num % 2 === 0) {
			num = num / 2;
			count++;
		} else {
			num = num * 3 + 1;
			count++;
		}
	}

	return count < 500 ? count : -1;
}