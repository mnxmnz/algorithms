# 배열

## 모든 요소의 합 구하기

- `forEach`

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(n => (sum += n));

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

<br />

- `reduce`

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

<br />

## 오른쪽 요소부터 연산하기

- `reduceRight`

```js
const arr = ['a', 'b', 'c'];
const results = arr.reduceRight((str, cur) => str + cur, '');

console.log(arr); // ['a', 'b', 'c'];
console.log(results); // cba
```

<br />

## 특정 조건을 충족하는 모든 요소 반환하기

- `filter`

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

## 모든 요소에 같은 연산 처리하기

- `map`

```js
const arr = [3, 4, 5, 6];
const results = arr.map(v => v * 3);

console.log(arr); // [3, 4, 5, 6]
console.log(results); // [9, 12, 15, 18]
```

<br />

## 특정 인덱스의 요소만 반환하기

- `slice`

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

<br />

- `splice`

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(1, 4);

console.log(arr); // [0, 5]
console.log(results); // [1, 2, 3, 4]
```

- 두 번째 인자의 값 포함

<br />

## 특정 요소를 삭제, 추가, 대체하기

- `splice`

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

## 오름/내림차순 정렬하기

- `sort`

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

## 최대/최소 구하기

- `Math.max`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.max(...arr)); // 5
```

<br />

- `Math.min`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr)); // 1
```

<br />

## 중복 제거하기

- `new Set`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = [...new Set(arr)];

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

<br />

- `filter` / `indexOf`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.filter((v, i) => arr.indexOf(v) === i);

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

<br />

- `reduce` / `includes`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

<br />

- `forEach` / `includes`

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

## 특정 인덱스(범위)를 하나의 값으로 채우기

- `fill`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.fill('A', 1, 3);

console.log(arr); // ['a', 'A', 'A', 'd', 'e']
console.log(results); // ['a', 'A', 'A', 'd', 'e']
```

<br />

## 첫 번째 요소 제거하기

- `shift`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.shift();

console.log(arr); // ['b', 'c', 'd', 'e']
console.log(results); // a
```

<br />

## 특정 조건을 충족하는 요소의 유무 확인하기

- `some`

```js
const arr = [1, 2, 3, 4, 5];
const even = element => element % 2 === 0;

console.log(arr.some(even)); // true
```

- 배열 요소 중 판별 함수를 통과하는 요소가 존재하는지 테스트
- 빈 배열에서 호출하면 무조건 `false` 반환

<br />

- `find`

```js
const arr = [5, 12, 8, 130, 44];
const found = arr.find(element => 10 < element);

console.log(found); // 12
```

- 판별 함수를 만족하는 첫 번째 요소의 값 반환
- 만족하는 요소가 없으면 `undefined` 반환

<br />

## 두 배열 비교하기 (합집합, 교집합 구하기)

- 합집합 `new Set`

```js
const arr1 = [2, 8, 5, 4, 3];
const arr2 = [1, 9, 6, 7, 3];
const union = [...new Set([...arr1, ...arr2])];

console.log(union); // [2, 8, 5, 4, 3, 1, 9, 6, 7]
```

<br />

- 교집합 `filter` / `includes`

```js
const arr1 = [2, 8, 5, 4, 3];
const arr2 = [1, 9, 6, 7, 3];
const intersection = arr1.filter(num => arr2.includes(num));

console.log(intersection); // [3]
```

<br />
