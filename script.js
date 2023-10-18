socket = io();
var matrixx = [];

socket.on("matrix", function(matrix){
    matrixx = matrix 
});

const side = 15;

function setup() {
    frameRate(10);
    // var m = 40;
    // var n = 20;
    createCanvas(matrixx.length * side, matrixx.length * side);
    background('#acacac');

}

function draw() {
    for (let y = 0; y < matrixx.length; y++) {
        for (let x = 0; x < matrixx[y].length; x++) {
            if (matrixx[y][x] == 1) {
                fill("green");
            }
            else if (matrixx[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrixx[y][x] == 2) {
                fill("yellow")
            }
            else if (matrixx[y][x] == 3) {
                fill("brown")
            }
            else if (matrixx[y][x] == 4) {
                fill("red")
            }
            else if (matrixx[y][x] == 5) {
                fill("cyan")
            }
            else if (matrix[y][x] == 6) {
                fill("black")
            }
            rect(x * side, y * side, side, side);
        }
    }
}
