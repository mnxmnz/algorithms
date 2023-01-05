# Solve-Algorithms

## 🌱 개념 정리

### 1. 그리디 알고리즘

> **현재 상황에서 지금 당장 좋은 것만 고르는 방법**

- 일반적인 상황에서 그리디 알고리즘은 최적의 해를 보장할 수 없을 때가 많습니다.
- **탐욕법으로 얻은 해가 최적의 해가 되는 상황에서, 이를 추론할 수 있어야 풀리도록 출제하는 경우가 많습니다.**
- 그리디 알고리즘을 사용한 대표적인 문제는 거스름 돈 문제입니다.
  - 가지고 있는 동전 중 큰 단위가 항상 작은 단위의 배수라면 그리디 알고리즘을 적용할 수 있습니다.
  - 거스름 돈 800원에서 화폐 단위가 500원, 400원, 100원이면 배수 단위가 아니라서 그리디 알고리즘을 적용할 수 없습니다.

<br />

### 2. 구현

> **머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정**

- 구현 문제 예시
  1. 알고리즘은 간단한데 코드가 지나치게 길어지는 문제
  2. 실수 연산을 다루며 특정 소수점 자리까지 출력하는 문제
  3. 문자열을 특정 기준에 따라 끊어 처리하는 문제
  4. 적절한 라이브러리를 찾아서 해결해야 하는 문제
- 시뮬레이션 및 완전 탐색 문제에서는 2차원 공간에서의 **방향 벡터**가 자주 활용됩니다.

![img.png](https://user-images.githubusercontent.com/48766355/210856358-b049596a-625b-438e-a42e-8ceea58580a3.png)

### 3. DFS/BFS

> **그래프 탐색 알고리즘**

- 탐색: 많은 양의 데이터 중에서 **원하는 데이터를 찾는 과정**

<details>

<summary>DFS/BFS 배경지식</summary>

- 스택 자료구조
    - 먼저 들어온 데이터가 나중에 나가는 형식입니다.(선입후출)
    - **입구와 출구가 동일한 형태입니다.**

- 큐 자료구조
    - 먼저 들어온 데이터가 먼저 나가는 형식입니다.(선입선출)
    - **입구와 출구가 모두 뚫려 있는 터널과 같은 형태입니다.**

- 재귀 함수
    - **자기 자신을 다시 호출하는 함수입니다.**
    - 재귀 함수의 종료 조건을 명시하는 것이 필요합니다.
    - 종료 조건을 제대로 명시하지 않으면 함수가 무한히 호출될 수 있습니다.
    - 재귀 함수를 사용한 대표적인 문제는 두 개의 자연수에 대한 최대공약수를 구하는 **유클리드 호제법**입니다.
    - 재귀 함수를 잘 활용하면 복잡한 알고리즘을 간결하게 작성할 수 있습니다.(단, 오히려 다른 사람이 이해하기 어려운 코드가 될 수도 있으므로 신중하게 사용해야 합니다.)
    - 컴퓨터가 함수를 연속적으로 호출하면 컴퓨터 메모리 내부의 스택 프레임에 쌓입니다.(스택을 사용해야 할 때 구현상 **스택 라이브러리 대신에 재귀 함수를 이용**하는 경우가 많습니다.)

</details>

#### 3-1. DFS

- DFS는 **깊이 우선 탐색**이라고도 부르며 그래프에서 **깊은 부분을 우선적으로 탐색하는 알고리즘**입니다.
- DFS는 **스택 자료구조(혹은 재귀 함수)를 이용**하며, 구체적인 동작 과정은 다음과 같습니다.
    1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 합니다.
    2. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문 처리합니다. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냅니다.
    3. 더 이상 2번의 과정을 수행할 수 없을 때까지 반복합니다.


<details>

<summary>DFS/BFS JS 구현</summary>

```js
function dfs(graph, start) {
  const stack = [start];
  const result = [];
  const visited = {};

  visited[start] = true;

  while (stack.length) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;

        stack.push(neighbor);
      }
    });
  }

  return result;
}
```

</details>

<br />

## 🪴 자바스크립트 활용

### 1. 배열 요소의 합 구하기

#### 1-1. `forEach`

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(n => (sum += n));

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

#### 1-2. `reduce`

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(sum); // 15
```

<br />

### 2. 배열 요소의 오른쪽부터 연산하기

#### 2-1. `reduceRight`

```js
const arr = ['a', 'b', 'c'];
const results = arr.reduceRight((str, cur) => str + cur, '');

console.log(arr); // ['a', 'b', 'c'];
console.log(results); // cba
```

<br />

### 3. 특정 조건을 충족하는 모든 배열 요소 반환하기

#### 3-1. `filter`

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

### 4. 모든 배열 요소에 같은 연산 처리하기

#### 4-1. `map`

```js
const arr = [3, 4, 5, 6];
const results = arr.map(v => v * 3);

console.log(arr); // [3, 4, 5, 6]
console.log(results); // [9, 12, 15, 18]
```

<br />

### 5. 배열 요소 중 특정 인덱스만 반환하기

#### 5-1. `slice`

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

#### 5-2. `splice`

```js
const arr = [0, 1, 2, 3, 4, 5];
const results = arr.splice(1, 4);

console.log(arr); // [0, 5]
console.log(results); // [1, 2, 3, 4]
```

- 두 번째 인자의 값 포함

<br />

### 6. 배열의 특정 요소를 삭제, 추가, 대체하기

#### 6-1. `splice`

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

### 7. 거듭제곱/제곱근 구하기

#### 7-1. `**`

```js
console.log(2 ** 10); // 1024
```

#### 7-2. `Math.sqrt`

```js
console.log(Math.sqrt(1024)); // 32
```

<br />

### 8. 정수/실수 확인하기

#### 8-1. `Number.isInteger`

```js
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-10)); // true
console.log(Number.isInteger(123.123)); // false
```

#### 8-2. `%`

```js
console.log(10 % 1 === 0); // true
console.log(0 % 1 === 0); // true
console.log(-10 % 1 === 0); // true
console.log(123.123 === 0); // false
```

<br />

### 9. 배열 오름/내림차순 정렬하기

#### 9-1. `sort`

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

<br />

### 10. 배열 최대/최소 구하기

#### 10-1. `Math.max`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.max(...arr)); // 5
```

