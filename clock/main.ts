const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const centerCoordX = canvas.width / 2;
const centerCoordY = canvas.height / 2;

function drawFace() {
    // Drawing Face
    ctx.beginPath();
    ctx.arc(centerCoordX, centerCoordY, 290, 0, 2 * Math.PI);
    ctx.fillStyle = '#F1EBBB';
    ctx.strokeStyle = '#D65A31';
    ctx.lineWidth = 10;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // Drawing Numbers
    let angle = 30;
    for (let i = 1; i <= 12; i++) {
        ctx.translate(centerCoordX, centerCoordY);
        ctx.beginPath();
        ctx.rotate((angle * Math.PI) / 180);
        ctx.translate(0, -250);
        ctx.rotate((-angle * Math.PI) / 180);
        ctx.translate(0, 15);
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = 'black';
        ctx.fillText(`${i}`, 0, 0);
        angle += 30;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
// Drawing MinuteHand
function drawMinutesHand(angle: number) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 5, -220);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// Drawing HourHand
function drawHourHand(angle: number) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 5, -150);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// Drawing SecondHand
function drawSecondsHand(angle: number) {
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 2, -220);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// Converting 24hr to 12hr
function getTime12Hour(hours: number): number {
    if (hours > 12) {
        return hours - 12;
    }
    return hours;
}

// Clearing Canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Init Clock
function startClock() {
    let seconds: number;
    let minutes: number;
    let hours: number;
    setInterval(() => {
        seconds = new Date().getSeconds();
        minutes = new Date().getMinutes();
        hours = getTime12Hour(new Date().getHours());
        // console.log(`${hours}:${minutes}:${seconds}`);
        clearCanvas();
        drawFace();
        drawMinutesHand(minutes * 6);
        drawHourHand(hours * 30);
        drawSecondsHand(seconds * 6);
    }, 1000)
}
startClock();

// function drawCenterCircle() {
//     ctx.beginPath();
//     ctx.arc(centerCoordX, centerCoordY, 240, 0, 2 * Math.PI);
//     ctx.fillStyle = 'green';
//     ctx.fill();
//     ctx.closePath();
// }

// drawFace();
// drawCenterCircle();
// drawSecondsHand(0);
// drawSecondsHand(90);
// drawSecondsHand(180);
// drawSecondsHand(270);