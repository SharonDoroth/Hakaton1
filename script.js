var directionX = 10;
var directionY = 0;

document.onkeydown = function (event) {
    switch (event.keyCode){
        case 37:
            directionX = -10;
            directionY = 0;
            break;
        case 38:
            directionX = 0;
            directionY = -10;
            break;
        case 39:
            directionX = 10;
            directionY = 0;
            break;
        case 40:
            directionX = 0;
            directionY = 10;
            break;
    }
};

var canvas = document.getElementById("snake");
var canvas2d = canvas.getContext("2d");

var gameEnded = false;
canvas.width = 400;
canvas.height = 400;

var snakeSegments = [];
var snakeLength = 1;

var snakeX = 0;
var snakeY = 0;

function moveSnake() {
  snakeSegments.unshift({ x: snakeX, y: snakeY });
  snakeX += directionX;
  snakeY += directionY;
}

function drawSnake() {
  canvas2d.fillStyle = "white";
  canvas2d.clearRect(0, 0, canvas.width, canvas.height);
}

for (var i = 0; i < snakeSegments.length; i++) {
  canvas2d.fillRect(snakeSegments[i].x, snakeSegments[i].y, 10, 10);
}

function gameLoop() {
  moveSnake();
  drawSnake();
}
