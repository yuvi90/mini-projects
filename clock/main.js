"use strict";
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const centerCoordX = canvas.width / 2;
const centerCoordY = canvas.height / 2;
function drawFace() {
    ctx.beginPath();
    ctx.arc(centerCoordX, centerCoordY, 290, 0, 2 * Math.PI);
    ctx.fillStyle = '#F1EBBB';
    ctx.strokeStyle = '#D65A31';
    ctx.lineWidth = 10;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    let angle = 30;
    for (let i = 1; i <= 12; i++) {
        ctx.translate(centerCoordX, centerCoordY + 15);
        ctx.beginPath();
        ctx.rotate((angle * Math.PI) / 180);
        ctx.translate(0, -250);
        ctx.rotate((-angle * Math.PI) / 180);
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = 'black';
        ctx.fillText(`${i}`, 0, 0);
        angle += 30;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
function drawMinutesHand(angle) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 5, -220);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawHourHand(angle) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 5, -150);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawSecondsHand(angle) {
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 2, -220);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function getTime12Hour(hours) {
    if (hours > 12) {
        return hours - 12;
    }
    return hours;
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function startClock() {
    let seconds;
    let minutes;
    let hours;
    setInterval(() => {
        seconds = new Date().getSeconds();
        minutes = new Date().getMinutes();
        hours = getTime12Hour(new Date().getHours());
        clearCanvas();
        drawFace();
        drawMinutesHand(minutes * 6);
        drawHourHand(hours * 30);
        drawSecondsHand(seconds * 6);
    }, 1000);
}
startClock();
