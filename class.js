const LivingCreature = require("./livingCreature")
const random = require("./random");

module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)

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
    mul() {
        grassST++;
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 7 && newCell) {
            const newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}


