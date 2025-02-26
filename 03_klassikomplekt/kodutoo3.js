var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var gridSize = 20;
var tileCount = canvas.width / gridSize;
var snake = [{ x: 10, y: 10 }];
var direction = { x: 1, y: 0 };
var apple = { x: 5, y: 5 };
var gameOver = false;
function update() {
    if (gameOver)
        return;
    // Uue pea arvutamine
    var newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    // Kontrolli, kas madu läks vastu seina või iseend
    if (newHead.x < 0 || newHead.x >= tileCount ||
        newHead.y < 0 || newHead.y >= tileCount ||
        snake.some(function (segment) { return segment.x === newHead.x && segment.y === newHead.y; })) {
        gameOver = true;
        alert("Mäng läbi!");
        return;
    }
    // Lisa uus pea ussile
    snake.unshift(newHead);
    // Kas madu sõi õuna?
    if (newHead.x === apple.x && newHead.y === apple.y) {
        apple = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    }
    else {
        snake.pop();
    }
}
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Joonista madu
    ctx.fillStyle = "lime";
    snake.forEach(function (segment) {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
    // Joonista õun
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);
}
function gameLoop() {
    update();
    draw();
    if (!gameOver) {
        setTimeout(gameLoop, 200);
    }
}
// Klahvivajutuste kuulamine
window.addEventListener("keydown", function (event) {
    var keyMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 }
    };
    if (keyMap[event.key] && (snake.length === 1 ||
        snake[0].x + keyMap[event.key].x !== snake[1].x ||
        snake[0].y + keyMap[event.key].y !== snake[1].y)) {
        direction = keyMap[event.key];
    }
});
// Käivita mäng
gameLoop();
