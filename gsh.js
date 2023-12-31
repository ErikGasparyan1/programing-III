const LivingCreature = require("./livingCreature")
const random = require("./random");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 15;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }
    mul() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            let newGSH = new Gishatich(newCell[0], newCell[1], this.index);
            gshArr.push(newGSH);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 15;
        }

    }

    eat() {
        let foods = this.chooseCell(1, 2, 3, 4, 5)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (const i in grassArr) {
                if (!(grassArr[i].x == newX && grassArr[i].y == newY)) continue;
                grassArr.splice(i, 1);
            
            }
            for (const i in fireArr) {
                if (!(fireArr[i].x == newX && fireArr[i].y == newY)) continue;
                fireArr.splice(i, 1);
            
            }
            if (this.energy >= 20) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in gshArr) {
            if (this.x == gshArr[i].x && this.y == gshArr[i].y) {
                gshArr.splice(i, 1);
                break;
            }
        }
    }
}