const random = require("./random");

module.exports = class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bursted = false;
        this.cooldown = random(200);
        this.disappearCooldown = 5;
        matrix[y][x] = 6;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y + 3],
            [this.x - 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x - 1, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 1, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y + 1],
            [this.x + 3, this.y + 1]
        ];
    }


    start() {
        this.cooldown--;
        if (this.bursted) {
            this.disappearCooldown--;
        }
        if (this.cooldown <= 0) {
            this.burst();
        }
        if (this.disappearCooldown <= 0) {
            this.remove();
        }
    }

    remove() {
        for (const d in this.directions) {
            let x = this.directions[d][0];
            let y = this.directions[d][1];
            if (!(x >= 0 && y >= 0 && x < matrix.length && y < matrix.length)) continue;
            matrix[y][x] = 0;
        }
        matrix[this.y][this.x] = 0;
        for (let i in bombArr) {
            if (!(this.x == bombArr[i].x && this.y == bombArr[i].y)) continue;
            bombArr.splice(i, 1);
            break;
        }
    }

    burst() {
        matrix[this.y][this.x] = 6;
        for (const i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (!(x >= 0 && y >= 0 && x < matrix.length && y < matrix.length)) continue;
            matrix[y][x] = 6;
            this.removeObject(x, y)
        }
        this.bursted = true;
        console.log(1);
    }

    removeObject(x, y) {
        for (const i in grassEaterArr) {
            if (!(grassEaterArr[i].x == x && grassEaterArr[i].y == y)) continue;
            grassEaterArr.splice(i, 1);
        }
        for (const i in gshArr) {
            if (!(gshArr[i].x == x && gshArr[i].y == y)) continue;
            gshArr.splice(i, 1);
        }
        for (const i in grassArr) {
            if (!(grassArr[i].x == x && grassArr[i].y == y)) continue;
            grassArr.splice(i, 1);
        }
    }
}