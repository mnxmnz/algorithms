function solution(dots) {
    const x = dots.sort((a, b) => a[0] - b[0]);
    const width = x[3][0] - x[0][0];
    
    const y = dots.sort((a, b) => a[1] - b[1]);
    const height = y[3][1] - y[0][1];
    
    return width * height;
}