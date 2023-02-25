# 🪴 자바스크립트 메서드

## 1. 배열 요소의 합 구하기

### 1-1. `forEach`

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(n => (sum += n));

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

### 1-2. `reduce`

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

<br />

## 2. 배열 요소의 오른쪽부터 연산하기

### 2-1. `reduceRight`

```js
const arr = ['a', 'b', 'c'];
const results = arr.reduceRight((str, cur) => str + cur, '');

console.log(arr); // ['a', 'b', 'c'];
console.log(results); // cba
```

<br />

## 3. 특정 조건을 충족하는 모든 배열 요소 반환하기

### 3-1. `filter`

```js
const arr = [
  { name: 'YD', money: 500000 },
  { name: 'Roky', money: 200000 },
];
const results = arr.filter(v => v.money > 300000);

console.log(arr); // [{ name: 'YD', money: 500000 }, { name: 'Roky', money: 200000 }]
console.log(results); // [{name: "YD", money: 500000}]
```

<br />

## 4. 모든 배열 요소에 같은 연산 처리하기

### 4-1. `map`

```js
const arr = [3, 4, 5, 6];
const results = arr.map(v => v * 3);

console.log(arr); // [3, 4, 5, 6]
console.log(results); // [9, 12, 15, 18]
```

<br />

## 5. 배열 요소 중 특정 인덱스만 반환하기

### 5-1. `slice`

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

### 5-2. `splice`

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(1, 4);

console.log(arr); // [0, 5]
console.log(results); // [1, 2, 3, 4]
```

- 두 번째 인자의 값 포함

<br />

## 6. 배열의 특정 요소를 삭제, 추가, 대체하기

### 6-1. `splice`

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

<br />

## 7. 거듭제곱/제곱근 구하기

### 7-1. `**`

```js
console.log(2 ** 10); // 1024
```

### 7-2. `Math.sqrt`

```js
console.log(Math.sqrt(1024)); // 32
```

<br />

## 8. 정수/실수 확인하기

### 8-1. `Number.isInteger`

```js
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-10)); // true
console.log(Number.isInteger(123.123)); // false
```

### 8-2. `%`

```js
console.log(10 % 1 === 0); // true
console.log(0 % 1 === 0); // true
console.log(-10 % 1 === 0); // true
console.log(123.123 === 0); // false
```

<br />

## 9. 배열 오름/내림차순 정렬하기

### 9-1. `sort`

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

```js
const nums = [
  [10, 20],
  [6, 36],
  [17, 47],
  [10, 40],
  [24, 6],
];
nums.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

console.log(nums); // [[6, 36], [10, 40], [10, 20], [17, 47], [24, 6]]
```

<br />

## 10. 배열 최대/최소 구하기

### 10-1. `Math.max`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.max(...arr)); // 5
```

### 10-2. `Math.min`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr)); // 1
```

<br />

## 11. 문자열에서 특정 문자 위치 찾기

### 11-1. `indexOf`

```js
const word = 'abcdeabcde';
const results = word.indexOf('bcd');

console.log(word); // abcdeabcde
console.log(results); // 1
```

- 문자열에서 특정 문자를 찾고 해당 문자가 첫 번째로 나타나는 위치의 index 값 반환
- 특정 문자열이 존재하지 않으면 -1 반환

<br />

## 12. 배열 중복 제거하기

### 12-1. `new Set`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = [...new Set(arr)];

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

### 12-2. `filter` / `indexOf`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.filter((v, i) => arr.indexOf(v) === i);

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

### 12-3. `reduce` / `includes`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

### 12-4. `forEach` / `includes`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = [];

arr.forEach(v => {
  if (!results.includes(v)) results.push(v);
});

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

<br />

## 13. 문자열 반복하기

### 13-1. `repeat`

```js
const word = 'abcabc';
const results = word.repeat(3);

