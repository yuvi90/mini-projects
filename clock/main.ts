const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const centerCoordX = canvas.width / 2;
const centerCoordY = canvas.height / 2;

function drawFace() {
    ctx.beginPath();
    ctx.arc(centerCoordX, centerCoordY, 300, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
}

function drawNum() {
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    let angle = 30;
    for (let i = 1; i <= 12; i++) {
        ctx.rotate((angle * Math.PI) / 180);
        ctx.font = "26px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = 'white';
        ctx.fillText(`${i}`, 0, -250);
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
    let angle = 270;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.translate(centerCoordX-2.5, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(0, 0, 220, 5);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawSecondsHand() {
    let angle = 30;
    ctx.beginPath();
    ctx.translate(centerCoordX, centerCoordY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 220, 2);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function drawHourHand() {
    let angle = 0;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.translate(centerCoordX+2.5, centerCoordY);
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


