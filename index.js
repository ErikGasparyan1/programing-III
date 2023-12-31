var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("../programing-III"));

app.get("/", function (req, res) {
  res.redirect("index.html");
});

server.listen(3001, function () {
  console.log("App is running on port 3000");
});

io.on("connection", (socket) => {
  socket.emit("matrix", matrix)
  startGame()
})


const random = require("./random");
const Grass = require('./class')
const GrassEater = require('./GrassEater')
const Gishatich = require('./gsh')
const Antivirus = require('./antivirus')
const Bomb = require('./bomb')
const Virus = require('./virus')
const Fire = require('./fire')


grassArr = [];

grassEaterArr = [];
gshArr = [];
virusArr = [];
antivirusArr = [];
bombArr = [];
fireArr = [];
matrix = [];
grassCount = 0;
grassEaterCount = 0;
fireCount = 0;
day = 0;
weather = 'winter';
const a = 55;
const b = 75;


for (let i = 0; i < a; i++) {
  matrix.push([]);
  for (let j = 0; j < b; j++) {
    matrix[i].push(0);
  }
}

function createGame() {
  function kerparner(qanak, kerpar) {
    var p = 0;
    while (p < qanak) {
      const k = Math.floor(random(a))
      const l = Math.floor(random(b))
      if (matrix[k][l] == 0) {
        matrix[k][l] = kerpar
      }
      p++;
    }
  }

  kerparner(300, 1);
  kerparner(60, 2);
  kerparner(75, 3);
  kerparner(25, 4);
  kerparner(20, 5);
  kerparner(10, 6);
  kerparner(15, 7);

  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < matrix[y].length; ++x) {
      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y, 1);
        grassArr.push(gr);
        grassCount++;
      }
      else if (matrix[y][x] == 2) {
        let gre = new GrassEater(x, y, 2)
        grassEaterArr.push(gre)
        grassEaterCount++;
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
      else if (matrix[y][x] == 7) {
        let fire = new Fire(x, y, 7)
        fireArr.push(fire)
        fireCount++;
      }
    }
  }
}


function drawGame() {
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
  for (let i in fireArr) {
    fireArr[i].eat();
  }
  io.emit("matrix", matrix)
  io.emit("weather", weather)

  day++;

  if (day <= 20) {
    weather = 'winter'
  }
  else if (day > 20 && day <= 40) {
    weather = 'spring'
  }
  else if (day > 40 && day <= 60) {
    weather = 'summer'
  }
  else if (day > 60 && day <= 80) {
    weather = 'autumn'
  }
  else if (day == 81) {
    day = 0;
  }
}

createGame()

let intervalID;

function startGame() {
  clearInterval(intervalID)
  intervalID = setInterval(() => {
    drawGame()
    io.emit("grassCount", grassCount)
    io.emit("grass", grassArr.length)
    io.emit("grassEaterCount", grassEaterCount)
    io.emit("fireCount", fireCount)
  }, 200)
}