console.log(word); // abcabc
console.log(results); // abcabcabcabcabcabc
```

<br />

## 14. 배열의 특정 범위를 하나의 값으로 채우기

### 14-1. `fill`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.fill('A', 1, 3);

console.log(arr); // ['a', 'A', 'A', 'd', 'e']
console.log(results); // ['a', 'A', 'A', 'd', 'e']
```

<br />

## 15. 배열의 첫 번째 요소 제거하기

### 15-1. `shift`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.shift();

console.log(arr); // ['b', 'c', 'd', 'e']
console.log(results); // a
```

<br />

## 16. 진법 변환하기

### 16-1. `toString`

```js
// 10진수를 2진수로 변환
const decimal = 10;
const binary = decimal.toString(2);

console.log(decimal); // 10
console.log(binary); // 1010
```

### 16-2. `parseInt`

```js
// 2진수를 10진수로 변환
const binary = 101010;
const decimal = parseInt(binary, 2);

console.log(binary); // 101010
console.log(decimal); // 42
```

<br />

## 17. 특정 조건을 충족하는 배열 요소의 유무 확인하기

### 17-1. `some`

```js
const arr = [1, 2, 3, 4, 5];
const even = element => element % 2 === 0;

console.log(arr.some(even)); // true
```

- 배열 요소 중 판별 함수를 통과하는 요소가 존재하는지 테스트
- 빈 배열에서 호출하면 무조건 `false` 반환

### 17-2. `find`

```js
const arr = [5, 12, 8, 130, 44];
const found = arr.find(element => 10 < element);

console.log(found); // 12
```

- 판별 함수를 만족하는 첫 번째 요소의 값 반환
- 만족하는 요소가 없으면 `undefined` 반환

<br />

## 18. 절댓값 구하기

### 18-1. `Math.abs`

```js
console.log(Math.abs(-1)); // 1
console.log(Math.abs(1)); // 1
console.log(Math.abs('1')); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('STRING')); // NaN
console.log(Math.abs(null)); // 0
```

<br />

## 19. `new Map` 정렬하기

### 19-1. `sort`

```js
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log([...map].sort((a, b) => b[1] - a[1])); // [['c', 3],['b', 2],['a', 1]]
```

<br />

## 20. 문자열에서 특정 문자 제거하기

### 20-1. `replace`

```js
const words = 'ABCDEABCDE';
const replace1 = words.replace('DE', '');
const replace2 = words.replace(/DE/g, '');

console.log(words); // "ABCDEABCDE"
console.log(replace1); // "ABCABCDE"
console.log(replace2); // "ABCABC"
```

<br />

## 21. 두 배열 비교하기 (합집합, 교집합 구하기)

### 21-1. 합집합 `new Set`

```js
const arr1 = [2, 8, 5, 4, 3];
const arr2 = [1, 9, 6, 7, 3];
const union = [...new Set([...arr1, ...arr2])];

console.log(union); // [2, 8, 5, 4, 3, 1, 9, 6, 7]
```

### 21-2. 교집합 `filter` / `includes`

```js
const arr1 = [2, 8, 5, 4, 3];
const arr2 = [1, 9, 6, 7, 3];
const intersection = arr1.filter(num => arr2.includes(num));

console.log(intersection); // [3]
```

<br />

## 22. 아스키코드 변환하기

> 65 ~ 90 : A ~ Z
>
> 97 ~ 122 : a ~ z

### 22-1. 문자열을 아스키코드 번호로 변환하기 `charCodeAt`

```js
const word = 'ABC';

console.log(word.charCodeAt()); // 65
console.log(word.charCodeAt(1)); // 66
console.log(word.charCodeAt(2)); // 67
console.log(word.charCodeAt(3)); // NaN
```

### 22-2. 아스키코드 번호를 문자열로 변환하기 `String.fromCharCode`

```js
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(65, 66, 67)); // ABC
```

<br />

## 23. 문자열 마지막 문자 제거하기

### 23-1. `slice`

```js
const word = 'ABCDE';
const results = word.slice(0, -1);

console.log(word); // ABCDE
console.log(results); // ABCD
```
