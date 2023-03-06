# 문자

## 특정 문자 위치 찾기

- `indexOf`

```js
const word = 'abcdeabcde';
const results = word.indexOf('bcd');

console.log(word); // abcdeabcde
console.log(results); // 1
```

- 문자열에서 특정 문자를 찾고 해당 문자가 첫 번째로 나타나는 위치의 index 값 반환
- 특정 문자열이 존재하지 않으면 -1 반환

<br />

## 문자열 특정 횟수만큼 반복하기

- `repeat`

```js
const word = 'abcabc';
const results = word.repeat(3);

console.log(word); // abcabc
console.log(results); // abcabcabcabcabcabc
```

<br />

## 특정 문자 제거하기

- `replace`

```js
const words = 'ABCDEABCDE';
const replace1 = words.replace('DE', '');
const replace2 = words.replace(/DE/g, '');

console.log(words); // "ABCDEABCDE"
console.log(replace1); // "ABCABCDE"
console.log(replace2); // "ABCABC"
```

<br />

## 마지막 문자 제거하기

- `slice`

```js
const word = 'ABCDE';
const results = word.slice(0, -1);

console.log(word); // ABCDE
console.log(results); // ABCD
```

<br />

## 특정 길이를 만족하는 문자열의 맨 앞 부분을 다른 문자열로 채우기

- `padStart`

```js
const word = '5';

console.log(word.padStart(2, '0')); // 05

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber); // ************5581
```

<br />
