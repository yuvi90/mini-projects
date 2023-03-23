var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var centerCoordX = canvas.width / 2;
var centerCoordY = canvas.height / 2;
function drawFace() {
    ctx.beginPath();
    ctx.arc(centerCoordX, centerCoordY, 300, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
}
function drawNum() {
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    var angle = 30;
    for (var i = 1; i <= 12; i++) {
        ctx.rotate((angle * Math.PI) / 180);
        ctx.font = "26px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = 'white';
        ctx.fillText("".concat(i), 0, -250);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawCenter() {
    ctx.beginPath();
    ctx.arc(centerCoordX, centerCoordY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}
function drawMinutesHand() {
    var angle = 270;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.translate(centerCoordX - 2.5, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 220, 5);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawSecondsHand() {
    var angle = 30;
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 220, 2);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawHourHand() {
    var angle = 0;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.translate(centerCoordX + 2.5, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 150, 5);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
drawFace();
// drawCenter();
drawNum();
drawMinutesHand();
drawHourHand();
drawSecondsHand();
