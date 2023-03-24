const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const centerCoordX = canvas.width / 2;
const centerCoordY = canvas.height / 2;

function drawFace() {
    ctx.beginPath();
    ctx.arc(centerCoordX, centerCoordY, 300, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    ctx.save();

    ctx.translate(centerCoordX, centerCoordY);
    let angle = 30;
    for (let i = 1; i <= 12; i++) {
        ctx.beginPath();
        ctx.rotate((angle * Math.PI) / 180);
        ctx.font = "26px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = 'white';
        ctx.fillText(`${i}`, 0, -250);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawMinutesHand(angle: number) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 5, -220);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawHourHand(angle: number) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 5, -150);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawSecondsHand(angle: number) {
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 2, -220);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function getTime12Hour(hours: number): number {
    if (hours > 12) {
        return hours - 12;
    }
    return hours;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

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