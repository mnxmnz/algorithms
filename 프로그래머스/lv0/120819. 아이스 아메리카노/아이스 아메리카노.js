function solution(money) {
    const coffee = Math.floor(money / 5500);
    return [coffee, money - coffee * 5500];
}