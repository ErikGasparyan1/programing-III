const socket = io();
const side = 15;
const a = 55;
const b = 70;
const grassCount1 = document.getElementById("grass")
const grassCount3 = document.getElementById("grassEater")

function setup() {
    frameRate(10);
    createCanvas(b * side, a * side);
    background('#acacac');
}

function drawGame(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("brown")
            }
            else if (matrix[y][x] == 4) {
                fill("red")
            }
            else if (matrix[y][x] == 5) {
                fill("cyan")
            }
            else if (matrix[y][x] == 6) {
                fill("black")
            }
            else if (matrix[y][x] == 7) {
                fill("orange")
            }
            rect(x * side, y * side, side, side);
        }
        socket.on('grassCount', (grassCount) => {
            grassCount1.innerHTML = `${grassCount} start game grass Count`
        })
        socket.on('grassCount2', (grassCount2) => {
            grassCount3.innerHTML = `${grassCount2} start game grassEater Count`
        })


    }
}

socket.on("matrix", drawGame)
