// const Grass = require("./Grass");
// const random = require("./random");
 
// module.exports = class Weather extends Grass {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;

//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));
//         if (this.multiply >= 7 && newCell) {
//             const newWeather = new Weather(newCell[0], newCell[1], this.index);
//             weatherArr.push(newWeather);
//             matrix[newCell[1]][newCell[0]] = 1;
//             this.multiply = 0;
//         }
//     }

   
// }







