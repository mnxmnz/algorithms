# 숫자

## 거듭제곱/제곱근 구하기

- `**`

```js
console.log(2 ** 10); // 1024
```

<br />

- `Math.sqrt`

```js
console.log(Math.sqrt(1024)); // 32
```

<br />

## 정수/실수인지 확인하기

- `Number.isInteger`

```js
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-10)); // true
console.log(Number.isInteger(123.123)); // false
```

<br />

- `%`

```js
console.log(10 % 1 === 0); // true
console.log(0 % 1 === 0); // true
console.log(-10 % 1 === 0); // true
console.log(123.123 === 0); // false
```

<br />

## 진법 변환하기

- `toString`

```js
// 10진수를 2진수로 변환
const decimal = 10;
const binary = decimal.toString(2);

console.log(decimal); // 10
console.log(binary); // 1010
```

<br />

- `parseInt`

```js
// 2진수를 10진수로 변환
const binary = 101010;
const decimal = parseInt(binary, 2);

console.log(binary); // 101010
console.log(decimal); // 42
```

<br />

## 절댓값 구하기

- `Math.abs`

```js
console.log(Math.abs(-1)); // 1
console.log(Math.abs(1)); // 1
console.log(Math.abs('1')); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs('STRING')); // NaN
console.log(Math.abs(null)); // 0
```

<br />

## 소수점 자릿수 지정하기

```js
console.log((0.1).toFixed(4)); // 0.1000
console.log((0.12345).toFixed(2)); // 0.12
console.log((1234.5678).toFixed(1)); // 123.6
```

<br />
