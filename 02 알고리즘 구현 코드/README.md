# 🌳 알고리즘 구현 코드

## 1. 소수 판별

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

## 2. 팩토리얼

```js
function factorial(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else return num * factorial(num - 1);
}
```

<br />

## 3. 최대공약수(유클리드 호제법)

```js
function gcd(a, b) {
  const num = a % b;
  if (num === 0) return b;
  return gcd(b, num);
}
```

<br />

## 4. 피보나치 수열

### 4-1. 재귀

```js
function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
```

### 4-2. DP + 재귀

```js
const dp = [0];

function fibonacci(num) {
  if (num <= 2) return 1;
  if (dp[num]) return dp[num];
  dp[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return dp[num];
}
```

### 4-3. 반복문 (바텀업 DP)

```js
const dp = [0, 1, 1];

function fibonacci(num) {
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[num];
}
```
