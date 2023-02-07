function solution(keyinput, board) {
    let dx = 0;
    let dy = 0;
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    for(const x of keyinput) {
        switch(x) {
            case "up":
                if(dy < maxY) dy += 1;
                break;
            case "down":
                if(dy * -1 < maxY) dy -= 1;
                break;
            case "left":
                if(dx * -1 < maxX) dx -= 1;
                break;
            case "right":
                if(dx < maxX) dx += 1;
                break;
        }
    }
    
    return [dx, dy];
}