var express = require("express");
var random = require("./random");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../programing-III"));
app.get("/", function (req, res) {
    res.redirect("./index.html");
});
server.listen(3000, function () {
    console.log("App is running on port 3000");
});

const Grass = require("./class")
const GrassEater = require("./GrassEater")
const Gishatich = require("./gsh")
const Antivirus = require("./antivirus")
const Virus = require("./virus")
const Bomb = require("./bomb")

matrix = [];
a = 55;
b = 70;
grassArr = [];
grassEaterArr = [];
gshArr = [];
virusArr = [];
antivirusArr = [];
bombArr = [];

function kerparner(qanak, kerpar) {
    var p = 0;
    while (p < qanak) {
        const k = Math.floor(random(55))
        const l = Math.floor(random(70))
        if (matrix[k] == 0 && matrix[l] == 0 ) {
            matrix[k][l] = kerpar
        }
        p++;
    }
}

function generatematrix() {
    for (let i = 0; i < a; i++) {
        matrix.push([]);
        for (let j = 0; j < b; j++) {
            matrix[i].push(0);

        }
    }
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                let gsh = new Gishatich(x, y, 3)
                gshArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                let virus = new Virus(x, y, 4)
                virusArr.push(virus)
            }
            else if (matrix[y][x] == 5) {
                let antivirus = new Antivirus(x, y, 5)
                antivirusArr.push(antivirus)
            }
            else if (matrix[y][x] == 6) {
                let bomb = new Bomb(x, y, 6)
                bombArr.push(bomb)
            }
            else if (matrix[y][x] == 8) {
            }
        }
    }
}

function createGame() {
    generatematrix()
    kerparner(30, 2);
    kerparner(300, 1);
    kerparner(40, 3);
    kerparner(40, 4);
    kerparner(25, 5);
    kerparner(10, 6);

    // function gamestop() {
    //     console.log("Game stopped");
    // }
    // function reloadpage() {
    //     let f = confirm("Start again?");
    //     if (f) {
    //         window.location.reload();
    //     }
    // }
    // setTimeout(() => {
    //     reloadpage();
    // }, 55000);

    // setTimeout(() => {
    //     gamestop();
    // }, 25000);
}

function startGame() {
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in gshArr) {
        gshArr[i].eat();
    }
    for (let i in virusArr) {
        virusArr[i].eat();
    }
    for (let i in antivirusArr) {
        antivirusArr[i].eat();
    }
    for (let i in bombArr) {
        bombArr[i].start();
    }
}

createGame();

io.on("connection", function (socket) {
    setInterval(() => {
        startGame()
        socket.emit("matrix", matrix)
    },800)
});
    

