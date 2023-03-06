# 🪴 자바스크립트 메서드

- [숫자](./01%20%EC%88%AB%EC%9E%90)
- [문자](./02%20%EB%AC%B8%EC%9E%90)
- [배열](./03%20%EB%B0%B0%EC%97%B4)

<br />
<hr />
<br />

## `new Map` 정렬하기

- `sort`

```js
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log([...map].sort((a, b) => b[1] - a[1])); // [['c', 3],['b', 2],['a', 1]]
```

<br />

## 아스키코드 변환하기

> 65 ~ 90 : A ~ Z
>
> 97 ~ 122 : a ~ z

<br />

- 문자열을 아스키코드 번호로 변환하기 `charCodeAt`

```js
const word = 'ABC';

console.log(word.charCodeAt()); // 65
console.log(word.charCodeAt(1)); // 66
console.log(word.charCodeAt(2)); // 67
console.log(word.charCodeAt(3)); // NaN
```

<br />

- 아스키코드 번호를 문자열로 변환하기 `String.fromCharCode`

```js
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(65, 66, 67)); // ABC
```
