# 알고리즘 공부 📚

## 001. 홀/짝 합 공식

- 범위: 1 ~ n
- 홀수의 합: $n^2$
- 짝수의 합: $n^2+n ⇒ n(n+1)$

## 002. 배열 요소의 합 구하기

### 2-1. `forEach`

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(n => sum += n);

console.log(numbers) // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

### 2-2. `reduce`

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

## 003. 배열 요소의 오른쪽부터 연산하기

### 3-1. `reduceRight`

```js
const arr = ['a', 'b', 'c'];
const results = arr.reduceRight((str, cur) => str + cur, '');

console.log(arr); // ['a', 'b', 'c'];
console.log(results); // cba
```

## 004. 특정 조건을 충족하는 모든 배열 요소 반환하기

### 4-1. `filter`

```js
const arr = [{ name: 'YD', money: 500000 }, { name: 'Roky', money: 200000 }];
const results = arr.filter(v => v.money > 300000);

console.log(arr); // [{ name: 'YD', money: 500000 }, { name: 'Roky', money: 200000 }]
console.log(results); // [{name: "YD", money: 500000}]
```

## 005. 모든 배열 요소에 같은 연산 처리하기

### 5-1. `map`

```js
const arr = [3, 4, 5, 6];
const results = arr.map(v => v * 3);

console.log(arr); // [3, 4, 5, 6]
console.log(results); // [9, 12, 15, 18]
```

## 006. 배열 요소 중 특정 인덱스만 반환하기

### 6-1. `slice`

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.slice(2, 4);

console.log(arr); // [0, 1, 2, 3, 4, 5]
console.log(results); // [2, 3]
```

- 두 번째 인자의 값을 포함하지 않음

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.slice(3);

console.log(arr); // [0, 1, 2, 3, 4, 5]
console.log(results); // [3, 4, 5]
```

- 첫 번째 인자만 작성하면 시작 인덱스부터 마지막 인덱스까지 복사

### 6-2. `splice`

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(1, 4);

console.log(arr); // [0, 5]
console.log(results); // [1, 2, 3, 4]
```

- 두 번째 인자의 값 포함

## 007. 배열의 특정 요소를 삭제, 추가, 대체하기

### 7-1. `splice`

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(1, 4);

console.log(arr); // [0, 5]
console.log(results); // [1, 2, 3, 4]
```

- 두 번째 인자의 값 포함

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(3, 0, 11, 22, 33);

console.log(arr); // [0, 1, 2, 11, 22, 33, 3, 4, 5]
console.log(results); // []
```

- 삭제된 요소가 없어서 빈 배열 반환

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(2, 3, 11, 22, 33);

console.log(arr); // [0, 1, 11, 22, 33, 5]
console.log(results); // [2, 3, 4]
```

- 특정 요소를 다른 값으로 대체하고 대체된 원본 배열의 값 반환

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(3);

console.log(arr); // [0, 1, 2]
console.log(results); // [3, 4, 5]
```

- 첫 번째 인자만 작성하면 시작 인덱스부터 마지막 인덱스까지 삭제

## 008. 거듭제곱/제곱근 구하기

### 8-1. `**`

```js
console.log(2 ** 10); // 1024
```

### 8-2. `Math.sqrt`

```js
console.log(Math.sqrt(1024)); // 32
```

## 009. 정수/실수 확인하기

### 9-1. `Number.isInteger`

```js
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-10)); // true
console.log(Number.isInteger(123.123)); // false
```

### 9-2. `%`

```js
console.log(10 % 1 === 0); // true
console.log(0 % 1 === 0); // true
console.log(-10 % 1 === 0); // true
console.log(123.123 === 0); // false
```

## 010. 배열 오름/내림차순 정렬하기

### 10-1. `sort`

```js
const arr = [3, 1, 7, 5];
const ascending = arr.sort((a, b) => a - b);

console.log(arr); // [1, 3, 5, 7]
console.log(ascending); // [1, 3, 5, 7]
```

```js
const arr = [3, 1, 7, 5];
const descending = arr.sort((a, b) => b - a);

console.log(arr); // [7, 5, 3, 1]
console.log(descending); // [7, 5, 3, 1]
```

## 011. 배열 최대/최소 구하기

### 11-1. `Math.max`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.max(...arr)); // 5
```

