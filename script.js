const socket = io();
const side = 15;
const a = 55;
const b = 70;
var weather1;

const grassCount1 = document.getElementById("grass")
const grassEaterCount1 = document.getElementById("grassEater")
const fireCount1 = document.getElementById("fire")
const grassHima = document.getElementById("grasshima")


function setup() {
    frameRate(500);
    createCanvas(b * side, a * side);
    background('#acacac');
}

socket.on('weather', (weather) => {
    weather1 = weather;
})

function drawGame(matrix) {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    if (weather1 == 'winter') {
                        fill('lightgreen')
                    }
                    if (weather1 == 'spring') {
                        fill('green')
                    } 
                    if (weather1 == 'summer') {
                        fill('#d4e32d')
                    } 
                    if (weather1 == 'autumn') {
                        fill('#98964D')
                    }
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
                    fill("darkorange")
                }
                rect(x * side, y * side, side, side);
            }
            socket.on('grassCount', (grassCount) => {
                grassCount1.innerHTML = `${grassCount} start game grass Count`
            })
            socket.on('grass', (grassArr) => {
                grassHima.innerHTML = `${grassArr} Curent Grass`
            })
            socket.on('grassEaterCount', (grassEaterCount) => {
                grassEaterCount1.innerHTML = `${grassEaterCount} start game grassEater Count`
            })
            socket.on('fireCount', (fireCount) => {
                fireCount1.innerHTML = `${fireCount} start game fire Count`
            })

        }
    }
    socket.on('weather', (weather) => {
        if (weather == 'winter') {
            document.getElementById('body').style.backgroundColor = 'white';
        } else if (weather == 'spring') {
            document.getElementById('body').style.backgroundColor = 'green';
        } else if (weather == 'summer') {
            document.getElementById('body').style.backgroundColor = 'yellow';
        } else if (weather == 'autumn') {
            document.getElementById('body').style.backgroundColor = 'orange';
        }
    })

socket.on("matrix", drawGame)