#### 10-2. `Math.min`

```js
const arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr)); // 1
```

<br />

### 11. 문자열에서 특정 문자 위치 찾기

#### 11-1. `indexOf`

```js
const str = 'abcdeabcde';
const results = str.indexOf('bcd');

console.log(str); // abcdeabcde
console.log(results); // 1
```

- 문자열에서 특정 문자를 찾고 해당 문자가 첫 번째로 나타나는 위치의 index 값 반환
- 특정 문자열이 존재하지 않으면 -1 반환

<br />

### 12. 배열 중복 제거하기

#### 12-1. `set`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = [...new Set(arr)];

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

#### 12-2. `filter` `indexOf`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.filter((v, i) => arr.indexOf(v) === i);

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

#### 12-3. `reduce` `includes`

```js
const arr = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A'];
const results = arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);

console.log(arr); // ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E', 'A']
console.log(results); // ['A', 'B', 'C', 'D', 'E']
```

#### 12-4. `forEach` `includes`

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

### 13. 문자열 반복하기

#### 13-1. `repeat`

```js
const str = 'abcabc';
const results = str.repeat(3);

console.log(str); // abcabc
console.log(results); // abcabcabcabcabcabc
```

<br />

### 14. 배열의 특정 범위를 하나의 값으로 채우기

#### 14-1. `fill`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.fill('A', 1, 3);

console.log(arr); // ['a', 'A', 'A', 'd', 'e']
console.log(results); // ['a', 'A', 'A', 'd', 'e']
```

<br />

### 15. 배열의 첫 번째 요소 제거하기

#### 15-1. `shift`

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const results = arr.shift();

console.log(arr); // ['b', 'c', 'd', 'e']
console.log(results); // a
```

<br />

### 16. 진법 변환하기

#### 16-1. `toString`

```js
// 10진수를 2진수로 변환
const decimal = 10;
const binary = decimal.toString(2);

console.log(decimal); // 10
console.log(binary); // 1010
```

#### 16-2. `parseInt`

```js
// 2진수를 10진수로 변환
const binary = 101010;
const decimal = parseInt(binary, 2);

console.log(binary); // 101010
console.log(decimal); // 42
```

<br />

### 17. 특정 조건을 충족하는 배열 요소 찾기

#### 17-1. `some()`

```js
const arr = [1, 2, 3, 4, 5];
const even = element => element % 2 === 0;

console.log(arr.some(even)); // true
```

- 배열 요소 중 판별 함수를 통과하는 요소가 존재하는지 테스트
- 빈 배열에서 호출하면 무조건 `false` 반환

#### 17-2. `find()`

```js
const arr = [5, 12, 8, 130, 44];
const found = arr.find(element => 10 < element);

console.log(found); // 12
```

- 판별 함수를 만족하는 첫 번째 요소의 값 반환
- 만족하는 요소가 없으면 `undefined` 반환

<br />

### 18. 절댓값 구하기

#### 18-1. `Math.abs()`

```js
console.log(Math.abs(-1)); // 1
console.log(Math.abs(1)); // 1
console.log(Math.abs('1')); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('STRING')); // NaN
console.log(Math.abs(null)); // 0
```

<br />

### 19. `new Map()` 정렬하기

#### 19-1. `sort`

```js
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log([...map].sort((a, b) => b[1] - a[1])); // [['c', 3],['b', 2],['a', 1]]
```

<br />

### 20. 문자열에서 특정 문자 제거하기

#### 20-1. `replace()`

```js
const words = 'ABCDEABCDE';
const replace1 = words.replace('DE', '');
const replace2 = words.replace(/DE/g, '');

console.log(words); // "ABCDEABCDE"
console.log(replace1); // "ABCABCDE"
console.log(replace2); // "ABCABC"
```

<br />

## 🌳 알고리즘 구현

### 1. 소수 판별

```js
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
```

<br />

### 2. 팩토리얼

```js
function factorial(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else return num * factorial(num - 1);
}
```

<br />

### 3. 최대공약수(유클리드 호제법)

```js
function gcd(a, b) {
  const num = a % b;
  if (num === 0) return b;
  return gcd(b, num);
}
```

<br />

## 📚 참고 자료

- [이것이 취업을 위한 코딩 테스트다 with 파이썬](https://product.kyobobook.co.kr/detail/S000001810273)
