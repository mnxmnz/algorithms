function isEvenDivisors(num) {
	return Math.sqrt(num) % 1 !== 0 ? true : false;
}

function solution(left, right) {
	let sum = 0;

	for (let i = left; i <= right; i++) {
		isEvenDivisors(i) ? (sum += i) : (sum -= i);
	}

	return sum;
}