### 11-2. `Math.min`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr)); // 1
```

## 012. 문자열에서 특정 문자 위치 찾기

### 12-1. `indexOf`

```js
const str = 'abcdeabcde';
const results = str.indexOf('bcd');

console.log(str); // abcdeabcde
console.log(results); // 1
```

- 문자열에서 특정 문자를 찾고 해당 문자가 첫 번째로 나타나는 위치의 index 값 반환
- 특정 문자열이 존재하지 않으면 -1 반환

## 013. 배열 중복 제거하기

### 13-1. `set`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = [...new Set(arr)];

console.log(arr);	// ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results);	// ['A', 'B', 'C', 'D', 'E']
```

### 13-2. `filter` `indexOf`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.filter((v, i) => arr.indexOf(v) === i);

console.log(arr);	// ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results);	// ['A', 'B', 'C', 'D', 'E']
```

### 13-3. `reduce` `includes`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);

console.log(arr);	// ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results);	// ['A', 'B', 'C', 'D', 'E']
```

### 13-4. `forEach` `includes`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = [];

arr.forEach((v) => { if(!results.includes(v)) results.push(v) })

console.log(arr);	// ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results);	// ['A', 'B', 'C', 'D', 'E']
```

## 014. 문자열 반복하기

### 14-1. `repeat`

```js
const str = 'abcabc';
const results = str.repeat(3);

console.log(str);	// abcabc
console.log(results);	// abcabcabcabcabcabc
```

## 015. 배열의 특정 범위를 하나의 값으로 채우기

### 15-1. `fill`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.fill('A', 1, 3);

console.log(arr);	// ['a', 'A', 'A', 'd', 'e']
console.log(results);	// ['a', 'A', 'A', 'd', 'e']
```

## 016. 배열의 첫 번째 요소 제거하기

### 16-1. `shift`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.shift();

console.log(arr);	// ['b', 'c', 'd', 'e']
console.log(results);	// a
```

## 017. 진법 변환하기

### 17-1. `toString`

```js
// 10진수를 2진수로 변환
const decimal = 10
const binary = decimal.toString(2);

console.log(decimal) // 10
console.log(binary) // 1010
```

### 17-2. `parseInt`

```js
// 2진수를 10진수로 변환
const binary = 101010
const decimal = parseInt(binary, 2);

console.log(binary) // 101010
console.log(decimal) // 42
```

## 018. 소수 판별하기

```js
function isPrime(num) {
	if (num === 1) return false;

	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) return false;
	}

	return true;
}
```

## 019. 팩토리얼 구하기

```js
function factorial(num) {
	if (num < 0) return -1;
	else if (num === 0) return 1;
	else return num * factorial(num - 1);
}
```

## 020. 특정 조건을 충족하는 배열 요소 찾기

### 20-1. `some()`

```js
const arr = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(arr.some(even)); // true
```

- 배열 요소 중 판별 함수를 통과하는 요소가 존재하는지 테스트
- 빈 배열에서 호출하면 무조건 `false` 반환

### 20-2. `find()`

```js
const arr = [5, 12, 8, 130, 44];
const found = arr.find(element => 10 < element);

console.log(found); // 12
```

- 판별 함수를 만족하는 첫 번째 요소의 값 반환
- 만족하는 요소가 없으면 `undefined` 반환

## 021. 절댓값 구하기

### 21-1. `Math.abs()`

```js
console.log(Math.abs(-1)); // 1
console.log(Math.abs(1)); // 1
console.log(Math.abs('1')); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('STRING')); // NaN
console.log(Math.abs(null)); // 0
```

## 022. `new Map()` 정렬하기

### 22-1. `sort`

```js
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log([...map].sort((a, b) => b[1] - a[1])); // [['c', 3],['b', 2],['a', 1]]
```

## 023. 문자열에서 특정 문자 제거하기

### 23-1. `replace()`

```js
const words = "ABCDEABCDE";
const replace1 = words.replace("DE", "");
const replace2 = words.replace(/DE/g, "");

console.log(words); // "ABCDEABCDE"
console.log(replace1); // "ABCABCDE"
console.log(replace2); // "ABCABC"
```
